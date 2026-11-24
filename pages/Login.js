
class Login{
    constructor(page){
        this.page = page;
        this.userName = page.getByPlaceholder("Username");
        this.passWord = page.getByPlaceholder("Password"); 
        this.loginButton = page.getByRole("button",{name :"login"});
    };

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    };

    async loginToPage(userName,passWord){
        await this.userName.fill(userName);
        await this.passWord.fill(passWord);
        await this.loginButton.click();
    };
};

module.exports = Login; //to export this to POM