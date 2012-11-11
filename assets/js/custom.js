jQuery(document).ready(function($){
	$('.tag-input').tags();

	$('.tag-input-3').tags({
		maxTagWords: 2
	}),

	$('.tag-input-4').tags({
		separator: '|'
	});
	$('.tags-help').remove();
});