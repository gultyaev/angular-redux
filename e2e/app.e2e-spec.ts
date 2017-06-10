import { ModxvmPage } from './app.po';

describe('modxvm App', () => {
  let page: ModxvmPage;

  beforeEach(() => {
    page = new ModxvmPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
