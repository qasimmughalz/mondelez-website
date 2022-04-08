const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pageDirect = require('./routes/directPage');
const errorTool = require('./error/error');
const app = express();

app.set('view engine','ejs');

app.set('views','views');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));

app.use('/',pageDirect);

app.use(errorTool.get404);

app.listen(3300, ()=> console.log('Server is running port 3300'));


