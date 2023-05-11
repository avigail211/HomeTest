const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    
    firstName:String,
    lasttName:String,
    identity:String,
    address:{city:String,street:String,numberStreet:Number},
    birthDate:Date,
    phone:String,
    cellPhone:String,
    img:
    {
        type: String
    }
})
const User=mongoose.model("users",userSchema);
module.exports=User;
