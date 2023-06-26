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





  it('Check department data ',()=>{
    cy.contains('Department').scrollIntoView().click({force:true});
    // Assuming you want to find a button with a specific href value

// Find the button using the href attribute
cy.get('a[href="/department"]').click({force:true});
cy.wait(3000);
    cy.get('.ant-table')
    .find('tbody>tr')
    .each((row)=>{
 
  cy.wrap(row)
  .find('td').last()
  .find('.btn-link.dd-caret-none.dropdown-toggle').click({force:true})
  cy.get('.dropdown-menu.dropdown-menu-right.p-10.ms-4.dropdown-menu.show').contains('Edit').click({force:true});
  cy.contains('Cancel').click({force:true})
  //cy.wait(3000)
    })
   

    //pagination
   // cy.get('.pagination-container')
  
  // cy.get('select[name="rows"]').find('option').each(($option) => {
  //   const optionText = $option.text();
  //   cy.get('select[name="rows"]').select(optionText,{force:true,delay:1000});
    

  //   cy.get('select[name="rows"]').should('have.value', $option.val());
  //   cy.get('.table-responsive.table-border-radius tbody tr').its('length').as('numberOfRows')
    
    
  // });
  })
  //Add department panel
  it('check Add department',()=>
  {
    cy.contains('Add Department').scrollIntoView().click({force:true});
    //checking without department name form input field
    cy.get('.form-control.form-control').eq(1).scrollIntoView().type('demo automation department description',{delay:100});
    cy.get('.align-center.btn.btn-primary').scrollIntoView().click({force:true});
    cy.get('.ant-notification-notice.ant-notification-notice-info.css-12jzuas.ant-notification-notice-closable').should('be.visible');

    cy.get('.form-control.form-control').eq(0).scrollIntoView().type('demo automation department name',{delay:100,force:true});
    cy.get('.align-center.btn.btn-primary').scrollIntoView().click({force:true});
    cy.contains('The department is added successfully.').should('be.visible');

    cy.get('button[class="swal2-confirm swal2-styled"]').scrollIntoView().click({force:true});
    cy.contains('tr','demo automation department name')
    .within(()=>
    {
      cy.get('td:last-child')
      .click()
      
    })
    cy.contains('Delete').click();
    cy.contains('Delete!').click();
    cy.wait(4000);
    //cy.wrap('table').contains('demo automation department name').should('not.exist');

  })



//Add Member
it.only("check Add Member Panel Ok",()=>
{
  cy.wait(2000  )
  cy.get('body > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > header:nth-child(2) > nav:nth-child(2) > div:nth-child(1) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)').click({force:true});
  cy.contains('Add Department Member').scrollIntoView().click({force:true})
  // cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(0).each(($option)=>{
  //   const optionText1 = $option.text();
  //   cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(0).click({force:true});
    

  // });
  //first select
  cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm')
  .eq(0).click()
  .get('#controllable-option-0').click({force:true});
  //2nd select 
  cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm')
  .eq(1).click()
  .get('#controllable-option-0').click({force:true});
//third select
cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm')
  .eq(2).click()
  .get('#controllable-option-0').click({force:true});

  // cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(1).each(($option)=>{
  //   const optionText1 = $option.text();
  //   cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(1).click({force:true});
    

  // });
  // cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(2).each(($option)=>{
  //   const optionText1 = $option.text();
  //   cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-colorPrimary.MuiInputBase-fullWidth.MuiInputBase-formControl.MuiInputBase-sizeSmall.MuiInputBase-adornedEnd.MuiAutocomplete-inputRoot.css-1mxnqnm').eq(2).click({force:true});
    

  // });
  cy.get('.align-center.btn.btn-primary').scrollIntoView().click({force:true});
  cy.contains('department member with this Member already exists.').scrollIntoView().should('be.visible');
})




//Department members

it('should validate table rows and edit designation panel', () => {
  
  cy.contains('Department Members').click({force:true})
  // Get all table rows
  cy.get('table tbody tr').each(($row) => {
    // Validate member name column
    cy.wrap($row).find('td:nth-child(1)').should('not.be.empty');

    // Validate department name column
    cy.wrap($row).find('td:nth-child(2)').should('not.be.empty');

    // Validate designation column
    cy.wrap($row).find('td:nth-child(3)').should('not.be.empty');


    cy.wrap($row).find('td:nth-child(4)').should('not.be.empty');


    // Validate edit designation panel
    cy.wrap($row)
      .find('td:nth-child(5)')
      .within(() => {
        // Check for Edit button
        cy.get('.m-r-5.btn-success.m-b-10').should('exist');
        cy.get('.m-r-5.btn-success.m-b-10').scrollIntoView().click({force:true});
        
        cy.get('.m-r-5.btn-success.m-b-10').click({force:true});



        // Check for Delete button
        cy.get('.m-r-5.btn-success.m-b-10').should('exist');
      });
  });
});


//Add designation
it("check Add designation", () => {
  cy.contains('Add Designation').scrollIntoView().click({ force: true });

  cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputSizeSmall.MuiInputBase-inputAdornedEnd.MuiAutocomplete-input.MuiAutocomplete-inputFocused.css-b52kj1')
    .eq(0)
    .click({ force: true }).clear()
    .type("Merchant Management(MMD)");

  cy.xpath("//li[@id='controllable-option-0']").click({ force: true });

  cy.get('#message-text').type('Demo designation');
  cy.contains('Add Designations').click({ force: true });

  cy.wait(2000); // Add a wait to ensure the table is updated

  // Retry until the table is visible and contains rows
  // cy.get('table', { timeout: 10000 })
  //   .find('tbody>tr>td:nth-child(3)')
  //   .find('Demo designation')

    cy.get('table').within(() => {
      // Search for the desired string
      cy.contains('Demo designation').should('be.visible').next('td').find('button').eq(1).click();
      
      
        
        



      //cy.get('.swal2-title').contains('Delete').scrollIntoView().click({force:true});

 
        

    

    });
    cy.get('.swal2-deny.swal2-styled').click({force:true});

      
  
});
});

    
      
    
  













  

  


  
