const express = require('express');
var cors = require('cors');
const app = express();
const port = 3001;
const router = require('./src/router');

var corsOptions = {
   origin: true,
   optionsSuccessStatus: 200
 }

var myLogger = function (req, res, next) {
   console.log('IN-REQUEST');
   next();
 };

//  app.get('/', (req, res) => {
//    res.send('Hello World!')
//  })
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors(corsOptions));
app.use(myLogger);
app.use(router);

app.listen(port);


