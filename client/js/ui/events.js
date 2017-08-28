UI.prototype.attachEventHandlers = function() {
	var currentUI = this;

	currentUI.playButton.on('click', function(){

		currentUI.functions.displayLoader(currentUI.output);        
		console.log('playing...');

		var url = 'https://www.youtube.com/watch?v=7-qGKqveZaM';
		var id = '7-qGKqveZaM'
	
		ytdl.getInfo(id, (err, info) => {
			if (err) throw err;
			currentUI.output.html('<pre><code>' + JSON.stringify(info,null,2) + '</pre></code>');
		});	
	
	});
	
	currentUI.searchBar.keyup(function(){
		var input =  $.trim(this.value);

		currentUI.searchOutputCaption.text('Searching...');
		currentUI.searchOutputPhrase.text('');
		currentUI.functions.displayLoader(currentUI.searchOutputResults);

		currentUI.functions.delay(function(){
			currentUI.searchOutputCaption.text('Search results for: ');
			currentUI.searchOutputPhrase.text(input);
			console.log(input);
			currentUI.searchOutputResults.html('DATA');
		}, 2500);
		
	});    

	currentUI.popupButton.on('click', function(){
		bootbox.alert('This is an alert message');
	});

	currentUI.stopButton.on('click', function(){
		console.log('stopping...');
	
		currentUI.output.empty();
	
	});
	
};