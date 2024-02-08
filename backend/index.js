const express=require("express")
const { connect_db } = require("./config/db")
const { auth } = require("./middleware/auth")
const {userRouteHandler} =require("./routes/user.route")
const { categoryRouteHandler } = require("./routes/category.route")
const { productRouteHandler } = require("./routes/product.route")
const cors=require("cors")
require("dotenv").config()

const app=express()
app.use(express.json())
app.use(cors())
// home route
app.get("/",(req,res)=>{
  return  res.status(200).json({msg:"Welcome to OneOnic Solution"})
})

//user route
app.use("/api/user",userRouteHandler)

//category route
app.use("/api/category",categoryRouteHandler)

//product route
app.use("/api/product",productRouteHandler)

// route not found
app.use((req,res)=>{
   return res.status(404).json({msg:"end point not found"})
})

// catch internal server error
app.use((err,req,res)=>{
    console.log(err.message,"server error")
   return res.status(500).json({msg:"server error" })
})

port=process.env.PORT || 8010

// server start
app.listen(port,async()=>{
 try {
    await connect_db
    console.log("db connected")
 } catch (error) {
    console.log(error)
 }
 console.log("server running")
})