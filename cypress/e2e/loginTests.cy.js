/// <reference types="cypress"/>

describe('LoginTest Suite', () => 
{

    it('SuccessfulLogin_StandardUser', () => 
        {
           cy.visit("https://www.saucedemo.com/")
           cy.title().should('eq','Swag Labs')
            cy.get("#user-name").type("problem_user")
            cy.get("#password").type("secret_sauce")
            cy.get("#login-button").click()
            // cy.get('#item_4_img_link > .inventory_item_img')
            cy.get("#item_4_img_link > .inventory_item_img").should('be.visible') //Assertion
            cy.get("#item_4_img_link > .inventory_item_img").should('have.attr', 'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg') //Assertion
            //cy.get(#item_4_img_link > .inventory_item_img').contains('src','/static/media/sauce-backpack-1200x1500.34e7aa42.jpg') //Assertion
            //cy.get('#item_4_img_link > .inventory_item_img').children('[alt="Sauce Labs Backpack"]').should('be.visible')
            // cy.get('#item_4_img_link > .inventory_item_img').children('img.inventory_item_img[alt=“Sauce Labs Backpack”]').should('be.visible')
         })

    // it('loginTest2', () => 
    //     {
    //        expect(true).to.equal(true)
    //     })

    // it('loginTest3', () => 
    //     {
    //         expect(true).to.equal(true)
    //     })

    // it('loginTest4', () => 
    //     {
    //       expect(true).to.equal(true)
    //     })


    //   it('loginTest5', () => 
    //   {
    //     expect(true).to.equal(true)
    //   })

  }
  )



//   describe('Another Suite', function()
//   {
//     it('loginTest6', function()
//         {
//          expect(true).to.equal(true)
//         }
//     )

//   }
//   )