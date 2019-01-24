const express = require('express');
const controller = require('./controllers/userController');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/user/login', controller.validateUser);


app.listen(port, () => console.log(`App listening on port ${port}!`))
