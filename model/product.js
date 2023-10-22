import mongoose from "mongoose"

const schema = new mongoose.Schema({
    name : String, 
    age : Number, 
    hobby : String,
});
mongoose.models ={};

export const Product = mongoose.model("Product", schema)