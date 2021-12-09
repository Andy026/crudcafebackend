import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

//instanciar express
const app = express();
//crear un puerto
app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'), () => {
    console.log('En puerto '+app.get('port'));
    console.log(path.join(__dirname, '../public'))
})

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configurar el index.html
app.use(express.static(path.join(__dirname, '../public')));


//crear rutas
app.get('/', (req, res) => {
    res.send('desde backend')
})
app.delete('/borrarproducto', (req, res) => {
    res.send('delete desde backend')
})