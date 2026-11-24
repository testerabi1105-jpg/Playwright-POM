import {test} from '@playwright/test';

test.beforeAll(async () => {
    console.log('BEFORE ALL - Runs once before all tests'); // beforeAll hook runs once before all tests in the file, useful for setup tasks like initializing a database connection or starting a server.
});

test.afterAll(async () => {
    console.log('AFTER ALL - Runs once after all tests');   // afterAll hook runs once after all tests in the file, useful for cleanup tasks like closing a database connection or stopping a server.
});

test.beforeEach(async () => {
    console.log('BEFORE EACH - Runs before every test');    // beforeEach hook runs before each test in the file, useful for resetting state or preparing the environment for each test.
});

test.afterEach(async ({ page }) => {
    console.log('AFTER EACH - Runs after every test');
    console.log('Current URL:', page.url());
});

test("Google site", async({page}) =>{
    await page.goto("https://www.google.com/")
})

test("Saucedemo", async({page}) =>{
    await page.goto("https://www.saucedemo.com/")
})