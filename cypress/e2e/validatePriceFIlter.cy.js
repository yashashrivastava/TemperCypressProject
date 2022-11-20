import AllProductsPage from "../PageObjects/AllProductsPage";
import LoginPage from "../PageObjects/LoginPage";

describe('Verify that filter Price (low to high) is working fine', () =>
{
    const loginPage = new LoginPage();
    const allProductPage = new AllProductsPage();

    it('Verify that filter Price (low to high) is working properly for Standard User', () =>
        {
            loginPage.openURL()
            loginPage.setUserName("standard_user")
            loginPage.setPassword("secret_sauce")
            loginPage.clickLogin()
            loginPage.verifyLogin()
            allProductPage.verifyLowToHighPriceFilter()
            loginPage.logOut()
        })
})