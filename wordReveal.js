;(function ($) {
    $.fn.wordReveal = function( options ) {
	    
		var settings = $.extend({
            text: "Check me out on GitHub: <br>https://github.com/mathieujonson/word-reveal"
		}, options );
		
		var words = settings.text.split(" ");
        
	    $(this).click(function() {
		    //get the current html within container
		    var currentText = $(this).html().split(" ");

            //if the text has all been revealed, return
	    	if(words.length+1==currentText.length) {
				return $(this);
			}
				
   			$(this).html($(this).html() + " " + words[currentText.length - 1]);				
		});
	};
} ( jQuery ));  
