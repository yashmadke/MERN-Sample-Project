const express = require("express");
const dbConnection = require("./db/dbConnection");
const cors = require("cors");
const User = require("./db/user");

const port = 8000;
const app = express();
dbConnection();

app.use(express.json());

app.use(cors());

app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const newData = new User({
      username,
      password,
    });

    await newData.save();
    res.status(201).send("Accounr created....");
  } catch (error) {
    console.error(error);
    res.send("Could not create account....");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username, password });

    if (!user) {
      res.send("Invalid username and password.....");
    }

    if (user) {
      res.json({ success: true, message: "Login Successful" });
    }
  } catch (error) {
    console.error(error);
    res.status(501).send("Invalid");
  }
});

app.listen(port, () => {
  console.log("Server is running.....");
});
