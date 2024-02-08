const express = require("express");
const { addCategory, updateCategory, deleteCategory, getAllCategory } = require("../controller/category.controller");
const categoryRouteHandler=express.Router()

categoryRouteHandler.get("/",getAllCategory)
categoryRouteHandler.post("/",addCategory)
categoryRouteHandler.put("/:id",updateCategory)
categoryRouteHandler.delete("/:id",deleteCategory)

module.exports={categoryRouteHandler}