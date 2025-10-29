# Setting Up GitHub Actions

## Prerequisites

Before getting started with [GitHub Actions](https://github.com/features/actions), ensure you have:

| Requirement | Description | Resource |
|-------------|-------------|----------|
| **GitHub Account** | Free account to create repositories | [Sign up](https://github.com/signup) |
| **Git Knowledge** | Basic Git commands and workflow | [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics) |
| **Code Project** | Existing project or new repository | [GitHub Repos](https://docs.github.com/en/repositories) |
| **Git Installation** | (Optional) Local testing | [Download Git](https://git-scm.com/downloads) |

## Step 1: Create New Repository

Follow these steps to create a new [GitHub repository](https://docs.github.com/en/repositories/creating-and-managing-repositories) for your project:

- Sign in to your GitHub account
- Create a new repository:
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

- Navigate to your repository on GitHub
- Click on the **Actions** tab
- If prompted, click **Set up a workflow yourself** or **Configure** to get started

> **Note:** If you don't see the Actions tab, check your repository settings to ensure Actions are enabled.

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

- Go to the "Actions" tab in your GitHub repository
- You should see your workflow running (it may take a minute to appear)
- Click on the workflow run to see the details and logs

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
