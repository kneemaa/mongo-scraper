const doc = $(document)

doc.on("click",".scrape",function() {
	$.ajax({
		url: '/api/scrape',
		method: 'GET'
	}).done( function(data) {
	})
})

doc.on('click','.save', function() {

	$.ajax({
		url: '/api/article/add',
		method: 'POST',
		data: {id: this.id}
	}).done( function(data) {})
	location.reload()
})

doc.on('click','.saved-articles', function() {
	window.location = '/saved'
})

doc.on('click','.home', function() {
	window.location = '/'
})

doc.on('click', '.unsave', function() {
	$.ajax({
		url: '/api/article/delete',
		method: 'POST',
		data: {id: this.id}
	}).done( function(data) {})
	location.reload()
})

doc.on('click','.note', function(event) {
	$('.modal').modal('show')
})

doc.on('click', '.save-note', function(event) {
	let id = this.id
	let note = $(`.note-${id}`).val()
	
	$.ajax({
		url: '/api/note/add',
		method: 'POST',
		data: {
			id: id,
			note: note,
		}
	}).done( function(data) {
	})
	$('.modal').modal('hide')
})