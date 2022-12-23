import mongoose from "mongoose";

//table

const billSchema = mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },
    customerPhone: {
      type: Number,
      required: true,
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    tax: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    cartItems: {
      type: Array,
      required: true,
    },
  },
  {
    //date
    timestamps: true,
  }
);

const Bill = mongoose.model("Bill", billSchema);
export default Bill;
