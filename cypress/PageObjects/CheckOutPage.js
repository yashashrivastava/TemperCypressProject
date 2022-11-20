class CheckOutPage
{
    clickCheckOut()
    {
        cy.get('#checkout').click()
        cy.get('span').contains('Checkout: Your Information')
    }
}


export default CheckOutPage;