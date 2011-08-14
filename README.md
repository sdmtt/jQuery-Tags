# jQuery Tags

* License: [MIT](http://www.opensource.org/licenses/mit-license.php)
* Author: [Santiago Dimattía](http://about.me/santiagodimattia)

## Description

A cool way to make tag management easier. You write the tag on a text field, and when you
hit enter (or deselect the inpit) it adds the tag in list. You can delete any tag from
the list just by clicking on the little "x" next to the tag value.

## Screenshot

![Screenshot](http://i56.tinypic.com/vfidmp.png)

## Usage

First you need to include [jQuery](http://jquery.com) and the plugin:

	<script src="js/jquery.js"></script>
	<script src="js/jquery.tags.js"></script>
	
Then, you need to include the CSS file (The plugin will work without it, but it won't look pretty)

	<link rel="stylesheet" media="screen" href="jquery.tags.css">

And then call the plugin on a text field

	jQuery(document).ready(function($){
		$('input.tags').tags();
	});

## Options

You have 3 options (2 of them are callbacks, actually):

### separator

String to use to separate the tags and concatenate the string. The default is a comma.

### tagAdded

Callback which is executed after a tag has been added. The function receives two parameters: the tag name, and a jQuery object (the text field)

### tagRemoved

Callback which is executed after a tag has been removed. It accepts the same parameters as *tagAdded*