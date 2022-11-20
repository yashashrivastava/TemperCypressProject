class LoginPage
{

    openURL()
    {
        cy.visit("https://www.saucedemo.com/")
        cy.title().should('eq','Swag Labs')
    }


    setUserName(username)
    {
        cy.get("#user-name").clear().type(username)
    }


    setPassword(password)
    {
        cy.get("#password").clear().type(password)
    }


    clickLogin()
    {
        cy.get("#login-button").click()
    }


    verifyLogin()
    {
        cy.get("#item_4_img_link > .inventory_item_img").should('be.visible')
        cy.get("#item_4_img_link > .inventory_item_img").should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
    }


    logOut()
    {
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }
}

export default LoginPage;