

metrics = new Mongo.Collection("metrics");

metricsSchema = {
	url:{
		type: String,
		optional: true
	},
	title:{
		type: String,
		optional: true
	},
	site:{
		type: String,
		optional: true
	},
	count:{
		type: Number,
		optional: true
	}
}

metrics.attachSchema( new SimpleSchema( metricsSchema ) );

Router.route('/', function () {
	var self = this
	if( !this.params.query.url ){
	  this.render( 'intro' );
	}else{
		Session.set( 'title', self.params.query.title );
		Session.set( 'site', self.params.query.site );
		this.render( "main", {
			name: 'main',
			data: {
				url: function () {
					return self.params.query.url;
				},
				title:  function () {
					return self.params.query.title;
				},
				site:  function () {
					return self.params.query.site;
				}
			}
		  } 
	  );
	}
});


Meteor.methods({
	updateMetrics: function(  ){
		console.log('test');
		//console.log(configObj);
		
		// var currentMetrics = metrics.findOne( {_id: this.value } )
// 		if( currentMetrics ){
//
// 		}else{
// 			//currentMetrics.insert()
// 		}
	}
});

Comments.changeSchema(function (currentSchema) {
	
	
	
	
  	currentSchema.referenceId = {
		type: String,
		autoValue: function() {
			if ( Meteor.isClient && this.isInsert ) {
				var configObj = {
					title: Router.current().params.query.title,
					site: Router.current().params.query.site,
					url: Router.current().params.query.url
				}
				Meteor.call('updateMetrics' );
				
				
				console.log(configObj);
			}
			return this.value;
		}
	};
});
