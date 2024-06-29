import mongoose, { Schema } from "mongoose";
import { type } from "os";

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,
        lowercase:true,
    },
    password:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    contact:{
        type:Number,
    },
},{timestamps:true});

export const User = mongoose.model("User",userSchema);