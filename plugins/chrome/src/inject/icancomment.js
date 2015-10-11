$( function(){
	
	
	
	
	//&#128172;
	$( "body" ).append( '<div id="icancomment"><button><img src="' +  chrome.extension.getURL('bubble.png') + '" height="30" width="30"></button></div>' );
	
	$('#icancomment').click( function(){
		
		
		
		if( ! $('#icancomment iframe').length ){
			if( !currentURL ){
				if( $("link[rel='canonical']") && $("link[rel='canonical']").attr("href") ){
					var currentURL = $("link[rel='canonical']").attr("href");
				}else{
					var currentURL = document.location.href
				}
			}
		
			if( !siteName ){
				if( $("meta[property='og:site_name']") && $("meta[property='og:site_name']").attr("content") ){
					var siteName = $("meta[property='og:site_name']").attr("content");
				}else if( $("meta[itemprop='sourceOrganization']") && $("meta[itemprop='sourceOrganization']").attr("content") ){
					var siteName = $("meta[itemprop='sourceOrganization']").attr("content");
				}else if( $("meta[name='twitter:site']") && $("meta[name='twitter:site']").attr("content") ){
					var siteName = $("meta[name='twitter:site']").attr("content").replace( '@', '' );
				}else{
					var siteName = document.location.host.replace( 'www.', '' );
				}
			}
		
			if( !currentTitle ){
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
			}
			
			
			
			if( localStorage["icc-dev"] ){
				var appURL = 'http://localhost:3000'
			}else{
				var appURL = 'https://icancomment.meteor.com'
			}
		
			$( "#icancomment" ).append( '<iframe src="' + appURL + '/?url=' + encodeURIComponent( currentURL ) + '&title=' + encodeURIComponent( currentTitle ) + '&site=' + encodeURIComponent( siteName ) + '"></iframe>' );
			
			
		}
		
		
		
		
		
		var theHeight = $('#icancomment').height() == '30' ? '80%' : 30;
		var theWidth = $('#icancomment').width() == '30' ? '100%' : 30;
		$('#icancomment').height( theHeight );
		$('#icancomment').width( theWidth );
		$('#icancomment iframe').toggle();
		
		
		
	} );
	
});

