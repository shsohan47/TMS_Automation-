//importing xPath

import 'cypress-xpath';


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
    //ADD goal automation
    it('check Goal requirement',()=>
    {
        cy.wait(1000)
        cy.reload()

        cy.contains('Goals').scrollIntoView().should('contain','Goals').click({force:true});
        cy.contains("Add Goals").scrollIntoView().click({force:true});

        //this autocomplete is removed from main panel
        // cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-b52kj1')
        // .eq(0)
        // .click({ force: true }).clear()
        // .type("dummy department");
        // cy.xpath("//li[@id='controllable-option-0']").click({ force: true });


        
        cy.get('input[name="title"]').eq(0).type('P and E TMS GOAL',{delay:100});
        cy.get('textarea[name="description"]').type('TMS description',{delay:100});
        //first try invalid year
        cy.get('input[name="year"]').type('2010');
        cy.get('input[value=""]').eq(1).type('5');
        cy.get('button[class="btn btn-primary"]').click({force:true});
        cy.get('.ant-notification-notice.ant-notification-notice-info.css-12jzuas.ant-notification-notice-closable').should("be.visible");
        cy.get('input[name="year"]').clear()
        cy.get('input[value="5"]').clear();
        cy.get('input[name="year"]').type('2024');
        cy.get('input[value=""]').eq(1).type('4');
        cy.get('button[class="btn btn-primary"]').click({force:true});
        cy.get('.custom-scrollbar.light-only.ltr.swal2-shown.swal2-height-auto').should('be.visible');
        cy.contains('OK').click({force:true});
        cy.wait(1000)

        //going to Goals
        cy.get('a[href*="/goals"]').scrollIntoView().click({force:true});
        cy.wait(1000)
        cy.get('.toggle-sidebar').click({force:true});
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > select:nth-child(2)')
        .eq(0).select('4',{force:true});
        cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > select:nth-child(2)')
        .eq(0).select('P&E',{force:true});
        cy.get('table', { timeout: 10000 })
    .find('tbody>tr>td:nth-child(7)')
     .find('button').eq(3).click({force:true});
     cy.contains('Delete!').click({force:true})







    });

});