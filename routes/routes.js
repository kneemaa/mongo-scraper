const express = require("express")
const router = express.Router()
const scraper = require("../scraper.js")

router.get('/', (req,res) => {
	res.render('index')
})

router.get('/scrape', (req,res) => {
	scraper()
	res.redirect('/')
})

module.exports = router