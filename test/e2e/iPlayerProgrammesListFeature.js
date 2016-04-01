describe('BBC iPlayer', function(){
  letters = element.all(by.repeater('letter in iPlayerCtrl.alphabet'));
  pages = element.all(by.repeater('page in iPlayerCtrl.pages'));
  shows = element.all(by.repeater('prog in iPlayerCtrl.searchResult'));

  it('has a title', function(){
    browser.get('http://localhost:8080/');
    expect(browser.getTitle()).toEqual('iPlayer Programmes');
  });

  it('has a logo/title', function(){
    browser.get('http://localhost:8080/');
    image = element(by.id('logo')).getAttribute('src');
    expect(image).toEqual("http://localhost:8080/visuals/images/BBC_iPlayer_logo.svg");
  });

  it('able to browse all letter of the alphabet & 0-9', function(){
    browser.get('http://localhost:8080/');
    expect(letters.count()).toEqual(27);
  });

  it('starts with the letter a', function(){
    browser.get('http://localhost:8080/');
    expect(letters.first().getText()).toEqual('A');
  });

  it('can navigate to different letters', function(){
    browser.get('http://localhost:8080/');
    expect(shows.first().getText()).toContain('Abadas');
    letters.get(7).click();
    expect(shows.first().getText()).toContain('Hacio');
  });

  it('results have paginated functionality', function(){
    browser.get('http://localhost:8080/');
    expect(pages.count()).toEqual(4);
    expect(element(by.id('programmes')).getText()).toContain('Page:');
    pages.get(3).click();
    expect(shows.first().getText()).toContain('The Arts Show');
  })

  it('hides page navigation if only 1 page of results', function(){
    browser.get('http://localhost:8080/');
    letters.get(26).click();
    expect(element(by.id('pages')).isDisplayed()).toBeFalsy;
  })
});
