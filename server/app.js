const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      cors = require('cors'),
      axios = require('axios'),
      morgan = require('morgan')
const user = require('./routes/user')
const question = require('./routes/question')
const app = express();
const port = process.env.PORT || 3000 ;

app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// connect database
var url = 'mongodb://localhost/clowder-overflow2';
// var url = 'mongodb://anggraito:anggi123@cluster0-shard-00-00-vv98n.mongodb.net:27017,cluster0-shard-00-01-vv98n.mongodb.net:27017,cluster0-shard-00-02-vv98n.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin'
mongoose.connect(url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
   console.log(`You're connected in this database`)
})

// route setting use
app.use('/', user)
app.use('/questions', question)

app.listen(port);
console.log('Your presentation is running on http://localhost:' + port);