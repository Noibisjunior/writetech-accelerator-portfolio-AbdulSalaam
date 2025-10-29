# Troubleshooting GitHub Actions

This guide addresses common issues you might encounter when working with [GitHub Actions](https://github.com/features/actions) and provides practical solutions to resolve them quickly.

## Debugging Workflow

```
    Workflow Failing?
          │
          │
          ↓
    Check Workflow Logs
          │
          │
     ┌────┴────┐
     │         │
     │         │
  Syntax?   Permission?
     │         │
     ↓         ↓
  Fix YAML  Update Secrets
```

*Figure 1: Basic troubleshooting flowchart for failed workflows.*

## Common Issues and Solutions

### 1. Workflow Not Triggering

**Symptom:** Your workflow doesn't run when you push changes or create a pull request.

**Issue**: Your workflow isn't running when you push changes or create a pull request.

**Possible Causes and Solutions**:
- **Incorrect branch name in workflow file**: 
  ```yaml
  on:
    push:
      branches: [ main ]  # make sure this matches your branch name
  ```
- **Workflow file not in the correct location**: Must be in `.github/workflows/`
- **Syntax error in workflow file**: Use the [GitHub Actions Workflow Validator](https://github.com/marketplace/actions/github-action-workflow-validator)
- **GitHub Actions disabled for the repository**: Check repository settings > Actions > General

### 2. Permission Denied Errors

**Issue**: Getting "Permission denied" when trying to access files or run scripts.

**Solutions**:
- Make scripts executable:
  ```yaml
  - name: Make script executable
    run: chmod +x script.sh
  ```
- Use `GITHUB_WORKSPACE` for file paths:
  ```yaml
  - name: Run script
    run: ./script.sh
    working-directory: ${{ github.workspace }}
  ```

### 3. Authentication Failures

**Issue**: Authentication errors when accessing private repositories or deploying to cloud providers.

**Solutions**:
- For GitHub access:
  ```yaml
  - name: Checkout private repository
    uses: actions/checkout@v3
    with:
      token: ${{ secrets.GH_PAT }}
  ```
- For cloud providers, ensure you've added the necessary secrets in your repository settings.

### 4. Workflow Timeout

**Issue**: Workflow fails due to timeout (default is 6 hours).

**Solutions**:
- Optimize your workflow:
  - Use caching for dependencies
  - Split into smaller jobs
  - Use `timeout-minutes` to set a custom timeout:
  ```yaml
  jobs:
    build:
      runs-on: ubuntu-latest
      timeout-minutes: 30  # Set custom timeout
  ```

### 5. Environment Variables Not Available

**Issue**: Environment variables are not accessible in your workflow.

**Solutions**:
- Set environment variables at the job or step level:
  ```yaml
  env:
    NODE_ENV: production
  
  jobs:
    build:
      env:
        CUSTOM_VAR: value
      steps:
        - name: Use environment variable
          run: echo $CUSTOM_VAR
  ```
- For multiline values, use the `|` character:
  ```yaml
  env:
    MULTILINE_VAR: |
      This is line one
      This is line two
  ```

### 6. Artifact Download/Upload Issues

**Issue**: Problems with uploading or downloading artifacts between jobs.

**Solutions**:
- Ensure consistent artifact names between upload and download
- Check file paths are correct
- Verify the artifact exists in the workflow run
- Use `actions/upload-artifact@v3` and `actions/download-artifact@v3`

### 7. Self-Hosted Runner Issues

**Issue**: Problems with self-hosted runners not picking up jobs.

**Solutions**:
- Verify the runner is online in the repository/organization settings
- Check runner logs: `./run.sh --debug`
- Ensure labels match the workflow requirements:
  ```yaml
  jobs:
    build:
      runs-on: [self-hosted, linux, x64]
  ```

### 8. Debugging Workflow Failures

Use these techniques to debug failing workflows:

1. **Enable Step Debug Logging**:
   - Add a secret named `ACTIONS_STEP_DEBUG` with value `true` to enable debug logging
   - Access the debug logs in the workflow run

2. **Add Debugging Steps**:
   ```yaml
   - name: Debug Information
     run: |
       echo "Current directory: $(pwd)"
       echo "Environment variables:"
       env
       echo "Git status:"
       git status
   ```

3. **Check Workflow Run Logs**:
   - Go to the "Actions" tab
   - Click on the failed workflow run
   - Review the logs for the failing step

### 9. Common YAML Syntax Errors

- **Tabs instead of spaces**: YAML requires spaces for indentation and not tabs
- **Inconsistent indentation**: Maintain consistent spacing usually 2 spaces per level
- **Missing colons** after keys
- **Incorrect boolean values**: Use `true`/`false` 

### 10. Rate Limiting

**Issue**: Hitting GitHub API rate limits.

**Solutions**:
- Use `GITHUB_TOKEN` for GitHub API calls because it has higher rate limits
- For authenticated requests, use a Personal Access Token (PAT)
- Implement retry logic for API calls:
  ```yaml
  - name: Make API Call with Retry
    run: |
      for i in {1..3}; do
        curl -H "Authorization: token ${{ secrets.GH_PAT }}" \
             -H "Accept: application/vnd.github.v3+json" \
             https://api.github.com/repos/owner/repo/endpoint && break
        sleep 5
      done
  ```

## Getting Help

If you're still experiencing issues:
1. Check the [GitHub Actions Documentation](https://docs.github.com/en/actions)
2. Search [GitHub Community](https://github.community/)
3. Review the [GitHub Actions Issues](https://github.com/actions/toolkit/issues)
4. Check the [GitHub Status](https://www.githubstatus.com/) page for any ongoing incidents

In the next section, we'll summarize what we've learned and suggest next steps for expanding your CI/CD pipeline.
