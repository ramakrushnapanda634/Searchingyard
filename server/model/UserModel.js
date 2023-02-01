const {Schema,model}= require("mongoose");

const UserSchema = new Schema({
    
  email: String,
  password: String,
});

const UserModel = new model("User", UserSchema);

module.exports = UserModel;
