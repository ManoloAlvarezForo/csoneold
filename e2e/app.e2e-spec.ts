import { CsonePage } from './app.po';

describe('csone App', () => {
  let page: CsonePage;

  beforeEach(() => {
    page = new CsonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
