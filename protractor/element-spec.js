describe('angularjs homepage', function() {
  it('should add one and two', function() {
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys(3);
    element(by.model('second')).sendKeys(2);
    element(by.model('operator')).sendKeys('*');

    element(by.id('gobutton')).click();

    expect(element(by.binding('latest')).getText()).
      toEqual('6'); // This is wrong!
  });
});