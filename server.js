const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const exphbs = require("express-handlebars")
const routes = require("./routes/routes.js")
const requestPromise = require('request-promise')



const PORT = process.env.PORT || 3000
app.use(express.static("public"))
app.use(bodyParser.urlencoded({ extended:true }))
app.use(bodyParser.json())
app.engine("handlebars", exphbs({defaultLayout: "main"}))
app.set("view engine", "handlebars")


const request = require('request')
const cheerio = require('cheerio')


app.use(routes)

const server = app.listen(PORT, () => {
	console.log("App listening on PORT: " + PORT)
})