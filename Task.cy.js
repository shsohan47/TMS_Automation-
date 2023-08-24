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
    // cy.get('.checkbox [type="checkbox"]').not('[disabled]')
    // .check({force:true}).should('be.checked');
    //click on the signIn button
    cy.get('.btn-block.btn.btn-primary').scrollIntoView().click({force:true});
  
    //check weather invalid mail and password can handle
    // Check the current URL
  cy.url().should('eq', 'https://tmsv2.aamarpay.dev/tasks-on-me');
  cy.wait(3000);
  cy.contains('Task').scrollIntoView().click({force:true});
  cy.contains('Tasks').scrollIntoView().click({force:true});
            cy.get('.status_toggle.middle').click({force:true});
    })


    //test 1
    it('checking a task all componenents ', () => {
        
        cy.get('table') // Replace 'table' with your specific table selector
.contains('td', 'Refund API') // Find the <td> element with the specified group name
.parent('tr') // Select the parent <tr> element
.within(() => {
  cy.get('td:last-child').find('svg') // Select the last <td> element within the row
    .click({force:true}); // Click the delete button
    
});
cy.wait(2000);
cy.contains('Edit').click();

})
    
      
})