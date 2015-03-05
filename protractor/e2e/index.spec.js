var capture = require('../capture');

function IndexPage(){
  this.logo = element(by.css('.logo'));
  this.aboutBtn = element(by.css('.nav li.about a'));
}

describe('angularjs animation workshop app test', function() {
  it('should have a logo div', function() {
    browser.get('/');
    var page = new IndexPage();
    expect(page.logo.isPresent()).toEqual(true);

    capture.takeScreenshot(jasmine.getEnv().currentSpec);
  });

  it('should have a about link', function() {
    browser.get('/');
    var page = new IndexPage();
    page.aboutBtn.click();

    expect(page.aboutBtn.getText()).toEqual('ABOUT');
      capture.takeScreenshot(jasmine.getEnv().currentSpec);
  });
});
