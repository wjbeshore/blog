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




app.listen(port, () => {

  console.log(`Example app listening at http://localhost:${port}`)
})