// spec.js

class TMobilePage {

    get() {
        return browser.get('https://www.t-mobile.com/');
    }

    clickPlansLink() {
        return element(by.linkText('PLANS')).click();
    }

    scrollTo(num1, num2) {
        return browser.executeScript(`window.scrollTo(${num1},${num2});`);
    }

    dragSliderToTick (pos) {
        return browser.actions().dragAndDrop(element(by.css('input.slider-range')), element(by.css(`div.item-alt-${pos}`))).mouseUp().perform();     
    }

    clickStartShoppingLink () {
        return element(by.linkText('Start shopping')).click();
    }

    getLinePrice () {
        return element(by.css("div.price-container.active div.price")).getText();
    }

}

module.exports = TMobilePage;