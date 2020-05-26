import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { calculator } from './pageObjects/calculator';
import { angularHomePage } from './pageObjects/angularHomePage';
describe('Protrator Element Demo', ()=> {
	
	it('Locators', async()=> {

		let calc = new calculator();
		
		browser.get('https://juliemr.github.io/protractor-demo/');
		
		await calc.firstEditBox.sendKeys("10");
		await calc.secondEditBox.sendKeys("33");
		await calc.airthmaticOperation.click();
		await calc.go.click();
		await calc.getResult.getText().then(function(text){
			console.log("The Output is " + text);
			
		})
		
		
	})
	
	it('Angular Home Page Title Validation', async()=>{

		let ag = new angularHomePage();
		await browser.get('https://angularjs.org/');
		await ag.angularLink.click();
		browser.sleep(3000);
		await ag.search.sendKeys("Hello");
	})
	
		
})
	
	
