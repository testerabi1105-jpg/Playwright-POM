class Ordersummary{
    constructor(page){
        this.finishOrder =  page.locator("#finish");
        this.backtoHomeclik = page.locator("#back-to-products");
    }

    async orderdetails(){
        await this.finishOrder.click();
        await this.backtoHomeclik.click();

    }
}

module.exports = Ordersummary;