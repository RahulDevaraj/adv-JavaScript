import mongoose from "mongoose";

//table

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    //date
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
