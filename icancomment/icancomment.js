if (Meteor.isClient) {

  Session.set("message", "hello");
  Comments.ui.config({
    template: 'bootstrap'
  });

  Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
  });

  Template.main.commandId = function () {
    return Router.current().params.query.url;
  };

  Router.route('/', function () {
    if( !this.params.query.url ){
      this.render( 'intro' );
    }else{
      this.render( "main" );
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
