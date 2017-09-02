// Extension of the UI object, found in ui.js

// All clientside DOM event handler code will go here. (button clicks, mouse hovers etc)

UI.prototype.attachEventHandlers = () => {
	var currentUI = this;

	currentUI.playButton.on('click', () => {

		currentUI.functions.displayLoader(currentUI.output);        

		var url = 'https://www.youtube.com/watch?v=7-qGKqveZaM';
		var id = '7-qGKqveZaM'
	
		ytdl.getInfo(id, (err, info) => {
			if (err) throw err;
			currentUI.output.html('<pre><code>' + JSON.stringify(info,null,2) + '</pre></code>');
		});	
	
	});
	
	currentUI.searchBar.keyup( () => {
		var input =  $.trim(this.value);

		currentUI.searchOutputCaption.text('Searching...');
		currentUI.searchOutputPhrase.text('');
		currentUI.functions.displayLoader(currentUI.searchOutputResults);

		currentUI.functions.delay( () => {
			currentUI.searchOutputCaption.text('Search results for: ');
			currentUI.searchOutputPhrase.text(input);
			ipcRenderer.send('youtube-search-phrase', input);
			ipcRenderer.on('youtube-search-phrase-reply', (event, arg) => {
				currentUI.searchOutputResults.html(arg);				
			});		

		}, 2500);
		
	});    

	currentUI.searchBar.submit = (e) => {
		e.preventDefault();
	}

	currentUI.popupButton.on('click', () => {
	});

	currentUI.stopButton.on('click', () => {
		currentUI.output.empty();
	});
	
};