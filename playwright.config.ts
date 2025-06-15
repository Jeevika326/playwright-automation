import { defineConfig, devices } from '@playwright/test';

const LT_USERNAME = process.env.LT_USERNAME;
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY;

export default defineConfig({
  testDir: './tests',
  retries: 1,
  workers: 3,
  fullyParallel: true,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    baseURL: 'https://www.lambdatest.com',
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        browserName: 'chromium',
      },
    },
    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        browserName: 'firefox',
      },
    },
    {
      name: 'webkit',
      use: { 
        ...devices['Desktop Safari'],
        browserName: 'webkit',
      },
    },
  ],
});

