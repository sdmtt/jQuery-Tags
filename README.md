# jQuery Tags

* Site: [jQuery Tags](http://aquilez.github.com/jQuery-Tags/)
* Author: [Santiago Dimattía](http://about.me/santiagodimattia)
* License: [MIT](http://www.opensource.org/licenses/mit-license.php)

## Description

A cool way to make tag management easier. You write the tag on a text field, and when you
hit enter (or deselect the input) it adds the tag to a list above the text field. You can
delete any tag from the list just by clicking on the little "x" next to the tag name.

## Screenshot

![Screenshot](http://i56.tinypic.com/vfidmp.png)

You can access a live demo [here](http://aquilez.github.com/jQuery-Tags/).

## Usage

First you need to include [jQuery](http://jquery.com) and the plugin:

	<script src="js/jquery.js"></script>
	<script src="js/jquery.tags.js"></script>

Then, you need to include the default CSS file (The plugin will work without it, but it won't look pretty)

	<link rel="stylesheet" media="screen" href="jquery.tags.css">

And then call the plugin on a text field

	jQuery(document).ready(function($){
		$('input.tags').tags();
	});

## Options

You have 4 options (2 of them are callbacks, actually):

### separator

String to use to separate the tags and concatenate the string. The default is a comma.

### maxTagWords

Limit the number of words a tag can have. Trims the tag if necessary. Set to 0 for no limit (default).

### tagAdded

Callback executed after a tag has been added. The function receives two parameters: the tag name, and a jQuery object (the text field).

### tagRemoved

Callback executed after a tag has been removed. It accepts the same parameters as *tagAdded*.

#### Example:

	jQuery(document).ready(function($){
		$('input.tags').tags({
			separator:   '|',
			maxTagWords: 0,
			tagAdded:    function(tag) { console.log('Tag added:'+tag); },
			tagRemoved:  function(tag) { console.log('Tag removed:'+tag); }
		});
	});
