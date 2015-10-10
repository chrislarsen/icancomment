if (Meteor.isClient) {

  Session.set("message", "hello");
  Comments.ui.config({
    template: 'bootstrap'
  });

  Template.hello.commandId = function () {
    return Router.current().params.query.url;
  };

  Template.main.commandId = function () {
    return Router.current().params.query.url;
  };

  Router.map(function () {
    this.route('home', {
      path: '/',
      template: 'main',
      data: function () {
        // the data function is an example where this.params is available

        // we can access params using this.params
        // see the below paths that would match this route
       commandGroupID: this.params;

        // we can access query string params using this.params.query
        var queryStringParams = this.params.query;

        // query params are added to the 'query' object on this.params.
        // given a browser path of: '/?task_name=abcd1234
        // this.params.query.task_name => 'abcd1234'
      }
    });
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
