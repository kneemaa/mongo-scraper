const express = require("express")
const router = express.Router()
const scraper = require("../scraper.js")
const mongoose = require("mongoose")
const Notes = require("../models/notes")
const Articles = require("../models/article")
const db = {
	Notes: Notes,
	Articles: Articles
}

router.get('/', (req,res) => {
	db.Articles.find({}).then(articles => {
		res.render('index', {articles: articles})
	}).catch(err => {
		console.log(err)
		res.render('index')
	})
	
})

router.get('/scrape', (req,res) => {
	scraper()
	res.redirect('/')
})

router.post('/save', (req,res) => {
	let id = req.body.id
	console.log(id)

	db.Articles.update(
		{"_id": id},
		{$set: {saved: true}}
		).catch(err => {
			console.log(err)
		})
})

module.exports = router