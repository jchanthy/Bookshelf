import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  lastLoggedIn: { type: Date, default: Date.now },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre("save", function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = bcrypt.hashSync(this.password, 10);
  next();
});


userSchema.method.checkPassword = async function (password){
  try{
    const match = await bcrypt.compare(password,  this.password);
    if (match) {
      return  Promise.resolve();
    }
    return  Promise.resolve();
  } catch(error) {
    return  Promise.reject(error);
}
};

userSchema.method.updateLoggedIn  = function() {
  return this.model("User").fineOneAndUpdated(
    {
      email :  this.email,
    },
    {
      lastLoggedIn : new Date(),
  
    },
  );
};
 

const User = model("User", userSchema);

export default User;
