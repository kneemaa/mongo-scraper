const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const routes = require("./routes/routes.js")
const requestPromise = require('request-promise')
const scraper = require("./scraper.js")


const PORT = process.env.PORT || 3000
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")


const request = require('request')
const cheerio = require('cheerio')


/*request('https://www.npr.org/sections/news/', (error, response, html) => {
	let $ = cheerio.load(html)

	let results = []

	$("article.item").each( function(i, element) {
		let url = $(element).find('div').find('h2').find('a').attr("href")
		let title = $(element).find('div').find('h2').find('a').text()
		let image = $(element).find('div').find('div').find('a').find('img').attr('src')

		results.push({
			url: url,
			title: title,
			image: image ? image : null,
		})
	})
	console.log(results)
})*/

scraper()
app.use(routes)

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})