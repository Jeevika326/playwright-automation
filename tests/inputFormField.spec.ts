import { test, expect } from '@playwright/test'; 

test('Validate Input Form Submit functionality', async ({ page }) => {
    // Step 1: Open the Selenium Playground page
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Step 2: Click on "Input Form Submit"
    await page.click('text=Input Form Submit');

    // Step 3: Click Submit without filling in any fields
    await page.locator('button:has-text("Submit")').click();

    // Step 4: Wait for error message using `validationMessage`
    //const usernameField = page.locator('input[name="name"]');
    const usernameField=await page.locator('input#name[required]:invalid')
    const validationMessage = await usernameField.evaluate((element) => {
        return (element as HTMLInputElement).validationMessage;  
      });
    expect(validationMessage).toBe('Please fill out this field.'); 

    // Step 5: Fill in all required fields using different locator strategies
    await page.fill('input[name="name"]', 'John Doe'); 
    await page.fill('#inputEmail4', 'johndoe@example.com'); 
    await page.fill('input[name="password"]', '1234567890');
    await page.fill('input[name="company"]', 'LambdaTest');
    await page.fill('input[name="website"]', 'https://www.example.com');

    // Step 6: Select "United States" from the Country dropdown
    const countryDropdown = page.locator('select[name="country"]');
    await expect(countryDropdown).toBeVisible(); 
    await countryDropdown.selectOption({ label: 'United States' });

    // Step 7: Fill in address fields using a mix of different locators
    await page.locator('input[name="city"]').fill('Los Angeles'); 
    await page.locator('#inputAddress1').fill('abc address'); 
    await page.locator("#inputAddress2").fill('def address'); 
    await page.fill('#inputState', 'Tamilnadu');
    await page.fill('input[name="zip"]', '90001');

    // Step 8: Click Submit
    await page.locator('button:has-text("Submit")').click();

   // Step 8: Validate success message
   const successMessage = page.locator('.success-msg');
   await expect(successMessage).toBeVisible(); 
   await expect(successMessage).toHaveText('Thanks for contacting us, we will get back to you shortly.');
});