import { NgxAnimePage } from './app.po';

describe('ngx-anime App', () => {
  let page: NgxAnimePage;

  beforeEach(() => {
    page = new NgxAnimePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
