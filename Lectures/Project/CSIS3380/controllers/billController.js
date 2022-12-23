import Bill from "../models/billModel.js";

//for add
export const addBillController = async (req, res) => {
  try {
    const newBill = new Bill(req.body);
    await newBill.save();
    res.status(200).send("Bill Created Successfully!");
  } catch (error) {
    console.log(error);
  }
};

export const getBillsController = async (req, res) => {
  try {
    const bills = await Bill.find();
    res.send(bills);
  } catch (error) {
    console.log(error);
  }
};
