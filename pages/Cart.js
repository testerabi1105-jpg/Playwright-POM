class Cart{
    constructor(page){
        this.gotocart =  page.locator(".shopping_cart_link");
        this.removeitem1 = page.locator("#remove-sauce-labs-backpack");
        this.removeitem2 = page.locator("#remove-sauce-labs-bike-light");
        this.checkoutItem = page.locator("#checkout");
        this.cancelItem =  page.locator("#cancel");
        

    }

    async gotoCartPage(){
        await this.gotocart.click();
    }

    async removeItem(){
        await this.removeitem1.click();
        await this.removeitem2.click();
    }

    async checkOut(){
        await this.checkoutItem.click();
       
    }

    async Canceled(){
        await this.cancelItem.click();
    }


}

module.exports = Cart;