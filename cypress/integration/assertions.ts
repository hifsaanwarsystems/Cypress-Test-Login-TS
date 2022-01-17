it('learning assertions',function(){
    cy.visit('https://example.cypress.io/')
    cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1) > a').click()
    cy.get('#query-btn').should('contain','Button').should('have.class','query-btn').should('be.visible')
    cy.get('#query-btn').invoke('attr','id').should('equal','query-btn')
    
    cy.get('#query-btn').should('contain','Button').and('have.class','query-btn')


    ///Explicit assertions

    expect(true).to.be.true


    let name='hifsa'
    expect(name).to.be.equal('hifsa')


    ///assert


    assert.equal(4,4,'Error')
    assert.strictEqual(4,4,'not strictly equal')
})