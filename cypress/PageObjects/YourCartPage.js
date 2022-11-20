class YourCartPage
{
    goToCart()
    {
        cy.get('.shopping_cart_link').click()
        cy.get('span').contains('Your Cart')
    }
}


export default YourCartPage;