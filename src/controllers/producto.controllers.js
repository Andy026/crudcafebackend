import Producto from "../models/producto";

const productoCtrl = {}

productoCtrl.borrarProducto = (req, res) => {
    res.send('alguien quiere borrar')
};

productoCtrl.nuevoProducto = async(req, res) => {
    try {
        //console.log(req.body)
        //validar
        //crear un objeto para guardar en la BD
        const productoNuevo = new Producto({
            nombreProducto: req.body.nombreProducto,
            precioProducto: req.body.precioProducto,
            categoria: req.body.categoria
        })
        //console.log(productoNuevo)
        //guardar en base de datos
        await productoNuevo.save();
        res.status(201).json({mensaje: 'Producto creado correctamente'});
    } catch (error) {
        console.log(error);
        res.status(400).json({mensaje: 'Error al crear el producto'});
    }
};

export default productoCtrl