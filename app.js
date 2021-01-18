const express = require('express')
const path = require('path')
const request = require('request')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const https = require('https')
const KEY = "8c396ad3956481a4406484fd5a178317"
app.use(express.static(__dirname + '/public'));

const uri = "mongodb+srv://will:xo52eg15@cluster0.qzq8l.mongodb.net/blog?retryWrites=true&w=majority";
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));


const mongoose = require('mongoose');

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

var Schema = mongoose.Schema;

mongoose.model('posts', new Schema(
{title:String,
text:String,
comments:Object},
{ timestamps: true }
	));

var post = mongoose.model('posts');


app.get('/', (req, res) => {

//pull blog posts from DB
//renders home page
	post.find({}, function(err, data) { 
		// console.log(data);
    //passes array through to home page
		res.render("home", {renderList: data});
				
	});
  // res.render("home", {renderlist: bloglist});
  
});




app.get('/post/:id', (req, res) => {
    //Render full blog post.
    console.log(req.params.id)
    post.find({ _id : req.params.id}, function(err, data) { 
		console.log(data);
    //passes array through to home page
		// res.render("home", {renderList: data});
				
	});
    // res.render('post', {blogPost: postToRender});
});



app.get('/compose', (req, res) => {
	//Page to create blog post

    res.render("compose");
});




app.post("/compose", (req, res) => {
	//route to post new blog post.
	console.log(req);
		// "title": req.body.title,
		// "body": req.body.body
	let object = {
	title: req.body.title,
	text: req.body.body,
	comments: {}
}

post.create(object, function(err, result) {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
      res.redirect('/');
    }
  });

	
})




app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})