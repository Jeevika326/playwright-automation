# Playwright LambdaTest Automation Framework

## Overview
This framework provides automated testing capabilities using Playwright to test web applications on the LambdaTest platform.

## Prerequisites
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Visual Studio Code]
- [Gitpod Account](https://gitpod.io/)
- LambdaTest Account (for credentials)

## Installation
### Clone the repository:
```sh
git clone <repository-url>
cd playwright-lambdatest-automation-main
```

### Install dependencies:
```sh
npm install
```

## LambdaTest Credentials
Set your LambdaTest credentials as environment variables in Gitpod:
```sh
export LT_USERNAME=<your-lambdatest-username>
export LT_ACCESS_KEY=<your-lambdatest-access-key>
```
Or add them to your Gitpod environment variables settings for persistence.

## Running Tests in Gitpod
1. Open the repository in Gitpod (single-click launch supported).
2. Run all tests in parallel on LambdaTest Cloud Grid:
```sh
npx playwright test
```

## Features
- Parallel execution on LambdaTest Cloud Grid
- Network logs, video recording, screenshots, and console logs enabled
- Modern Playwright configuration

## Project Structure
- `tests/` - Contains test scripts.
- `playwright.config.ts` - Playwright configuration for LambdaTest.
- `.gitpod.yml` - Gitpod environment setup.

## Test Results & Reports
- HTML reports: `playwright-report/`
- LambdaTest dashboard: Find your test runs and Test IDs for submission.

## Submitting Test IDs
After running tests, visit your LambdaTest Automation Dashboard to find and submit the Test IDs as required.

## Support
For issues, contact LambdaTest support or your admin.
