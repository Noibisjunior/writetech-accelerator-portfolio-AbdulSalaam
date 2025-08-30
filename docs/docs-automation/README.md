# API Documentation Automation

This folder contains the configuration and workflow setup for **automated validation and documentation** of our OpenAPI specifications.

## 📌 What We Set Up

- **GitHub Actions Workflow** that:
  - Validates OpenAPI 3.0 specifications with [Spectral](https://meta.stoplight.io/docs/spectral).
  - Generates static API reference documentation using [Redocly CLI](https://redocly.com/docs/cli/).
  - Deploys the generated documentation to **GitHub Pages** on every commit to the `main` branch.

- **Documentation Hosting**:  
  The generated docs are published automatically and can be accessed via GitHub Pages (see repository settings for the live URL).

- **Custom Landing Page**:  
  An `index.html` file was generated automatically in the workflow. It links to the API reference docs and the GitHub repository, and it was customized to use **Chimoney** as a case study.

---

## ✅ Rules and Standards Enforced

- **Spectral Linting**:
  - Ensures OpenAPI 3.0 specifications follow best practices.
  - Common enforced rules:
    - Every operation must have a `summary` and `description`.
    - Operation IDs must be unique.
    - Paths must begin with `/`.
    - Schema objects must have `type` defined.
    - Responses must include at least one `2xx` success code.

- **Vale (for prose linting)** *(if enabled alongside Spectral)*:
  - Enforces consistent style and grammar in API descriptions and documentation.
  - Example standards:
    - Avoids weak words like “just” or “simple”.
    - Enforces sentence case for headings.
    - Consistent spelling (e.g., “email” not “e-mail”).

Together, Spectral + Vale help ensure **technical accuracy** (OpenAPI) and **clarity** (docs prose).

---

## 📸 Screenshots (Optional)

*(Add screenshots of GitHub Actions workflow logs here if available)*

---

## ⚡ Challenges Faced

- **GitHub Pages Setup**:  
  Initially, the workflow failed with:
**Error: Get Pages site failed. Please verify that the repository has Pages enabled...**

This was fixed by enabling **GitHub Pages → Source → GitHub Actions** in the repository settings.

- **Linting Errors**:  
Spectral flagged missing descriptions and response codes in the spec, requiring multiple iterations to fix.

- **Workflow Permissions**:  
Required `permissions: contents: write, pages: write, id-token: write` to allow deployment.

---

## 📚 What We Learned

1. **CI/CD for Documentation**:  
 How to automate validation and deployment of API docs with GitHub Actions.

2. **Importance of Standards**:  
 Spectral enforces OpenAPI quality, while Vale ensures docs readability and consistency.

3. **Troubleshooting Deployments**:  
 Learned how to debug GitHub Actions errors related to permissions and Pages setup.

4. **Separation of Concerns**:  
 Splitting workflows into `validate-openapi` and `generate-docs` jobs makes the process clearer and maintainable.

---

### 🚀 Next Steps

- Expand Spectral rules to enforce security best practices (e.g., all operations must define security schemes).  
- Add automated **preview deployments for PRs** so reviewers can click and view live docs before merging.  
- Improve branding of the docs site with Chimoney’s theme.

