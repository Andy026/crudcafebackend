import Producto from "../models/producto";

const productoCtrl = {};

productoCtrl.borrarProducto = (req, res) => {
  res.send("alguien quiere borrar");
};

productoCtrl.nuevoProducto = async (req, res) => {
  try {
    //console.log(req.body)
    //validar
    //crear un objeto para guardar en la BD
    const productoNuevo = new Producto({
      nombreProducto: req.body.nombreProducto,
      precioProducto: req.body.precioProducto,
      categoria: req.body.categoria,
    });
    //console.log(productoNuevo)
    //guardar en base de datos
    await productoNuevo.save();
    res.status(201).json({ mensaje: "Producto creado correctamente" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "Error al crear el producto" });
  }
};

productoCtrl.listaProductos = async (req, res) => {
  try {
    //crear un arreglo con los productos de la BD
    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
  } catch (error) {
      console.log(error);
      res.status(404).json({ mensaje: 'No se encontraron los datos solicitados'})
  }
};

export default productoCtrl;
