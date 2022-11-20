class AddToCartPage
{
    addToCart()
    {
        cy.get('button:contains("Add to cart")').click()
    }
}

export default AddToCartPage;