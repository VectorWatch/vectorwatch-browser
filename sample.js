var VectorWatch = require('vectorwatch-browser');

var vectorWatch = new VectorWatch({
  streamUID: "ENTER_YOUR_STREAM_ID",
  token: "ENTER_YOUR_TOKEN"
});

vectorWatch.on('subscribe', function(event, response) {
  response.setValue(event.getUserSettings().settings['Text']);
  response.send();
});

vectorWatch.on('config', function(event, response) {
	var text = response.createAutocomplete('Text');
  text.setType('INPUT_LIST');
	var option = text.addOption('name', 'Hello world!');
	text.setDefaultOption(option);

  response.send();
});
