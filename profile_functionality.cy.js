context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://tmsv2.aamarpay.dev/login');
    //Login in every iteration


    cy.get('.form-control.form-control')
  .type("sohan")
  .should('have.value',"sohan")

  // .type() with special character sequences
  .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
  .type('{del}{selectall}{backspace}')

  // .type() with key modifiers
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
  // Check the current URL
cy.url().should('eq', 'https://tmsv2.aamarpay.dev/profile');
  })
  it("check the profile",()=>{
    cy.wait(3000)
    cy.get('.d-flex.align-items-center.gap-3').click();
    cy.contains('Shawkat Hossain Sohan').should('be.visible');
    cy.contains('sohan.intern@aamarpay.com').should('be.visible');
    cy.contains('Edit Profile').scrollIntoView().click({force:true});
    const Inputvalue = ['demoName','demoFirstName','demoLastName','demo53@aamarpay.com'];
    cy.wrap(Inputvalue).each((value,index)=>{
      cy.get('.form-control.form-control').eq(index).clear().type(value,{delay: 100});
      

       })
       cy.contains('Update User').scrollIntoView().click({force:true});
      cy.get('.swal2-shown.swal2-height-auto').should('be.visible');


      //undo my profile
      cy.wait(3000)
      // Reload the page
      cy.reload();
    cy.contains('Edit Profile').scrollIntoView().click({force:true});
    
    const Inputvalue1 = ['sohan','Shawkat Hossain','Sohan','sohan.intern@aamarpay.com'];
    cy.wrap(Inputvalue1).each((value,index)=>{
      cy.get('.form-control.form-control').eq(index).clear().type(value,{delay: 100});
      
    })  
    cy.contains('Update User').scrollIntoView().click({force:true});
      cy.get('.swal2-shown.swal2-height-auto').should('be.visible');  
   
})
})