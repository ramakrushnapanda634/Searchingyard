const {Schema,model}= require("mongoose");
const validator = require("validator");
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw Error("not valid email");
      }
    },
  },
  password: {
    type: String,
    required:true,
    
    
  }
});

const UserModel = new model("User", UserSchema);

module.exports = UserModel;
