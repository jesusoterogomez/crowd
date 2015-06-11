Router.route('/', function () {
  this.render('Home');
});

Router.route('/login', function () {
	if(!Meteor.userId) {
  		this.render('Login');
	} else {
		Router.go('/');
	}
});

Router.route('/register', function () {
  this.render('Register');
});