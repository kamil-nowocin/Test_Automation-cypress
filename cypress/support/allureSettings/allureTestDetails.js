Cypress.Commands.add(
	'allureTestDetails',
	(epicName, featureName, storyName, tagName, ownerName) => {
		const allure = Cypress.Allure.reporter.getInterface();
		allure.epic(epicName);
		allure.feature(featureName);
		allure.story(storyName);
		allure.tag(tagName);
		allure.label('owner', ownerName);
		allure.tms('Author LinkedIn', 'https://www.linkedin.com/in/kamil-nowocin/');
	}
);
