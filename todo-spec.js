describe('Test: TYM Login Page', function() {

  beforeEach(function(){
    browser.ignoreSynchronization = true;
    browser.get('');
  });


  it('should have page title of TYM Login', function() {
    expect(browser.getTitle()).toEqual('TYM Login');
  });

  it('should have login text box password textbox and login button',function(){
    expect(element(by.id('LoginUser_UserName')).isPresent()).toEqual(true);
    expect(element(by.id('LoginUser_Password')).isPresent()).toEqual(true);
    expect(element(by.id('LoginUser_LoginButton')).isPresent()).toEqual(true);
  });

  it('should have select menu provider with options CardMembershipProvider and Windows login',function(){

    expect(element(by.id('SelectMembershipProvider')).isPresent()).toEqual(true);
    expect(element(by.id('SelectMembershipProvider')).all(by.tagName('option')).count()).toEqual(2);

     var values = element(by.id('SelectMembershipProvider')).all(by.tagName('option')).getAttribute('value');
     expect(values).toEqual(['CardMembershipProvider','TangamMembershipProvider']);

    });

  it('should show error message on failed login',function(){

    expect(element(by.id('LoginUser_UserName')).isPresent()).toEqual(true);
    expect(element(by.id('LoginUser_Password')).isPresent()).toEqual(true);
    expect(element(by.id('LoginUser_LoginButton')).isPresent()).toEqual(true);

    var username =  element(by.id('LoginUser_UserName'));
    var password = element(by.id('LoginUser_Password'));
    var button = element(by.id('LoginUser_LoginButton'));

    username.sendKeys('Test').then(function(){
      password.sendKeys('1234').then(function(){
        button.click().then(function(){

          var text = element(by.id('failureText')).getText();

          expect(element(by.id('failureText')).isPresent()).toEqual(true);
          expect(text).toEqual('Your login attempt was not successful. Please try again.');

        });
      });
    });

  });


});

