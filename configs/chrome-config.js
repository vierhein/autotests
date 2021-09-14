const {config} = require('../wdio.conf');

config.runner = 'local';
config.path = '/wd/hub';
config.port = 4444;

config.capabilities = [{

    browserName: 'chrome',
    'goog:chromeOptions': {
        args: [
            '--no-sandbox',
            '--disable-dev-shm-usage',
            '--incognito',
            '--disable-setuid-sandbox',
            '--start-maximized',
            '--enable-logging --v=1',
            '--enable-features=NetworkService,NetworkServiceInProcess'

        ],
    },
    'selenoid:options': {
        enableVNC: true,
        enableVideo: false
    },

    maxInstances: 1,


}];
config.services = [];
config.reporters =
    [['allure', {
        //After a test run is complete, you will find that this directory has been populated with an .xml file for each spec, plus a number of .txt and .png files and other attachments.
        outputDir: `allure/chrome/allure-results`,
        //optional parameter(false by default), in order to log only custom steps to the reporter
        disableWebdriverStepsReporting: true,
        //optional parameter(false by default), in order to not attach screenshots to the reporter
        disableWebdriverScreenshotsReporting: false,
        //optional parameter (false by default), set it to true in order to change the report hierarchy when using cucumber. Try it for yourself and see how it looks
        useCucumberStepReporter: true,
        //optional parameter (false by default), set it to true in order to not fetch the before/after stacktrace/screenshot/result hooks into the Allure Reporter
    }]];

exports.config = config;
