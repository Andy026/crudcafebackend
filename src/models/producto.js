import mongoose, {Schema} from 'mongoose';

const productoSchema = new Schema({
    nombreProducto:{
        required: true,
        type: String,
        maxlength: 100
        //para usuarios usar la propiedad unique:true
    },
    precioProducto:{
        type:Number,
        required: true
    },
    categoria:{
        type: String,
        required: true
    }
});

const Producto = mongoose.model('producto', productoSchema);

export default Producto;