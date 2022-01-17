import{LoginPage}from"../pages/login-page"


const loginpage=new LoginPage()
it('login test',function(){

    loginpage.navigate('https://trytestingthis.netlify.app/');
    loginpage.enterUsername('test');
    loginpage.enterPassword('test');
    loginpage.clickLogin();


    /*cy.visit('')
    cy.get('#uname').type('test')
    cy.get('#pwd').type('test')
    cy.get('[type="submit"]').click()*/

})