import Product from "../models/productModel.js";

//for add or fetch
export const getProductController = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};

//for add
export const addProductController = async (req, res) => {
  try {
    const newProducts = new Product(req.body);
    await newProducts.save();
    res.status(200).send("Products Created Successfully!");
  } catch (error) {
    console.log(error);
  }
};
//update
export const updateProductController = async (req, res) => {
  try {
    await Product.findOneAndUpdate({ _id: req.body.productId }, req.body, {
      new: true,
    });
    res.status(200).send("Product Updated Successfully!");
  } catch (error) {
    console.log("Update Product Controller" + error);
  }
};

//delete
export const deleteProductController = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.body.productId });
    res.status(200).send("Product Deleted Successfully!");
  } catch (error) {
    console.log("Delete Product Controller" + error);
  }
};
