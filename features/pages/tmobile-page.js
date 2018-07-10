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
        switch (pos) {
            case "second":  case "third" : {
                return browser.actions().dragAndDrop(element(by.css('input.slider-range')), element(by.css(`div.${pos}-tick`))).mouseUp().perform();
            }
            case "first": {
                return browser.actions().dragAndDrop(element(by.css('input.slider-range')), element(by.css(`div.item-alt-one`))).mouseUp().perform();
            }
            case "fourth" : break;
        }     
    }

    clickStartShoppingLink () {
        return element(by.linkText('Start shopping')).click();
    }

    highlightPrice() {
        return this.highlightWithJS(element(by.css("div.price-container.active div.price")));
    }

    getLinePrice () {
        return element(by.css("div.price-container.active div.price")).getText();
    }

    // code from demo 3
    highlightWithJS(el) {
        let bg;
        return el.getCssValue("backgroundColor").then(function (col) {
            bg = col;
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", el)
        }).then(function () {
            return browser.sleep(1000);
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + bg + "'", el);
        }).then(function () {
            return browser.sleep(1000);
        })
    }
}

module.exports = TMobilePage;