import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

export const router = Router();

//crear rutas
router
  .route("/")
  .get(productoCtrl.listaProductos)
  .post(productoCtrl.nuevoProducto);

router
  .route("/:id")
  .get(productoCtrl.obtenerProducto)
  .delete(productoCtrl.borrarProducto)
  .put(productoCtrl.modificarProducto);