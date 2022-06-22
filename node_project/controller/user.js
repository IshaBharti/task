const User = require("../models/user");
const bcrypt = require("bcrypt");

const signup = async (req, res) => {
  try {
    const pass = await bcrypt.hash(req.body.password, 10);

    const data = {
      name: req.body.name,
      email: req.body.email,
      number: req.body.number,

      password: pass,
    };
    console.log(data);
    const result = await User.findOne({ email: data.email });
    if (result) {
      return res
        .status(400)
        .send({ status: 400, message: "Email already exist!", data: data });
    }
    const addData = await new User(data);
    addData.save();
    return res
      .status(200)
      .send({ status: 200, message: "sign up has suceesfully " });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};
const getdata = async (req, res) => {
  try {
    const perPage = 3;
    const page = parseInt(req.query.page );
    console.log(page)

    const data = await User.find({}).skip(perPage * page).limit(perPage)

    return res
      .status(200)
      .send({ status: 200, message: "data get succesful", data });
  } catch (err) {
    return res.status(500).send({
      status: 500,
      message: "Something went wrong, please try again later!",
      error: err.message,
    });
  }
};
const updatedata = async (req, res) => {
  const data = req.body;

  const id = req.params.id;
  try {
    const idData = await User.findOne({ _id: id });
    console.log(idData);
    if (!idData) {
      res.status(409).send({ status: 200, message: "dfhadL" });
    }
  } catch (err) {
    res.status(200).send({ status: 200, message: "User not found" });
  }

  try {
    const result = await User.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        email: req.body.email,
        number: req.body.number,
      }
    );

    console.log(result, "hello");
    res.send({ status: 200, message: "Succesfully Update Doc" });
  } catch (err) {
    console.log(err.message);
  }
};
const deletedata = async (req, res) => {
  try {
    const result = await User.deleteOne({ id: req.params.id });
    console.log(result);

    res.send({ status: 200, message: "Deleted successfully" });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { signup, getdata, updatedata, deletedata };
