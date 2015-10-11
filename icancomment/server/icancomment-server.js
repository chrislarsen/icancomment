Meteor.methods({
	updateMetrics: function( updateObj ){
		
		metrics.update( {url: updateObj['url'] }, { $set: { count: updateObj['count'] + 1  } } )
		
		
		return({foo:'bar'});

	}
});

Meteor.publish( "metrics", function ( obj ) {
	if(obj){
		return metrics.find({ url: obj.url });
	}else{
		var yesterday = new Date(new Date().getTime() - (24 * 60 * 60 * 1000));
		return metrics.find({create: {$gt:  yesterday } }, { sort: { 'count': -1 }, limit: 20});
	}
});
