import LoginPage from "../PageObjects/LoginPage";
import AllProductsPage from "../PageObjects/AllProductsPage";
import AddToCartPage from "../PageObjects/AddToCartPage";
import YourCartPage from "../PageObjects/YourCartPage";
import CheckOutPage from "../PageObjects/CheckOutPage";
import CheckOutYourInfoPage from "../PageObjects/CheckOutYourInfoPage";
import CheckOutOverviewPage from "../PageObjects/CheckOutOverviewPage";

describe('EndToEnd FLow of a Product', () =>
{
    const loginPage = new LoginPage();
    const allProductsPage = new AllProductsPage();
    const addToCartPage = new AddToCartPage();
    const yourCartPage = new YourCartPage();
    const checkOutPage = new CheckOutPage();
    const checkOutYourInfoPage = new CheckOutYourInfoPage();
    const checkOutOverviewPage = new CheckOutOverviewPage();


    it('Verify that end to end flow of buying a product works successfully for Standard User', () =>
        {
            const inputs = [
                {
                    identifier:"#item_4_img_link",
                    image:'/static/media/sauce-backpack-1200x1500.34e7aa42.jpg'         
                },
                {
                    identifier:"#item_0_img_link",
                    image:'/static/media/bike-light-1200x1500.a0c9caae.jpg'         
                }
            ];

            inputs.forEach((value) => {
                loginPage.openURL()
                loginPage.setUserName("standard_user")
                loginPage.setPassword("secret_sauce")
                loginPage.clickLogin()
                loginPage.verifyLogin()
                allProductsPage.selectProduct(value.identifier, value.image)
                addToCartPage.addToCart()
                yourCartPage.goToCart()
                checkOutPage.clickCheckOut()
                checkOutYourInfoPage.fillInYourInfo("randomFirstName", "randomLastName", "randomPostalCode")
                checkOutOverviewPage.finishCheckOut()
                loginPage.logOut()
            });

            
    })
})