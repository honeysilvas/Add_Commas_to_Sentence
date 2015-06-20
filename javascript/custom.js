
function splitWords(){
	
	// Splits the sentence into an array of different words.
	var words = $( "#sentence:first" ).text().split( " " );

	// Places a span tag around every word.
	var text = words.join( "</span> <span>" );
	$( "#sentence" ).html( "<span>" + text + "</span>" );
}

// Adds or removes commas.
function addRemoveComma() {
	$( "span" ).click( function () {
		var str = $( this ).text();
		
		var commaPosition = str.search( "," );
		
		if ( commaPosition == -1 ){ 
			// Adds comma after the word.
			$( this ).text( str + "," );		

			} else {
			// Removes comma after the word.
			$( this ).text( str.replace( ",", "" ) );

		}
	});
}

// Event listener.
function clickListener(){
	// Listens for clicks.
	$( "#sentence" ).click( function() {
		addRemoveComma();
	});	
}