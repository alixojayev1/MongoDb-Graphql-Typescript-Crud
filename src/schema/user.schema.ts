import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    username:{
       type: String,
       unique:true
    },
    password:Number
})