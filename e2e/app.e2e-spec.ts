import { ShoppingSitePage } from './app.po';

describe('shopping-site App', () => {
  let page: ShoppingSitePage;

  beforeEach(() => {
    page = new ShoppingSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
