// Inside the if (Meteor.isClient) block, right after Template.body.helpers:


if (Meteor.isClient) {

  Template.register.events({
    "submit .register-form": function(event, args) {
      event.preventDefault();
      var name = args.find('#register-name').value;
      var email = args.find('#register-email').value;
      var password = args.find('#register-password').value;

        // Trim and validate the input

        Accounts.createUser({email: email, password : password, profile : { name: name } }, function (error){
          if (error) {
            // Inform the user that account creation failed
            alert('there was an error' + error);
          } else {
            // Success. Account has been created and the user
            // has logged in successfully. 
            alert('Thank you for creating an account'); 
            Router.go('/');

         }

        });

        return false;
      }
    });


  Template.login.events({
    "submit .login-form": function (event, args) {

      event.preventDefault();

    //retrieve the input field values
    var email = args.find('#login-email').value;
    var password = args.find('#login-password').value;

    // TODO: Sanitize Input, validate.

    Meteor.loginWithPassword(email, password, function (error){
      if (error){
        // incorrect login
      } else {
        // user logged in
        console.log(Meteor.user());
        Router.go('/');
      }
    });

    return false;

  }
});


} // <is Client>