

metrics = new Mongo.Collection("metrics");

metricsSchema = {
	url:{
		type: String
	},
	title:{
		type: String
	},
	site:{
		type: String
	},
	count:{
		type: Number
	}
}

metrics.attachSchema( new SimpleSchema( metricsSchema ) );

Router.route('/', function () {
	var self = this
	if( !this.params.query.url ){
	  this.render( 'intro' );
	}else{
		
	  this.render( "main", {
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
	  } );
	}
});


Comments.changeSchema(function (currentSchema) {
	console.log(currentSchema);
	
	
  	currentSchema.referenceId = {
		type: String,
		autoValue: function() {
			if ( Meteor.isServer && this.isInsert ) {
				console.log( this.value )
				
				var currentMetrics = metrics.findOne( {_id: this.value } )
				if( currentMetrics ){
					
				}else{
					//currentMetrics.insert()
				}
			}
			return this.value;
		}
	};
});
