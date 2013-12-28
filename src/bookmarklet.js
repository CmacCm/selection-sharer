(function() {

	var baseUrl = 'http://localhost:8081';

	// Loading CSS
	var l = document.createElement('link');
	l.rel = 'stylesheet';
	l.href = baseUrl+"/src/share-selection.css";
	document.head.appendChild(l);

	var loadSelectionSharer = function() {
		var s = document.createElement('script');
		s.src = baseUrl+"/src/share-selection.js";
		s.onload = runScript;
		document.body.appendChild(s);
	}

	var runScript = function() {
		var sharer = new selectionSharer();
		sharer.show();
		sharer.setElements('p');
	}

	if(typeof jQuery != 'function') {
		var s = document.createElement('script');
		s.src="http://code.jquery.com/jquery-latest.js";
		s.onload = loadSelectionSharer;
		document.body.appendChild(s);
	}
	else {
		loadSelectionSharer();
	}

})();