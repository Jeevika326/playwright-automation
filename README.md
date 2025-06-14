# Playwright LambdaTest Automation Framework

## Overview
This framework provides automated testing capabilities using Playwright to test web applications on the LambdaTest platform.

## Prerequisites
- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/) 
- [Visual Studio Code]

## Installation
### Clone the repository:
```sh
git clone <repository-url>
cd playwright-lambdatest-automation
```

### Install dependencies:
```sh
npx playwright install-deps and npx playwright install 
```

### Install Playwright browsers:
```sh
npx playwright install
```

## Project Structure
The framework follows a structured test automation approach:
- `tests/` - Contains test scripts.
- `playwright.config.ts` - Configuration file for Playwright settings.

## Configuration
The framework uses `playwright.config.ts` for test configuration, including browser settings, test timeout, and reporting.

## Running Tests
### Run all tests:
```sh
npx playwright test
```

### Run a specific test file:
```sh
npx playwright test tests/simpleFormDemo.spec.ts
```

### Run tests in headed mode:
```sh
npx playwright test --headed
```

## Scripts
Available npm scripts:
- `"test"`: Runs all Playwright tests using `npx playwright test`

## Dependencies
- `@playwright/test`: ^1.50.1
- `@types/node`: ^22.13.8
- `typescript`: ^5.0.0

## Reporting
Test reports are automatically generated after test execution. To view the HTML report:
```sh
npx playwright show-report
```
