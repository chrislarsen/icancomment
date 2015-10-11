Comments.ui.config({
template: 'bootstrap'
});

Accounts.ui.config({
passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Template.registerHelper( "posts", function () {
	return metrics.find({}, { sort: { 'count': -1 } });
});






