context('Actions', () => {
    before(() => {
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
    .type('sohan01953714653')
    
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
    })
    it.only("Created a Task succesfully",function()
    {
        cy.contains("Create Task").click({force:true});
        cy.wait(3000);
        //type title
        cy.get("input[name='title']").type("A task that assign me");
        //select status
        cy.get("input[value='URG']").click({force:true})
        //select date
        cy.get("input[placeholder='Select date']")
        .click()
        .type("2023-12-31 11:59 PM")
        .get("button[class='ant-btn css-1fl56fv ant-btn-primary ant-btn-sm'] span")
        .click({force:true})
        //typing description
        cy.get("#message-text").type("Demo description")
        //click on self assign 
        cy.get("body div[id='root'] div[class='App'] div[id='pageWrapper'] div[class='page-body-wrapper horizontal-menu'] div div[class='page-body fadeIn-enter-done'] div[class='py-2 px-2'] div form label:nth-child(1) span:nth-child(1) input:nth-child(1)").click({force:true})
        cy.get(".MuiButtonBase-root.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.MuiButton-root.MuiButton-text.MuiButton-textPrimary.MuiButton-sizeMedium.MuiButton-textSizeMedium.jss56.jss57.css-eq9yqd").click();
        cy.contains("ok").click({force:true})
        
    })

})