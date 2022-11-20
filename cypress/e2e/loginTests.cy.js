/// <reference types="cypress"/>
import LoginPage from "../PageObjects/LoginPage";

describe('LoginTest Suite', () => 
{
  const loginPage = new LoginPage();

  beforeEach(function(){
    loginPage.openURL()
  })

    it('TC01_Verify Successful Login For Standard User', () => 
         {
            loginPage.setUserName("standard_user")
            loginPage.setPassword("secret_sauce")
            loginPage.clickLogin()
            loginPage.verifyLogin()
            loginPage.logOut()
          })


    it('TC02_Verify that Locked Out User throws an error while trying to login', () => 
         {
            loginPage.setUserName("locked_out_user")
            loginPage.setPassword("secret_sauce")
            loginPage.clickLogin()
            cy.get('[data-test="error"]').should('be.visible')
            cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
            cy.get("#user-name").clear()
            cy.get("#password").clear()
          })


    it('TC03_Verify that Problem User does not show expected image after login', () => 
          {
             loginPage.setUserName("problem_user")
             loginPage.setPassword("secret_sauce")
             loginPage.clickLogin()
             cy.get("#item_4_img_link > .inventory_item_img").should('be.visible')
             cy.get("#item_4_img_link > .inventory_item_img").should('not.have.attr', 'src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg')
             loginPage.logOut()
           })


    it('TC04_Verify that Performance Glitch User has performance issue and has to wait for some time after trying to login', () => 
           {
             loginPage.setUserName("performance_glitch_user")
             loginPage.setPassword("secret_sauce")
             loginPage.clickLogin()
             cy.wait(5000)
             loginPage.verifyLogin()
             cy.wait(5000)
             loginPage.logOut()
             cy.wait(5000)
            })

  }
  )
