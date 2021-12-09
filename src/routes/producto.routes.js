import { Router } from "express";
import { productoCtrl } from "../controllers/producto.controllers";

export const router = Router();

//crear rutas
router.route('/borrarproducto').delete(productoCtrl.borrarProducto)
