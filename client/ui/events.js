// UI / DOM event handlers are defined here.

UI.prototype.attachEventHandlers = function() {
	var currentUI = this;

	currentUI.playButton.on('click', function(){

		currentUI.functions.displayLoader(currentUI.output);
		
		let id = '7-qGKqveZaM'
	
		api.getYoutubeVideoInfoById(id, function(data){
			currentUI.output.html('<pre><code>' + JSON.stringify(data,null,2) + '</pre></code>');		
		})
	
	});
	
	currentUI.searchBar.keyup(function(){
		var input =  $.trim(this.value);

		currentUI.searchOutputCaption.text('Searching...');
		currentUI.searchOutputPhrase.text('');

		currentUI.functions.displayLoader(currentUI.searchOutputResults);

		currentUI.functions.delay(function(){
			currentUI.searchOutputCaption.text('Search results for: ');
			currentUI.searchOutputPhrase.text(input);

			api.searchYoutubeByPhrase(input, function(data){
				currentUI.searchOutputResults.html(data)
			});

		}, 2500);
		
	});    

	currentUI.searchBar.submit(function(e){
		e.preventDefault();
	});

	currentUI.popupButton.on('click', function(){
		bootbox.alert('This is an alert message');
	});

	currentUI.stopButton.on('click', function(){		
		currentUI.output.empty();	
	});
	
};