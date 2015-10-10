if (Meteor.isClient) {

  Comments.ui.config({
    template: 'bootstrap'
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
