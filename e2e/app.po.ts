import { browser, by, element } from 'protractor';

// TODO: Updated tests

export class NgxAnimePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
