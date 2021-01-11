/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

// /**
//  * @type {Cypress.PluginConfig}
//  */
// module.exports = (on, config) => {
//   // `on` is used to hook into various events Cypress emits
//   // `config` is the resolved Cypress config
// }
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
	on('before:browser:launch', (browser = {}, launchOptions) => {
		switch (browser.name) {
			case 'chrome':
				if (browser.isHeadless) {
					launchOptions.args.push('--window-size=1400,1200');
					launchOptions.args.push('--force-device-scale-factor=1');
				}
				launchOptions.args.push('--start-fullscreen');
				launchOptions.args.push('--auto-open-devtools-for-tabs');
				return launchOptions;

			case 'firefox':
				if (browser.isHeadless) {
					launchOptions.args.push('--width=1400');
					launchOptions.args.push('--height=1200');
				}
				launchOptions.args.push('--start-fullscreen');
				launchOptions.args.push('-devtools');
				return launchOptions;

			case 'electron':
				if (browser.isHeadless) {
					launchOptions.preferences.width = 1400;
					launchOptions.preferences.height = 1200;
				}
				launchOptions.preferences.fullscreen = true;
				launchOptions.preferences.devTools = true;
				return launchOptions;
		}
	});

	allureWriter(on, config);
	return config;
};
