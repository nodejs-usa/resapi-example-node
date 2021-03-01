const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const morgan = require('morgan');



// setings the server
app.set('port', process.env.PORT || 3000);

// Starting server
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users',require('./routes/users'));


app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
}) 