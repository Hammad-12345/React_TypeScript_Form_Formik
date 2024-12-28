const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const profileschema = require("./Schema/profile");
// Initialize Express app
const app = express();

// Load environment variables from .env file
dotenv.config();

// connect with database
const connectiondb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected With MongoDb Mern Stack");
  } catch (error) {
    console.log(error);
  }
};
connectiondb();

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello guys");
});

// insert data in database (Api)
app.post("/Add_data", async (req, res) => {
  const { firstname, lastname, fathername, cnicno, mobileno, gender } =
    req.body;
  try {
    const insert_data = await new profileschema({
      firstname,
      lastname,
      fathername,
      cnicno,
      mobileno,
      gender,
    }).save();
    console.log(insert_data);
    if (insert_data) {
      res.send({ message: `Successfully Submit Form`, status: 200 });
    }
  } catch (error) {
    console.log(error);
    if (error.code === 11000) {
      if (Object.keys(error.keyValue)[0] === "cnicno") {
        res.send({ message: `Cnic Already Register`, status: 409 });
      } else {
        res.send({ message: `Mobile Already Register`, status: 409 });
      }
    }
  }
});

// get data from database (Api)
app.get("/Get_data", async (req, res) => {
  try {
    const data = await profileschema.find().sort({ createdAt: -1 });
    console.log(data);
    console.log(data.length);
    if (data.length > 0) {
      res.send({ message: "success", data, status: 200 });
    } else {
      res.send({ message: "No Data Found", status: 204 });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

// delete data from database
app.delete("/Delete_data/:ID", async (req, res) => {
  const ID = req.params.ID;
  console.log(ID);
  try {
    const delete_data = await profileschema.deleteOne({ _id: ID });
    console.log(delete_data);
    if (delete_data.deletedCount === 1) {
      res.send({ message: "Delete Data Successfully", status: 200 });
    } else {
      res.send({ message: "Document not found.", status: 404 });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

// update data from database
app.put("/Update_Data", async (req, res) => {
  const {
    firstname,
    lastname,
    fathername,
    cnicno,
    mobileno,
    password,
    gender,
  } = req.body.value;
  const { id } = req.body;
  try {
    const update = await profileschema.updateOne(
      { _id: id },
      {
        $set: {
          firstname,
          lastname,
          fathername,
          cnicno,
          mobileno,
          gender,
        },
      }
    );
    console.log(update);
    if (update.modifiedCount === 1) {
      res.send({ message: "Successfully Update Data", status: 200 });
    } else {
      res.send({ message: "Error Updating Data", status: 404 });
    }
  } catch (error) {
    res.send({ message: error });
  }
});

module.exports = app;
