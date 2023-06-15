// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })


context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://tmsv2.aamarpay.dev/login');

  })
  it('check full signIn panel With Invalid credential ok',()=>{
  //Enter a invalid value
  cy.get('.form-control.form-control')
  .type("shsohan")
  .should('have.value',"shsohan")

  // .type() with special character sequences
  .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
  .type('{del}{selectall}{backspace}')


  .type('{alt}{option}') //these are equivalent
  .type('{ctrl}{control}') //these are equivalent
  .type('{meta}{command}{cmd}') //these are equivalent
  .type('{shift}')

  .type('shsohan', { delay: 100 })
      .should('have.value', 'shsohan');
//input password field
  cy.get('.d-flex.align-items-center.password-field')
  .type('RandomPassword')
  
  //check show be clicked
  cy.get('.password-icon.d-flex.cursor-pointer')
  .click({force:'true'});
  //check the checkbox
  cy.get('.checkbox [type="checkbox"]').not('[disabled]')
  .check({force:true}).should('be.checked');
  //click on the signIn button
  cy.get('.btn-block.btn.btn-primary').scrollIntoView().click({force:true});

  //check weather invalid mail and password can hendle
  cy.get('.ant-notification-notice.ant-notification-notice-error.css-k7429z.ant-notification-notice-closable').should('be.visible',{force:true});


})



//Enter with valid password


it('check full signIn panel with valid credential ok',()=>{
  //Enter a valid value
  cy.get('.form-control.form-control')
  .type("sohan")
  .should('have.value',"sohan")

  // .type() with special character sequences
  .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
  .type('{del}{selectall}{backspace}')

  .type('{alt}{option}') //these are equivalent
  .type('{ctrl}{control}') //these are equivalent
  .type('{meta}{command}{cmd}') //these are equivalent
  .type('{shift}')

  .type('sohan', { delay: 100 })
      .should('have.value', 'sohan');
//input password field
  cy.get('.d-flex.align-items-center.password-field')
  .type('Sohan01953714653')
  
  //check show be clicked
  cy.get('.password-icon.d-flex.cursor-pointer')
  .click({force:'true'});
  //check the checkbox
  cy.get('.checkbox [type="checkbox"]').not('[disabled]')
  .check({force:true}).should('be.checked');
  //click on the signIn button
  cy.get('.btn-block.btn.btn-primary').scrollIntoView().click({force:true});

  //check weather invalid mail and password can handle
  
cy.url().should('eq', 'https://tmsv2.aamarpay.dev/profile');



})


})

