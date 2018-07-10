const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
const HomePage = require("../pages/tmobile-page.js");

module.exports = function() {

  const page = new HomePage();

  this.Given(/^The main page is open$/, { timeout: 30 * 1000 }, (callback) => {
    page.get().then(callback);
  });

  this.When(/^I click on Plans link$/, { timeout: 30 * 1000 }, (callback) => {
    page.clickPlansLink().then(callback);
  })

  this.When(/^I scroll down to the price slider$/, (callback) => {
    page.scrollTo(831,2700).then(callback);
  })

  this.When(/^I drag the slider to the tick "([^"]*)"$/, (tick) => {
    page.dragSliderToTick(tick);
  })

  this.Then(/^I should see that the price is "([^"]*)"$/, (expectedPrice, callback) => {
    page.getLinePrice().then((text) => {
      expect(text).to.eql(expectedPrice);
    }).then(callback);
  })

  this.When(/^I click the Start shopping link$/, (callback) => {
    page.clickStartShoppingLink().then(callback);
  })
};
