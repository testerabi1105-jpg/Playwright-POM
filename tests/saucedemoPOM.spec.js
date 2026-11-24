import {expect,test} from '@playwright/test'

const Login = require('../pages/Login');
const Dashboard = require('../pages/Dashboard');
const Cart = require('../pages/Cart');
const Checkout = require('../pages/Checkout');
const Ordersummary = require('../pages/Ordersummary')
const Logout = require('../pages/Logout')

test("Saucedemo full Automation", async({page}) =>{
    const SaucedemoLogin = new Login(page);
    await SaucedemoLogin.gotoLoginPage();
    await SaucedemoLogin.loginToPage("standard_user","secret_sauce");

    const SaucedemoDashboard = new Dashboard(page);
    await SaucedemoDashboard.additem();

    const saucedemoCart = new Cart(page);
    await saucedemoCart.gotoCartPage();
    await saucedemoCart.removeItem();
    await saucedemoCart.checkOut();
    await saucedemoCart.Canceled();
    await saucedemoCart.checkOut();

    const saucedemoCheckout = new Checkout(page);
    await saucedemoCheckout.detailsFill("Abi","Babu","682020");
    await saucedemoCheckout.stepsGo();
    await saucedemoCheckout.detailsFill("Abi","Babu","682020");
    await saucedemoCheckout.okGo();

    const saucedemoOrder = new Ordersummary(page);
    await saucedemoOrder.orderdetails();

    const saucedemoLogout = new Logout(page);
    await saucedemoLogout.done();
});

