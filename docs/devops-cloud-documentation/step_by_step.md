# Building a Complete CI/CD Pipeline with GitHub Actions

In this guide, we'll create a robust CI/CD pipeline that includes testing, building, and deployment. We'll use a [Node.js](https://nodejs.org/) project as an example, but the concepts apply to any language or framework.

## Step 1: Create Project Structure

Before setting up [GitHub Actions](https://github.com/features/actions), organize your project with a clear structure. Here's a typical layout for a [Node.js](https://nodejs.org/) application: 

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

## Step 2: Create Workflow File
Now create a [workflow file](https://docs.github.com/en/actions/using-workflows/about-workflows) that automates testing, building, and deployment. This workflow will run tests first, then build the application if tests pass, and finally deploy to production only when code is merged to the `main` branch.

Create a new file at `.github/workflows/ci-cd.yml` with the following configuration:

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

- Go to your GitHub repository
- Click on "Settings" > "Secrets and variables" > "Actions"
- Click "New repository secret"
- Add secrets like `DEPLOY_TOKEN`, `AWS_ACCESS_KEY_ID`, etc.

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

[Matrix builds](https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs) allow you to test your application across multiple operating systems, programming language versions, or configurations in parallel. This ensures compatibility across different environments.

This example tests on 3 operating systems and 3 [Node.js](https://nodejs.org/) versions (9 total combinations):

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

[Scheduled workflows](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule) run automatically at specified times using [cron syntax](https://crontab.guru/). Perfect for nightly builds, database backups, or periodic reports.

This example runs the workflow daily at midnight UTC:

```yaml
on:
  schedule:
    # Run at 00:00 UTC every day
    - cron: '0 0 * * *'
```

**Tip:** Use [crontab.guru](https://crontab.guru/) to generate and validate cron expressions.

## Step 6: Real-World Example - Deploying to Vercel
Let's deploy a [Next.js](https://nextjs.org/) application to [Vercel](https://vercel.com/) automatically when code is pushed to the main branch. 

First, obtain your Vercel token from [Vercel Account Settings](https://vercel.com/account/tokens) and add it as a secret named `VERCEL_TOKEN`.

Add this deployment job to your workflow:

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

## Security Best Practices
Security is critical when automating workflows. Follow these practices to protect your code, credentials, and deployments.

### 1. Protect Secrets and Credentials

**Never hard-code sensitive information** in your workflow files. Always use [GitHub secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets).

**Bad Practice:**

```yaml
- name: Deploy
 env:
 API_KEY: sk-1234567890abcdef # Never do this!
 run: deploy-app
```
**Good Practice:**

```yaml
- name: Deploy
 env:
 API_KEY: ${{ secrets.API_KEY }}
 run: deploy-app
```
### 2. Limit Token Permissions

Use [fine-grained permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token) for the `GITHUB_TOKEN` to follow the principle of least privilege.

```yaml
permissions:
 contents: read # Read repository contents
 pull-requests: write # Comment on pull requests
 issues: write # Create/update issues
```
**Avoid using:**
```yaml
permissions: write-all # Too permissive!
```
