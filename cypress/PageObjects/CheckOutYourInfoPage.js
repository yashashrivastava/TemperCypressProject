class CheckOutYourInfoPage
{
    fillInYourInfo(randomFirstName, randomLastName, randomPostalCode)
    {
        cy.get('span').contains('Checkout: Your Information')
        cy.get("#first-name").type(randomFirstName)
        cy.get("#last-name").type(randomLastName)
        cy.get("#postal-code").type(randomPostalCode)
        cy.get('#continue').click()
        cy.get('span').contains('Checkout: Overview')
    }
}


export default CheckOutYourInfoPage;