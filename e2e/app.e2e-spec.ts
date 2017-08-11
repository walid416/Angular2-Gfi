import { BlogWalidPage } from './app.po';

describe('blog-walid App', () => {
  let page: BlogWalidPage;

  beforeEach(() => {
    page = new BlogWalidPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
