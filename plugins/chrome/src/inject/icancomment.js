$( function(){
	if( $("link[rel='canonical']") && $("link[rel='canonical']").attr("href") ){
		var currentURL = $("link[rel='canonical']").attr("href");
	}else{
		var currentURL = document.location.href
	}
	$( "body" ).append( '<div id="icancomment"><button>&#128172;</button><iframe src="http://localhost:3000?"' + encodeURIComponent( currentURL ) + '></iframe></div>' );
	$('#icancomment').click( function(){
		
		
		var theHeight = $('#icancomment').height() == '50' ? '80%' : 50;
		$('#icancomment').height( theHeight );
		$('#icancomment iframe').toggle();
	} )
})