# API Documentation Automation

This folder contains the configuration and workflow setup for **automated validation and documentation** of the OpenAPI specifications.

## My setup includes:

- **GitHub Actions Workflow** that:
  - Validates OpenAPI 3.0 specifications with [Spectral](https://meta.stoplight.io/docs/spectral).
  - Generates static API reference documentation using [Redocly CLI](https://redocly.com/docs/cli/).
  - Deploys the generated documentation to **GitHub Pages** on every commit to the `main` branch.

- **Documentation Hosting**:  
  The generated docs are published automatically and can be accessed via [GitHub Pages](https://noibisjunior.github.io/writetech-accelerator-portfolio-AbdulSalaam/.)

- **Custom Landing Page**:  
  An `index.html` file was generated automatically in the workflow. It links to the API reference docs and the GitHub repository, and it was customized to use **Chimoney** as a case study.

---

## Rules and Standards Enforced

- **Spectral Linting**:
  - Ensures OpenAPI 3.0 specifications follow best practices.
  - Common enforced rules:
    - Every operation must have a `summary` and `description`.
    - Operation IDs must be unique.
    - Paths must begin with `/`.
    - Schema objects must have `type` defined.
    - Responses must include at least one `2xx` success code.

- **for Vale linting**:
  - Enforces consistent style and grammar in API descriptions and documentation.
  - Example standards:
    - Avoids weak words like “just” or “simple”.
    - Enforces sentence case for headings.
    - Consistent spelling (e.g., “email” not “e-mail”).
---

## Screenshots 

[Workflow Logs](../../static/img/workflow.jpg)

---

## My Challenges 

- **GitHub Pages Setup**:  
  Initially, the workflow failed with:
**Error: Get Pages site failed. Please verify that the repository has Pages enabled...**

This was fixed by enabling **GitHub Pages → Source → GitHub Actions** in the repository settings.

---

## What I have Learnt so far

1. **CI/CD for Documentation**:  
 I learnt how to automate validation and deployment of API docs with GitHub Actions.

2. **Importance of Standards**:  
 Spectral enforces OpenAPI quality, while Vale ensures docs readability and consistency.

3. **Troubleshooting Deployments**:  
 I also learnt how to debug GitHub Actions errors related to permissions and Pages setup.

---