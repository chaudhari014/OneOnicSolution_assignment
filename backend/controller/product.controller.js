const Product=require("../model/product.model")

const addproduct=async(req,res)=>{
     const {name,category}=req.body
    if(!name || !category ){
      return  res.status(404).json({"msg":"please provide all detail"})
    }
     try {
        const product= new Product(req.body)
        await product.save()
       return res.status(201).json({"msg":"product created successfully",data:product})
    } catch (error) {
      return  res.status(400).json({"error":error.message})
    }

}
const getAllProduct=async(req,res)=>{
      try {
        const product=await Product.find()
         return res.status(201).json({"msg":"get all product Successfully",data:product})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const updateproduct=async(req,res)=>{
     const {id}=req.params
  
    try {
        const product=await Product.findByIdAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).json({"msg": "product updated successfully",data:product})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const deleteproduct=async(req,res)=>{
     try {
        const product=await Product.findByIdAndDelete({_id:id})
        return res.status(200).json({"msg": "product updated successfully",data:product})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}

module.exports={addproduct,getAllProduct,updateproduct,deleteproduct}