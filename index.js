const express = require('express');
require ('dotenv').config();
const {dbConnection} = require('./db/config');

const app = express();

// BD de datos

dbConnection();

app.get('/', (req, res)=>{
    res.json({
        ok:true,
        msg:'Holamundo'
    })
});

app.listen(process.env.PORT,()=>{
 console.log('servidor puerto 3000');
});