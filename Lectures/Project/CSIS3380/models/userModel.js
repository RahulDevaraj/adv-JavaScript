import mongoose from "mongoose";

//table

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verified: {
      type: Boolean,
    },
  },
  {
    //date
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
