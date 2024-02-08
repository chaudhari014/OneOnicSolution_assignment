const express = require("express");
const { addproduct, updateproduct, deleteproduct, getAllProduct } = require("../controller/product.controller");
const productRouteHandler=express.Router()

productRouteHandler.post("/",addproduct)
productRouteHandler.get("/",getAllProduct)
productRouteHandler.put("/:id",updateproduct)
productRouteHandler.delete("/:id",deleteproduct)

module.exports={productRouteHandler}