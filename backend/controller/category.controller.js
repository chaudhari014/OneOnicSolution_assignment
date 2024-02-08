const Category=require("../model/category.model")

const addCategory=async(req,res)=>{
    const {name}=req.body
        try {
            if(!name){
                return res.status(404).json({"error":"please provide data"})
            }
            const category=new Category.insertMany(req.body)
            await category.save()
            return res.status(200).json({"msg":"category add successfully",category})
        } catch (error) {
            return res.status(400).json({"error":error.message})
        }
}
const updateCategory=async(req,res)=>{
      const {id}=req.params
      try {
        const category=await Category.findByIdAndUpdate({_id:id},req.body,{new:true})
        return res.status(200).json({"msg":"successfully updated"})
        
      } catch (error) {
        return res.status(400).json({"error":error.message})
      }
}


const deleteCategory=async(req,res)=>{
    const {id}=req.params
     
    try {
        const note=await Category.findByIdAndDelete({_id:id})
        return res.status(200).json({"msg": "blog delete successfully"})
    } catch (error) {
        return  res.status(400).json({"error":error.message})
    }
}
const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.aggregate([
            {
                $graphLookup: {
                    from: "categories", // Assuming the name of the categories collection is "categories"
                    startWith: "$parent",
                    connectFromField: "parent",
                    connectToField: "_id",
                    as: "hierarchy",
                    maxDepth: 10 // Set maximum depth to prevent infinite recursion
                }
            }
        ]);

        return res.status(200).json({ "msg": "Get all categories successfully", data: categories });
    } catch (error) {
        return res.status(400).json({ "error": error.message });
    }
}

module.exports={addCategory,updateCategory,deleteCategory,getAllCategory}