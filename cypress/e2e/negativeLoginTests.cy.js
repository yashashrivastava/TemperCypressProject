/// <reference types="cypress"/>
import LoginPage from "../PageObjects/LoginPage";

describe('Negative LoginTest Suite', () => 
{
  const loginPage = new LoginPage();



    it('Negative Test_Verify an error occurs while trying to login for Standard User with a wrong password', () => 
            {
               loginPage.openURL()
               loginPage.setUserName("standard_user")
               loginPage.setPassword("wrongPwd")
               loginPage.clickLogin()
               cy.get('[data-test="error"]').should('be.visible')
               cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
               cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
               cy.get("#user-name").clear()
               cy.get("#password").clear()
             })

    it('Negative Test_Verify an error occurs while trying to login for Locked Out User with wrong password', () => 
             {
                loginPage.setUserName("locked_out_user")
                loginPage.setPassword("wrongPwd")
                loginPage.clickLogin()
                cy.get('[data-test="error"]').should('be.visible')
                cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
                cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
                cy.get("#user-name").clear()
                cy.get("#password").clear()
              })

    it('Negative Test_Verify an error occurs while trying to login for Problem User with wrong password', () => 
              {
                 loginPage.setUserName("problem_user")
                 loginPage.setPassword("wrongPwd")
                 loginPage.clickLogin()
                 cy.get('[data-test="error"]').should('be.visible')
                 cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
                 cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
                 cy.get("#user-name").clear()
                 cy.get("#password").clear()
               })

    it('Negative Test_Verify an error occurs while trying to login for Performance Glitch User with wrong password', () => 
               {
                  loginPage.setUserName("performance_glitch_user")
                  loginPage.setPassword("wrongPwd")
                  loginPage.clickLogin()
                  cy.get('[data-test="error"]').should('be.visible')
                  cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
                  cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
                  cy.get("#user-name").clear()
                  cy.get("#password").clear()
                })
   
      it('Negative Test_Verify an error occurs while trying to login with an invalid UserName and valid password_Negative Test', () => 
             {
                loginPage.setUserName("RandomUser")
                loginPage.setPassword("secret_sauce")
                loginPage.clickLogin()
                cy.get('[data-test="error"]').should('be.visible')
                cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
                cy.get('svg[class="svg-inline--fa fa-times fa-w-11 "]').click()
                cy.get("#user-name").clear()
                cy.get("#password").clear()
              })
  }
  )
