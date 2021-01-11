describe('Scenario/Suite 2', () => {
	before(() => {
		cy.allureSettings();
		cy.log('Execution setup');
	});

	beforeEach(() => {
		cy.log(
			'This is before each hook, it will run before every scenario in suite 2'
		);
		cy.allureTestDetails(
			'Epic name', //Epic name
			'Feature name 2', //Feature name
			'Story name', //Story name
			'another-exampleTag', //Tag name
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

	it('First test, suite 2', () => {
		cy.allure().issue('Bugs', 'https://www.jira-bug-ticket.com');
		cy.allure().descriptionHtml('Allure test description');
		cy.allure().step('first parent step');
		cy.log('child command for first step');
		cy.allure().step('second parent step');
		cy.log('child command for second step');
	});

	it('Second test, suite 2', () => {
		cy.allure().issue('Bugs', 'https://www.jira-bug-ticket.com');
		cy.allure().descriptionHtml('Allure test description');
		cy.allure().step('first parent step');
		cy.log('child command for first step');
		cy.allure().step('second parent step');
		cy.log('child command for second step');
	});

	it('Third test, suite 2', () => {
		cy.allure().issue('Bugs', 'https://www.jira-bug-ticket.com');
		cy.allure().descriptionHtml('Allure test description');
		cy.allure().step('first parent step');
		cy.log('child command for first step');
		cy.allure().step('second parent step');
		cy.log('child command for second step');
	});
});
