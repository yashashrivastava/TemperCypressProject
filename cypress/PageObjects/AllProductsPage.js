
class AllProductsPage

{
    selectProduct(identifier, image)
    {
        cy.get(identifier+ " > .inventory_item_img").should('have.attr', 'src', image).click()
        cy.get('#back-to-products').should('be.visible')
    }


    getAllPrices(){
        const { _, $ } = Cypress
        return cy.get('.inventory_item_price')
        .then(($prices) =>
             _.map($prices, (el) => el.innerText),
            )
        .then((list) => list.map((text) => text.substring(1)))
        .then((list) => list.map((str) => str.replace(/[^0-9.]/g, '')))
        .then((list) => list.map(parseFloat))
    }

    

    verifyLowToHighPriceFilter()
    {
        const { _, $ } = Cypress
        this.getAllPrices()
            .then((list) => {
                 // confirm the list is not sorted by sorting it 
                // and comparing it with the original and sorted lists
                const sorted = _.sortBy(list)
                // const sorted = _.sortBy(list, desc) 
                expect(sorted).to.deep.not.equal(list)
                // we can also confirm each number is between min and max
                sorted.forEach((price) => {
                    expect(price).to.be.within(1, 1000)
                })
            })
            
            cy.get(".product_sort_container").select('lohi')

            this.getAllPrices()
            .then((list) => {
                 // confirm the list is not sorted by sorting it 
                // and comparing it with the original and sorted lists
                const sorted = _.sortBy(list)
                expect(sorted).to.deep.equal(list)
                // we can also confirm each number is between min and max
                sorted.forEach((price) => {
                expect(price).to.be.within(1, 1000)
                })
            })

    }

}

export default AllProductsPage;