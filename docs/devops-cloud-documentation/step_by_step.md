# Building a Complete CI/CD Pipeline with GitHub Actions

In this guide, we'll create a robust CI/CD pipeline that includes testing, building, and deployment. We'll use a Node.js project as an example, but the concepts apply to any language.

## Step 1. Create your Project Structure

Let's start with a basic project structure:

```
nodejs-app/
├── .github/
│   └── workflows/
│       └── ci-cd.yml    # Our main workflow file
├── src/
│   └── index.js         # Application code
├── test/
│   └── index.test.js    # Test files
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## Step 2. Create your Workflow File

Create a new file at `.github/workflows/ci-cd.yml` with the following content:

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]
  workflow_dispatch:  # Allows manual triggering

jobs:
  test:
    name: Run Tests
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
      env:
        NODE_ENV: test

  build:
    name: Build Artifacts
    needs: test
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout code
      uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18.x'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Upload build artifacts
      uses: actions/upload-artifact@v3
      with:
        name: build-artifacts
        path: |
          dist/
          package.json
          package-lock.json

  deploy:
    name: Deploy to Production
    needs: build
    if: github.ref == 'refs/heads/main'  # Only run on main branch
    runs-on: ubuntu-latest
    
    steps:
    - name: Download build artifacts
      uses: actions/download-artifact@v3
      with:
        name: build-artifacts
        path: ./dist
    
    - name: Deploy to Production
      run: | npm run deploy
        echo "Deploying to production..."
        # This could be deploying to Vercel, AWS, etc.
```

## Step 3. Setting Up Environment Variables

For sensitive data like API keys or deployment tokens:

1. Go to your GitHub repository
2. Click on "Settings" > "Secrets and variables" > "Actions"
3. Click "New repository secret"
4. Add secrets like `DEPLOY_TOKEN`, `AWS_ACCESS_KEY_ID`, etc.

Use them in your workflow:

```yaml
- name: Deploy to Production
  env:
    DEPLOY_TOKEN: ${{ secrets.DEPLOY_TOKEN }}
  run: |
    echo "Deploying with token: $DEPLOY_TOKEN"
    # Add Your deployment commands here
```

## Step 4. Add a Status Badge

Add this to your README.md to show the build status:

```markdown
![CI/CD Status](https://github.com/username/repository-name/actions/workflows/ci-cd.yml/badge.svg)
```

## Step 5. Advanced Features

### Caching Dependencies

Speed up your builds by caching dependencies, add the following content to your yaml file:

```yaml
- name: Cache node modules
  uses: actions/cache@v3
  id: cache
  with:
    path: ~/.npm
    key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      ${{ runner.os }}-node-
```

### Matrix Testing

Test across multiple environments:

```yaml
jobs:
  test:
    runs-on: ${{ matrix.os }}
    strategy:
      matrix:
        os: [ubuntu-latest, windows-latest, macos-latest]
        node-version: [16.x, 18.x, 20.x]
    steps:
    - uses: actions/checkout@v3
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
```

### Scheduled Workflows

Run workflows on a schedule:

```yaml
on:
  schedule:
    # Run at 00:00 UTC every day
    - cron: '0 0 * * *'
```

## 6. Real-World Example: Deploying to Vercel

Here's how to deploy a Next.js app to Vercel:

```yaml
- name: Install Vercel CLI
  run: npm install --global vercel@latest

- name: Pull Vercel Environment Information
  run: vercel pull --yes --environment=production --token=${{ secrets.VERCEL_TOKEN }}

- name: Build Project Artifacts
  run: vercel build --token=${{ secrets.VERCEL_TOKEN }}

- name: Deploy Project Artifacts to Vercel
  run: vercel deploy --prebuilt --token=${{ secrets.VERCEL_TOKEN }} --prod
```

## 7. Best Practices for writing your workflows

1. **Keep workflows fast**: Optimize build times with caching and parallel jobs
2. **Use environment-specific configurations**: Separate dev, staging, and production environments
3. **Implement branch protection**: Require status checks to pass before merging
4. **Review security best practices**: Use secrets for sensitive information
5. **Monitor your workflows**: Set up notifications for failed workflows

In the next section, we'll cover common issues and how to troubleshoot them.
