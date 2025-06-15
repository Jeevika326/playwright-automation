import { defineConfig, devices } from '@playwright/test';

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;
const LT_GRID_URL = `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify({
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright-Gitpod-Build',
    name: 'Playwright-Gitpod-Test',
    user: LT_USERNAME,
    accessKey: LT_ACCESS_KEY,
    network: true,
    video: true,
    console: true,
    visual: true,
    project: 'Playwright-Gitpod',
    selenium_version: '4.0.0',
    geoLocation: 'US',
    resolution: '1920x1080',
    w3c: true
  }
}))}`;

export default defineConfig({
  retries: 1,
  fullyParallel: true,
  use: {
    headless: true,
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
    connectOptions: {
      wsEndpoint: LT_GRID_URL,
    },
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  projects: [
    {
      name: 'Windows 10 - Chromium',
      use: {
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
        viewport: { width: 1920, height: 1080 },
      },
    },
    {
      name: 'macOS Catalina - Firefox',
      use: {
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
        viewport: { width: 1920, height: 1080 },
      },
    },
  ],
});
