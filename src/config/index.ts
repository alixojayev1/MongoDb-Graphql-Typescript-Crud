import mongoose, { mongo } from "mongoose";

export async  function   newMongoConnect(url:string){
     try {
        await  mongoose.connect(url)
        
        return mongoose
     } catch (error) {
        return error
        
     }
}