$( function(){
	if( $("link[rel='canonical']") && $("link[rel='canonical']").attr("href") ){
		var currentURL = $("link[rel='canonical']").attr("href");
	}else{
		var currentURL = document.location.href
	}
	$( "body" ).append( '<div id="icancomment"><button>&#128172;</button><iframe src="http://localhost:3000/?url="' + encodeURIComponent( currentURL ) + '></iframe></div>' );
	$('#icancomment').click( function(){
		
		
		var theHeight = $('#icancomment').height() == '30' ? '80%' : 30;
		var theWidth = $('#icancomment').width() == '30' ? '100%' : 30;
		$('#icancomment').height( theHeight );
		$('#icancomment').width( theWidth );
		$('#icancomment iframe').toggle();
	} )
})