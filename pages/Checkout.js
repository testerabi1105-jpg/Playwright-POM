class Checkout{
    constructor(page){
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.zipCode = page.getByPlaceholder("Zip/Postal Code");
        this.continueOut = page.getByRole("button",{name: "Continue"});
        this.cancelOrder = page.locator("#cancel");
        this.againgotoCart = page.locator(".shopping_cart_link");
        this.checkoutAgain = page.locator("#checkout");
    }

    async detailsFill(firstName,lastName,zipCode){
        await this.firstName.fill(firstName);
        await this.lastName.fill(lastName);
        await this.zipCode.fill(zipCode);

       
        
    }

    async stepsGo(){
        await this.continueOut.click();
        await this.cancelOrder.click();
        await this.againgotoCart.click();
        await this.checkoutAgain.click();
    }

    async okGo(){
        await this.continueOut.click();

    }
}

module.exports = Checkout;