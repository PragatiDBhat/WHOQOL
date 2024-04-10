// Importing dependencies
const express = require("express");
const dotenv = require("dotenv");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();

// configuration ENV
dotenv.config({ path: "./config.env" });
require("./db/conn");
const port = process.env.PORT;

// require model
const User = require("./models/userSchema");

// this method is used to get data and cookies from frontend
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hello world");
});

// registration
app.post("/register", async (req, res) => {
  try {
    const {
      username,
      age,
      password,
      gender,
      workingnonworking,
      maritalstatus,
    } = req.body;

    // Hash the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    const createUser = new User({
      username,
      password: hashedPassword,
      age,
      gender,
      maritalstatus,
      workingnonworking,
    });

    // Save the user
    const createdUser = await createUser.save();
    console.log(createdUser);
    res.status(200).send("Registered");
  } catch (error) {
    res.status(400).send(error);
  }
});

// login
app.post("/login", async (req, res) => {
  try {
    const username = req.body.username.trim();
    const password = req.body.password.trim();

    // Find user
    const user = await User.findOne({username:username});
    if (user) {
        res.status(200).send('LoggedIn');
        /*console.log(username);
        console.log(password);
        const isMatch=await bcryptjs.compare(password,user.password);
        console.log(isMatch);*/
    } else {
        res.status(400).send('User not found');
    }
    
    /*console.log('Retrieved User:', user);
    if (user) {
      // Log the retrieved user details for debugging
      console.log("Retrieved User:", user);

      // Compare passwords
      const isMatch = bcryptjs.compareSync(password, user.password);
      console.log(isMatch);
      if (isMatch) {
        // Generate token
        const token = await user.generateToken();

        res.status(200).send({ message: "LoggedIn" });
      } else {
        // Log the received and hashed passwords for debugging
        console.log("Received Password:", user.password);
        console.log("Hashed Password:", user.password);

        res.status(400).send("Invalid Credentials");
      }
    } else {
      res.status(400).send("User not found");
    }*/
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

//logout
app.get('/logout',(req,res)=>{
  res.status(200).send("User Logged Out Successfully")
})

//authentication


// Run server
app.listen(port, () => {
  console.log("Server is listening");
});

