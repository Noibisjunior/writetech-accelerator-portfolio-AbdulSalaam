# Setting Up GitHub Actions

## Prerequisites

Before we begin, ensure you have the following:

- A [GitHub account](https://github.com/signup)
- Basic knowledge of Git commands and GitHub workflow
- A code project in a GitHub repository or create a new one for testing
- (Optional) [Git](https://git-scm.com/downloads) installed locally if you plan to test the workflow

## Step 1: Create a New Repository

1. **Sign in** to your GitHub account
2. **Create a new repository**:
   - Click the "+" icon in the top-right corner
   - Select "New repository"
   - Name your repository (e.g. "github-actions-demo")
   - Choose public or private visibility
   - Check "Add a README file"
   - Click "Create repository"

## Understanding the Repository Structure

Your repository should have at least these files:

```
repository-name/
├── .github/
│   └── workflows/     # GitHub Actions workflow files should be created in this folder 
├── README.md         # Project documentation
└── your source code files
```

## Step 2: Enable and verify GitHub Actions

GitHub Actions is enabled by default for all repositories. To verify:

1. Navigate to your repository on GitHub
2. Click on the "Actions" tab
3. If prompted, click "Set up a workflow yourself" or "Configure" to get started

## Step 3: Create Your First Workflow File

i. In your repository, create a new directory called `.github/workflows`
   ```bash
   mkdir -p .github/workflows
   ```
   
ii. Create a new file named `main.yml` in the `.github/workflows` directory and paste the following content:
   ```yaml
   name: CI

   on:
     push:
       branches: [ main ]
     pull_request:
       branches: [ main ]

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
       - uses: actions/checkout@v3
       - name: Run a one-line script
         run: echo "Hi my name is AbdulSalaam, I am a Technical Writer"
   ```

iii. Commit and push these changes to your repository

## Step 4: Verify Your Setup

1. Go to the "Actions" tab in your GitHub repository
2. You should see your workflow running (it may take a minute to appear)
3. Click on the workflow run to see the details and logs

## Understanding the Workflow File

Let's break down the components of the workflow file:

- `name`: The name of your workflow 
- `on`: The events that trigger the workflow
  - `push`: Triggers when code is pushed to the specified branch
  - `pull_request`: Triggers when a pull request is opened or updated
- `jobs`: A workflow can contain multiple jobs
  - `build`: The job ID 
    - `runs-on`: The type of machine to run the job on
    - `steps`: A sequence of tasks to execute
      - `uses`: Uses a pre-built action like checking out code
      - `run`: Executes a command in the runner's shell

In the next section, we will expand this basic workflow into a more comprehensive CI/CD pipeline.
