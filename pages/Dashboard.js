class Dashboard{
    constructor(page){
        this.page = page;
        this.item1 = page.locator("#add-to-cart-sauce-labs-backpack");
        this.item2 = page.locator("#add-to-cart-sauce-labs-bike-light");
        this.item3 = page.locator("#add-to-cart-sauce-labs-bolt-t-shirt");
        
    };
    async additem(){
        await this.item1.click();
        await this.item2.click();
        await this.item3.click();

    };
};

module.exports = Dashboard;