describe('Scenario/Suite 1', () => {
	before(() => {
		cy.allureSettings();
		cy.log('Execution setup');
	});

	beforeEach(() => {
		cy.log(
			'This is before each hook, it will run before every scenario in suite'
		);
		cy.visit('https://example.cypress.io/commands/actions');
		cy.allureTestDetails(
			'Epic name', //Epic name
			'Feature name', //Feature name
			'Story name', //Story name
			'exampleTag', //Tag name
			'Kamil Nowocin' //Owner name
		);
	});

	afterEach(() => {
		cy.log(
			'This is after each hook, it will run after every scenario in suite 2'
		);
	});

	after(() => {
		cy.log('Tear down');
	});

	it.only('.uncheck() - uncheck a checkbox element', () => {
		cy.allure().issue('Bugs', 'https://www.jira-bug-ticket.com');
		cy.allure().descriptionHtml('Allure test description');
		cy.allure()
			.tms('Info', 'https://on.cypress.io/uncheck')
			.step(
				'By default, .uncheck() will uncheck all matching checkbox elements in succession, one after another'
			);
		cy.get('.action-check [type="checkbox"]')
			.not('[disabled]')
			.uncheck()
			.should('not.be.checked');
		cy.screenshot();
		cy.allure().step('.uncheck() accepts a value argument');
		cy.get('.action-check [type="checkbox"]')
			.check('checkbox1')
			.uncheck('checkbox1')
			.should('not.be.checked');

		cy.allure().step('.uncheck() accepts an array of values');
		cy.get('.action-check [type="checkbox"]')
			.check(['checkbox1', 'checkbox3'])
			.uncheck(['checkbox1', 'checkbox3'])
			.should('not.be.checked');

		cy.allure().step('Ignore error checking prior to uncheck');
		cy.get('.action-check [disabled]')
			.uncheck({ force: true })
			.should('not.be.checked');
	});
});
