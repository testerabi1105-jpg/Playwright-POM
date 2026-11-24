class Logout{
    constructor(page){
       this.menuClick = page.getByRole("button",{name:"Open Menu"});
       this.logoutClick = page.locator("#logout_sidebar_link");

    }

    async done(){
        await this.menuClick.click();
        await this.logoutClick.click();
    }
}

module.exports = Logout;