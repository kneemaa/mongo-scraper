$(document).on("click",".scrape",function() {
	
	$.ajax({
		url: '/scrape',
		method: 'GET'
	}).done( function(data) {
	})
})

$(document).on('click','.save', function() {

	$.ajax({
		url: '/save',
		method: 'POST',
		data: {id: this.id}
	}).done( function(data) {
	})
})

$(document).on('click','.saved-articles', function() {
	console.log("i change pages to show saved articles")
})