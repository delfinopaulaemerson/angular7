import { FinansysPage } from './app.po';

describe('finansys App', function() {
  let page: FinansysPage;

  beforeEach(() => {
    page = new FinansysPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
