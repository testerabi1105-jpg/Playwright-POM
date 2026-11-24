import {test} from '@playwright/test';


test.beforeEach("Navigate Saucedemo page",async({page}) =>{
    await page.goto("file:///E:/TM%20-%20Playwright%20with%20JavaScript/locators-practice.html");

});


test("firstName", async ({page}) =>{
    await page.getByRole("textbox",{name: "First Name"}).fill("Abishek Babu");
})

test("shortBio",async({page}) =>{
    await page.getByRole("textbox",{name:"Short Bio"}).fill("My name is Abishek Babu. I am graduate in Engineering.");
})

