const express = require('express');
const app = express ();

require('./DB/db')
app.use(express.json());
app.use(require('./routes/route'));

app.listen(2000,() =>{
    console.log('server is running on port 2000');
    })


