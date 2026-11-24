import { test, expect } from '@playwright/test';
 let siteOne = "https://www.saucedemo.com/inventory.html";
 test("login", async({page}) => {
    await page.goto(siteOne);
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name :"login"}).click();
    
    await page.locator("#add-to-cart-sauce-labs-backpack").click();
    await page.locator("#add-to-cart-sauce-labs-bike-light").click();
    await page.locator("#add-to-cart-sauce-labs-bolt-t-shirt").click();
    await page.locator("#add-to-cart-sauce-labs-fleece-jacket").click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('4');
    await page.locator("#remove-sauce-labs-backpack").click();
    await expect(page.locator('.shopping_cart_badge')).toHaveText('3');
    await page.locator("#remove-sauce-labs-bike-light").click();
    await page.locator("#checkout").click();
    await page.locator("#cancel").click();
    await page.locator("#checkout").click();
    await page.getByPlaceholder("First Name").fill("Abishek");
    await page.getByPlaceholder("Last Name").fill("Babu");
    await page.getByPlaceholder("Zip/Postal Code").fill("682005");
    await page.getByRole("button",{name: "Continue"}).click();
    await page.locator("#cancel").click();
    await page.locator(".shopping_cart_link").click();
    await page.locator("#checkout").click();
    await page.getByPlaceholder("First Name").fill("Abishek");
    await page.getByPlaceholder("Last Name").fill("Babu");
    await page.getByPlaceholder("Zip/Postal Code").fill("682005");
    await page.getByRole("button",{name: "Continue"}).click();
    await page.locator("#finish").click();
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
    await page.locator("#back-to-products").click();
    await page.getByRole("button",{name:"Open Menu"}).click();
    await page.locator("#logout_sidebar_link").click();
    await expect(page.locator('#login-button')).toHaveText('Login');
     
 });