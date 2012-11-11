/*!
 * jQuery Tags plugin v1.1
 * http://github.com/aquilez/jquery-tags
 *
 * Copyright 2011, Santiago Dimattia
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
(function($) {

	$.fn.tags = function(options)
	{
		var defaults = {
			separator:   ',',
			maxTagWords: 0,
			tagAdded:    function() { },
			tagRemoved:  function() { },
		};
		var settings = $.extend(defaults, options);

		$(this).each(function(){
			var e = $(this);
			var instance = {

				textfield: e,
				taglist: { },

				init: function(){
					var that = this;
					var e = this.textfield;

					if(!e.is('input[type=text]'))
					{
						return;
					}

					// Wrap the input field and create the tag list
					e.wrap('<div class="tag-manager" />');
					e.before('<ul class="tag-list"></ul>');

					// Replace the text field with a hidden one
					e.before('<input type="hidden" name="' + e.attr('name') + '" />');
					e.removeAttr('name');

					that.add_tag();

					// Bind the container so it focus the text field when you click on it
					e.parent().bind('click', function(){
						e.focus();
					});

					// Bind the input field
					e.bind('blur', function(){
						that.add_tag();
					}).keydown(function(event){
						if(event.keyCode == 13)
						{
							event.preventDefault();
							that.add_tag();
						}
					});
				},

				// Update the hidden field
				updateHiddenField: function(){
					var string = '';
					for(i in this.taglist)
					{
						string += settings.separator + this.taglist[i];
					}
					this.textfield.parent().children('input[type=hidden]').val(string.substring(1));
				},

				// Add one or more tags
				add_tag: function() {
					var that = this;
					var e = this.textfield;

					if(e.val() == '')
					{
						return;
					}

					// Separe the tags by comma
					tags = e.val().split(settings.separator);

					// For each tag
					for(i in tags)
					{
						// Trim
						tag = tags[i].replace(/^\s+|\s+$/g, '');

						// Apply maxTagWords
						var words = tag.split(" ");
						if(settings.maxTagWords != 0 && words.length > settings.maxTagWords)
						{
							for(var m = 0; m < words.length - settings.maxTagWords; m++)
							{
								tag = tag.substring(0, tag.lastIndexOf(" "));
							}
						}

						// Add the tag only if it isn't on the list already
						if(that.taglist[tag.toLowerCase()] === undefined)
						{
							// Add the tag on the list
							e.parent().children('ul.tag-list').append('<li data-name="' + tag + '">' + tag + ' <a class="tag-remove-link">X</a></li>');

							// Add the tag on the array
							that.taglist[tag.toLowerCase()] = tag;

							// Delete the tag when the link is clicked!
							e.parent().find('li[data-name="' + tag + '"] a').unbind().click(function(){
								tagname = $(this).parent().data('name').toString().toLowerCase();

								// Delete the key
								delete that.taglist[tagname];

								// Update the hidden input
								that.updateHiddenField();

								// Remove the li
								$(this).parent().remove();

								// Callback
								settings.tagRemoved(tag, e);
							});
						}

						// Callback
						settings.tagAdded(tag, e);
					}

					// Update the hidden input
					that.updateHiddenField();

					e.val('');
				}
			};

			instance.init();
		});
	}

})(jQuery);