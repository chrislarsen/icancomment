$( function(){
	if( $("link[rel='canonical']") && $("link[rel='canonical']").attr("href") ){
		var currentURL = $("link[rel='canonical']").attr("href");
	}else{
		var currentURL = document.location.href
	}
	
	
	
	var currentTitle = '';
	//meta property="og:title"
	if( $("meta[property='og:title']") && $("meta[property='og:title']").attr("content") ){
		currentTitle = $("meta[property='og:title']").attr("content");
	}else if( $("meta[name='twitter:title']") && $("meta[name='twitter:title']").attr("content") ){
		currentTitle = $("meta[name='twitter:title']").attr("content");
	}else if( $("h1") && $("h1").text() ){
		currentTitle = $("h1").text();
	}else if( $("title") && $("title").text() ){
		currentTitle = $("title").text();
	}
	
	
	
	$( "body" ).append( '<div id="icancomment"><button>&#128172;</button><iframe src="http://localhost:3000/?url=' + encodeURIComponent( currentURL ) + '&title=' + encodeURIComponent( currentTitle ) + '"></iframe></div>' );
	$('#icancomment').click( function(){
		
		
		var theHeight = $('#icancomment').height() == '30' ? '80%' : 30;
		var theWidth = $('#icancomment').width() == '30' ? '100%' : 30;
		$('#icancomment').height( theHeight );
		$('#icancomment').width( theWidth );
		$('#icancomment iframe').toggle();
	} )
})