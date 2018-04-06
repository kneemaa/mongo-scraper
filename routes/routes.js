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

router.get('/api/scrape', (req,res) => {
	scraper()
	res.redirect('/')
})

router.post('/api/article/add', (req,res) => {
	let id = req.body.id

	db.Articles.update(
		{"_id": id},
		{$set: {saved: true}}
		).catch(err => {
			console.log(err)
		})
})

router.post('/api/article/delete', (req,res) => {
	let id = req.body.id

	db.Articles.update(
		{"_id": id},
		{$set: {saved: false}}
		).catch(err => {
			console.log(err)
		})

})

router.get('/saved', (req,res) => {
	db.Articles.find({saved: true}).then(articles => {
		res.render('saved', {articles: articles})
	}).catch(err => {
		res.render('saved')
	})
	
})

router.post('/api/note/add', (req,res) => {
	console.log('save note')
	db.Notes.create({ 
			body: req.body.note, 
			article: req.body.id,
		})
		.then(notes => {
		})
		.catch(err => {
			console.log(err)
		})
	
})

module.exports = router
