const mongoose=require("mongoose");
const connectDB=async()=>{
    await mongoose.connect("mongodb+srv://csb22056:0W7QHygGvNdBUzgO@rpfs.7ykuzqf.mongodb.net/");
};


module.exports=connectDB;