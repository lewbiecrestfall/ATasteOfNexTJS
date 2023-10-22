import { connectDB } from "@/utils/database";
import { Product } from "@/model/product";

export default async(req,res)=>{
   if(req.method!=="POST"){
    res.status(404).json({
        success : false,
        message : `No API with ${req.method} Method`
    })
   } else{
    await connectDB();

    const{name, age , hobby} = req.body;

    await Product.create({
        name , age, hobby

    })
    res.status(201).json({
        success : true,
        message : "Product created succesfullly "
    });
   }
};