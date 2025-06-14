import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  retries: 1,
  fullyParallel: true, // Enables parallel execution
  use: {
    headless: true,
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  reporter: [['html', { outputFolder: 'playwright-report', open: 'always' }]],
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

    // {
    //   name: 'Windows 11 - Chromium',
    //   use: {
    //     ...devices['Desktop Chrome'], 
    //     browserName: 'chromium', 
    //     viewport: { width: 1920, height: 1080 },
    //   },
    // },
    
  ],
});
