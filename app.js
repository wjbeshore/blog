const express = require('express')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const https = require('https')
const KEY = "8c396ad3956481a4406484fd5a178317"

const uri = "mongodb+srv://will:xo52eg15@cluster0.qzq8l.mongodb.net/blog?retryWrites=true&w=majority?authSource=admin";



const mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect(uri, {useNewUrlParser: true});


const MyModel = mongoose.model('Test', new Schema({ name: String }));


mongoose.model('posts', new Schema(
{title:String,
text:String,
comments:Object}
	));

var post = mongoose.model('posts');



app.get('/', (req, res) => {

//pull blog posts from DB
//renders home page
  

  // res.render("home", {renderlist: bloglist});
  
});




app.get('/post/:id', (req, res) => {
    //Render full blog post.
    
    res.render('post', {blogPost: postToRender});
});



app.get('/compose', (req, res) => {
	//Page to create blog post

    res.render("compose");
});




app.post("/compose", (req, res) => {
	//route to post new blog post.

		// "title": req.body.title,
		// "body": req.body.body

	res.redirect('/')
})




app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})