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
  cy.contains("Groups").scrollIntoView().click({force:true});
            cy.contains("Add Groups").scrollIntoView().click({force:true});
            cy.get('.status_toggle.middle').click({force:true});
    })
        it("check all group clickable or not",()=>
        {
            
            cy.get("input[name='title']").type("Automation Group",{force:true,delay:100});
  //           cy.get('.page-number') // Assuming '.page-number' represents the page number element
  // .click()
  // .wait(1000) // Adjust the wait time as per your application's page loading time
  
    // Click the next button
    cy.get('.ant-pagination-next').click()

    // Assert that the next page is loaded
    cy.get('.ant-table-content').should( 'be.visible');

    // Add more assertions as needed
    // For example, you can check if specific elements are present on the page
    //cy.get('.page2-content').should('be.visible')
 

  

    // Click the previous button
    cy.get('.ant-pagination-prev').click()

    // Assert that the previous page is loaded
    cy.get( '.ant-table-content').should('be.visible');

    // Add more assertions as needed
    // For example, you can check if specific elements are present on the page
    //cy.get('.page1-content').should('be.visible')
  })


  it('should select all data and can invert all data', () => {
    const paginationData = [5,10,15]
    //const paginationSize = ['5 / page','10 / page','15 / page']
    paginationData.forEach((pageData)=>
    {
     
      cy.get('.ant-select-selector').scrollIntoView().click({force:true})
      cy.contains(pageData+' / page').click({force:true});
      // Click the "Select All Data" option
    cy.wait(1000);
    cy.get('.anticon.anticon-down').eq(0).scrollIntoView().trigger('mouseover',{force:true});
    
    cy.contains('Select all data').click();

    // Assert that all rows are selected
   // cy.get('table').should('have.class', 'ant-table-row ant-table-row-level-0 ant-table-row-selected')
    cy.get('table').find('.ant-table-row.ant-table-row-level-0.ant-table-row-selected').should('have.length',pageData)
    // Click the "Invert Select" option
    cy.get('.anticon.anticon-down').eq(0).scrollIntoView().trigger('mouseover',{force:true});
    cy.contains('Invert current page').click()

    // Assert that the selected rows are now unselected and vice versa
    cy.get('table').get('.ant-table-row.ant-table-row-level-0.ant-table-row-selected').should('not.exist')
    //cy.get('.table-row:not(.selected)').should('exist')
    })
    
  })

  

  it('should select even rows', () => {
    // Click the "Select Even Rows" option
    cy.get('.anticon.anticon-down').eq(0).scrollIntoView().trigger('mouseover',{force:true});
    cy.contains('Select Even Row').click()

    // Assert that only even rows are selected
    cy.get('table:even').get('.ant-table-row.ant-table-row-level-0.ant-table-row-selected').should('exist')
    //cy.get('.table-row:odd').should('not.have.class', 'selected')
  })

  it('should select odd rows', () => {
    // Click the "Select Odd Rows" option
    cy.get('.anticon.anticon-down').eq(0).scrollIntoView().trigger('mouseover',{force:true});
    cy.contains('Select Odd Row').click()

    // Assert that only odd rows are selected
    cy.get('table').get('.ant-table-row.ant-table-row-level-0.ant-table-row-selected').should('exist')
    //cy.get('.table-row:even').should('not.have.class', 'selected')
  })

  it('should clear all selection', () => {
    // Select some rows manually (e.g., by clicking on them)
    cy.wait(1000);
    cy.get('table:nth-child(1)')
    .find('td')
    .first()
    .get('.ant-checkbox-input')
    .first()
    .scrollIntoView().click({force:true})

    cy.wait(3000)
    //cy.get('table:nth-child(3).ant-checkbox-input').click()
    //cy.get('table:nth-child(5).ant-checkbox-input').click()

    // Click the "Clear All Select" option
    cy.get('.anticon.anticon-down').eq(0).scrollIntoView().trigger('mouseover',{force:true});
    cy.contains('Clear all data').click({force:true});

    // Assert that no rows are selected
    cy.get('.table-row.selected').should('not.exist')
  })







  
  
  
   
    
  });
  




   
   
   
   
  
   