import { AngularGfiPage } from './app.po';

describe('angular-gfi App', () => {
  let page: AngularGfiPage;

  beforeEach(() => {
    page = new AngularGfiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
