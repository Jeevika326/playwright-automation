
import { test, expect } from '@playwright/test';

test('Simple Form Demo - Validate message', async ({ page }) => {
  await page.goto('https://www.lambdatest.com/selenium-playground');

  await page.getByText('Simple Form Demo').click();
  await expect(page).toHaveURL(/simple-form-demo/);

  const message = "Welcome to LambdaTest";

  await page.locator('#user-message').nth(0).fill(message);

  await page.locator("button[id='showInput']").click();

  // Using another ID locator for verification
  const outputMessage = await page.locator('#message').textContent();
  await page.waitForTimeout(1000)
  expect(outputMessage).toContain(message);
});

