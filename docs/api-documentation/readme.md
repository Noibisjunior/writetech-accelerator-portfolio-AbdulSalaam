# API Documentation Projects

This project documents the **Chimoney REST API**, built using a **Docs-as-Code** approach with Docusaurus.  
The documentation includes an overview, a beginner-friendly setup guide, and selected API endpoint references.

## Live Site
[View Documentation](https://writetech-accelerator-portfolio-abd.vercel.app/)

## Improvements Made
- Wrote a clear and structured **Getting Started** guide for beginners  
- Standardized endpoint docs with **headers, parameters, responses, and errors**  
- Added practical **curl examples** for quick testing and reproducibility  

## Challenges Faced
- Integrating the **OpenAPI plugin** with Docusaurus  
- Understanding and documenting **authentication flows**  
- Debugging a **`npm run build` issue** caused by plugin incompatibility  
  - Solved by adding:  
    ```js
    docItemComponent: "@theme/ApiItem"
    ```
    to the `classic` config in `docusaurus.config.js`

## Key Learnings
- Best practices for structuring API docs using a **Docs-as-Code workflow**  
- Importance of documenting **error responses** alongside successful ones  
- How OpenAPI specs can generate **interactive, standardized API docs**  
- Practical debugging experience when working with doc toolchains  

---

### My Reflection
This project gave me hands-on experience applying **Docs-as-Code principles** to a real API.  
I learned how proper documentation design not only helps users get started faster but also reduces support overhead for developers.  
