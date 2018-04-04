$(document).on("click",".scrape",function() {
	console.log("CLICK")
	
	$.ajax({
		url: '/scrape',
		method: 'GET'
	}).done( function(data) {
		console.log('done')
	})
})