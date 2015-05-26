$('.load-script').on('click', function() {
	var script = '/exercises/' + $(this).data('script');

	console.clear();

	$.getScript(script, function(data, status, jqhxr) {
		//
	});
});
