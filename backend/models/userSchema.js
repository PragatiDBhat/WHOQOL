const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

//userschema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  maritalstatus: {
    type: String,
    required: true,
    enum: ["single", "married", "divorced", "widowed"],
  },
  workingnonworking: {
    type: String,
    required: true,
    enum: ["working", "nonworking"],
  },
  tokens: [{
    token: {
        type: String,
        required: true,
    },
}],
});
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = bcryptjs.hashSync(this.password, 10);
  }
  next();
});

//Generate tokens to verify user
userSchema.methods.generateToken = async function () {
    try {
        let generatedToken = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: generatedToken }); // Use 'token' instead of 'toekn'
        await this.save();
        return generatedToken;
    } catch (error) {
        console.log(error);
    }
};

  
//create model
const Users = new mongoose.model("USER", userSchema);
module.exports = Users;
