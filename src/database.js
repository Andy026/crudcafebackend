import mongoose from "mongoose";

//const url = 'mongodb://localhost:27017/crudcafe';
const url = 'mongodb+srv://andysatie:q7w8e9a4s5d6@cluster0.njfra.mongodb.net/crudcafe'

mongoose.connect(url, {useNewUrlParser: true});

//guardar la conexión

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('BD conectada');
})