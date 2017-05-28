import { NgxAnimePage } from './app.po';

describe('ngx-anime App', () => {
  let page: NgxAnimePage;

  beforeEach(() => {
    page = new NgxAnimePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
