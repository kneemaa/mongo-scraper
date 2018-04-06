const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NotesSchema = new Schema({
	body: {
		type: String,
		required: true,
	}
})

let Article = mongoose.model("Notes", NotesSchema)

module.exports = Article