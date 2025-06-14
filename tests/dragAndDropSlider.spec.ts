import { test, expect } from '@playwright/test'; 

test('Drag the slider with default value 15 to 95', async ({ page }) => {
    // Step 1: Open the Selenium Playground page
    await page.goto('https://www.lambdatest.com/selenium-playground');

    // Step 2: Click on "Drag & Drop Sliders"
    await page.locator('text=Drag & Drop Sliders').click();

    // Step 3: Locate the slider inside #slider3
    const slider = page.locator("#slider3 input[type='range']");
    const rangeValue = page.locator("#slider3 output"); 

    // Step 4: Move the slider using the keyboard or drag action
    await slider.click(); // Click to focus
    await page.keyboard.press('ArrowRight', { delay: 50 }); 

    // Adjust until the value reaches 95
    while ((await rangeValue.textContent()) !== '95') {
        await page.keyboard.press('ArrowRight');
    }

    // Step 5: Validate the displayed range value is 95
    await expect(rangeValue).toHaveText('95');
});
