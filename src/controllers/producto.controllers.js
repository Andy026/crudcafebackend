import Producto from "../models/producto";

const productoCtrl = {}

productoCtrl.borrarProducto = (req, res) => {
    res.send('alguien quiere borrar')
};

productoCtrl.nuevoProducto = (req, res) => {
    res.send('alguien quiere agregar un producto')
};

export default productoCtrl