const mongoose = require("mongoose")

const Schema = mongoose.Schema

const NotesSchema = new Schema({
	body: {
		type: String,
		required: true,
	},
	article: [{
		type: Schema.Types.ObjectId,
		ref: "Article"
	}]
})

let Article = mongoose.model("Notes", NotesSchema)

module.exports = Article