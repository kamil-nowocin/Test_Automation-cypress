Cypress.Commands.add('allureSettings', () => {
	const allure = Cypress.Allure.reporter.getInterface();

	allure.writeExecutorInfo({
		name: 'myExecutor',
		type: 'teamcity', // jenkins, bamboo, teamcity
		url: 'https://example.pl',
		buildName: 'basicBuildName',
		buildUrl: 'https://example.pl',
		reportUrl: 'https://example.pl',
	});

	allure.writeEnvironmentInfo({
		envInfo: 'Environment info',
		envInfo: 'Second environment info',
	});

	// allure.writeCategoriesDefinitions([
	// 	{
	// 		name: 'Not to have class tests',
	// 		messageRegex: /.*not to have class.*/,
	// 		matchedStatuses: ['failed'],
	// 	},
	// ])
});
