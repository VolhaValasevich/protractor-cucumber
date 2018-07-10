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
        const priceSlider = element(by.css('input.slider-range'));
        const tick = element(by.css(`div.item-alt-${pos}`));
        return browser.actions().dragAndDrop(priceSlider, tick).mouseUp().perform();
    }

    clickStartShoppingLink () {
        return element(by.linkText('Start shopping')).click();
    }

    getLinePrice () {
        return element(by.css("div.price-container.active div.price")).getText();
    }

}

module.exports = TMobilePage;

/*describe('test', function () {
    const plansLink = element(by.linkText('PLANS'));              
    const priceSlider = element(by.css('input.slider-range'));
    const tickOne = element(by.css('div.item-alt-one'));
    const startShoppingLink = element(by.linkText('Start shopping'));

    function drag(element, target) {
        browser.actions().dragAndDrop(element,target).mouseUp().perform();
    }

    beforeEach(function () {
        browser.get('https://www.t-mobile.com/');
    });

    it('should login', function () {
        plansLink.click();
        browser.sleep(1000);
        browser.executeScript('window.scrollTo(831,877);');
        drag(priceSlider, tickOne);
        startShoppingLink.click();
        
        
        /*expect(history.last().getText()).toContain('1 + 2');
        expect(history.first().getText()).toContain('5 + 6');*/
    /*});

    
});*/