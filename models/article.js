const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ArticleSchema = new Schema({
	title: {
		type: String,
		unique: true,
		required: true,
	},
	url: {
		type: String,
		required: true,
	},
	image: {
		type: String,
	},
	saved: {
		type: Boolean,
		default: false,
	}
})

let Article = mongoose.model("Article", ArticleSchema)

module.exports = Article