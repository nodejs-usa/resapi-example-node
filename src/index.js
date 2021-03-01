const express = require('express');
const app = express();
const morgan = require('morgan');

// setings the server
app.set('port', process.env.PORT || 3000);

app.use(require('./routes/index'));

// Starting server
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
}) 