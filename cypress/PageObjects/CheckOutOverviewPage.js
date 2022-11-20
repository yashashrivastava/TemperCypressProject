class CheckOutOverviewPage
{
    finishCheckOut()
    {
        cy.get('span').contains('Checkout: Overview')
        cy.get('#finish').click()
        cy.get('span').contains('Checkout: Complete!')
    }
}


export default CheckOutOverviewPage;