const mongoose = require('mongoose');
require ('dotenv').config();

const dbConnection = async () =>{

    try {
       await  mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true, 
      useUnifiedTopology: true});   
       console.log('DB conectada');
    } catch (error) {
        console.log(error);
        throw new Error('No se puede iniciar conexion db');
    }
   
}

module.exports = {
    dbConnection
}