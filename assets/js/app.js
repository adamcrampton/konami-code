// Set up the listeners to trigger the event.
$(document).ready(function() {
	// Store history of key presses.
	let keys = [];

	// Store key sequence.
	let code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

	// Bind the keydown events.
	$(document).keydown(function(e) {
		// Push keypress into the array.
		keys.push(e.keyCode);

		// Bump the oldest keypress off the array if it exceeds the length of the sequence array.
		if (keys.length > code.length) {
            keys.shift();
        }

        // If the keypress sequence matches the code array, show the modal.
        if ( keys.toString() == code.toString() ) {
        	$('#demo-modal').modal('show');
      	}
	});
});