import { NgxAnimePage } from './app.po';

xdescribe('ngx-anime App', () => {
  let page: NgxAnimePage;

  beforeEach(() => {
    page = new NgxAnimePage();
  });

  xit('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
