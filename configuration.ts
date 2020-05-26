import {Config} from 'protractor';
export let config: Config = {

    seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect:true,

    //capabilities to be passed to the Webdriver instance.
    capabilities: {
        browserName: 'chrome'
      },
    
    specs: ['testspec.js'],  

    jasmineNodeOpts:{
        showColors:true,
    }     
  };