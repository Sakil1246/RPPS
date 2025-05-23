const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt=require("jsonwebtoken");
const userSchema = new mongoose.Schema({
    email: { type: String, 
        required: true, unique:true }, 
    firstName: { type: String,
         required: true },
    lastName: { type: String,
    },
    password: { type: String,
         required: true },
    department: { type: String,
         required: true },
    
  },{timestamps: true});
  userSchema.methods.getJWT=async function(){
      const user=this;
      const token=await jwt.sign({_id:user._id},"user@token",{expiresIn:"1d"});
      return token;
  }
  
  studentSchema.methods.validatePasswords=async function(userInputPassword){
      const user=this;
      const hashPaasword=user.password;
      const isPassword=await bcrypt.compare(userInputPassword,hashPaasword);
      return isPassword;
  }
  module.exports = mongoose.model("User", userSchema);
  