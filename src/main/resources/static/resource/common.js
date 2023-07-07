$('select[data-value]').each(function(index, item) {
	
	const items = $(item);
	
	const defaultvalue = items.attr('data-value').trim();
	
	if (defaultvalue > 0) {
		items.val(defaultvalue);
	}
	
})