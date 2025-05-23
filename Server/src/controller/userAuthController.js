const User = require("../model/user");
const { validateUserSignupData } = require("../utils/validation");
const bcrypt = require("bcrypt");
const signup= async (req, res) => {
  try {
      validateUserSignupData(req);
      const {email, password, firstName, lastName, department } = req.body;
      
      const existingStudent = await User.findOne({ email });

      if (existingStudent) {
          return res.status(400).json({ error: "Email already exists! Please Sign In" });
      }

      const hashPassword = await bcrypt.hash(password, 10);
      const newStudent = new Student({
          email,
          password: hashPassword,
          firstName,
          lastName,
          department
      });

       await newUser.save();
      const token = newUser.getJWT();
      res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
      res.status(201).json({ message: "Student registered successfully", data: newUser });

  } catch (err) {
      res.status(400).send("ERROR: " + err.message);
  }
};

const login= async (req, res) => {
    try {
      let { email, password } = req.body;
      
      const user = await User.findOne({ rollNo: rollNo });
  
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
  
      const isPasswordValid = await user.validatePasswords(password);
      if (!isPasswordValid) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const isEmailValid=await user.validateEmail(email);
      if (!isEmailValid) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      const token = await user.getJWT();
      res.cookie("token", token, { expires: new Date(Date.now() + 8 * 3600000) });
      res.json({ message: "Login successfully", data: student });
  
    } catch (err) {
      res.status(500).json({ error: "Server error. Please try again later." });
    }
  };
  

   const logout=async(req,res)=>{
    res.cookie("token",null,{expires:new Date(Date.now())});
    res.send("Logged out successfully");
 }

  module.exports={
    signup,
    login,
    logout
  }