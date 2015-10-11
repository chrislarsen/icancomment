Meteor.methods({
	updateMetrics: function( updateObj ){
		
		metrics.update( {url: updateObj['url'] }, { $set: { count: updateObj['count'] + 1  } } )
		
		
		return({foo:'bar'});

	}
});

Meteor.publish( "metrics", function ( obj ) {
	if(obj){
		return metrics.find({ url: obj.url });
	}
});
