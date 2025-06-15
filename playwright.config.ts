import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const LT_USERNAME = process.env.LT_USERNAME || '';
const LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || '';

// Common LambdaTest options
const commonLTOptions = {
  'platform': 'Windows 10',
  'build': `Playwright Build - ${new Date().toISOString()}`,
  'user': LT_USERNAME,
  'accessKey': LT_ACCESS_KEY,
  'network': true,
  'video': true,
  'console': true,
  'tunnel': false,
  'project': 'Playwright Test Project',
};

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  retries: 1,
  workers: 2,
  reporter: [['html', { outputFolder: 'playwright-report' }]],

  projects: [
    {
      name: 'Chrome@latest',
      use: {
        connectOptions: {
          wsEndpoint: `wss://${LT_USERNAME}:${LT_ACCESS_KEY}@cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify({
            'browserName': 'Chrome',
            'browserVersion': 'latest',
            'LT:Options': {
              ...commonLTOptions,
              'name': 'Playwright Test - Chrome'
            }
          }))}`
        }
      }
    },
    {
      name: 'Edge@latest',
      use: {
        connectOptions: {
          wsEndpoint: `wss://${LT_USERNAME}:${LT_ACCESS_KEY}@cdp.lambdatest.com/playwright?capabilities=
          ${encodeURIComponent(JSON.stringify({
            'browserName': 'MicrosoftEdge',
            'browserVersion': 'latest',
            'LT:Options': {
              ...commonLTOptions,
              'name': 'Playwright Test - Edge'
            }
          }))}`
        }
      }
    }
  ],

  use: {
    baseURL: 'https://www.lambdatest.com',
    trace: 'retain-on-failure',
    video: 'off', // Disable local video recording
    screenshot: 'only-on-failure'
  },
});

