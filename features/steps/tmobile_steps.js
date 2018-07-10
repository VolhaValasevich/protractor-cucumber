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
    //browser.sleep(1000);
  })

  this.When(/^I scroll down to the price slider$/, () => {
    page.scrollTo(831,2700);
  })

  this.When(/^I drag the slider to the tick "([^"]*)"$/, (tick) => {
    page.dragSliderToTick(tick);
  })

  this.Then(/^I should see that the price is "([^"]*)"$/, (expectedPrice) => {
    page.getLinePrice().then((text) => {
      expect(text).to.eql(expectedPrice);
    })
  })

  this.When(/^I click the Start shopping link$/, () => {
    page.clickStartShoppingLink();
  })

  /*this.When('I calculate $first $operator $second', function (first, operator, second, callback) {
    this.page.setFirstValue(first);
    this.page.setOperator(operator);
    this.page.setSecondValue(second);
    this.page.clickGo();
    callback();
  });

  this.When('I enter first value of $first', function (first, callback) {
    this.page.setFirstValue(first);
    callback();
  });

  this.When('I enter second value of $second', function (second, callback) {
    this.page.setSecondValue(second);
    callback();
  });

  this.When('I click Go', function (callback) {
    this.page.clickGo();
    callback();
  });

  this.Then('the result should equal $result', function (result, callback) {
    expect(this.page.getResult()).to.eventually.equal(result).and.notify(callback);
  });*/
};
