import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

export const router = Router();

//crear rutas
router
  .route("/")
  .get(productoCtrl.listaProductos)
  .post(productoCtrl.nuevoProducto);
