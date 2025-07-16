const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());

app.post("/signup", async (req, res) => {
  // console.log(req.body)
  const user = new User(req.body);
  try {
    const userData = await user.save();
    res.send(userData);
  } catch (err) {
    console.log(err);
  }
});

app.get("/user", async (req, res) => {
  const emailid = req.body.emailId;
  try {
    const user = await User.find({ emailId: emailid });
    if (user.length == 0) {
      res.status(404).send("user not found");
    } else {
      res.send(user);
    }
  } catch (err) {
    res.send("err");
  }
});

app.get("/feed", async (req, res) => {
  try {
    const userData = await User.find({});
    if (userData.length == 0) {
      res.status(404).send("No users registerd");
    } else {
      res.send(userData);
    }
  } catch (err) {
    res.status(400).send("something went wrong", err);
  }
});

connectDB()
  .then(() => {
    console.log("database connected");
    app.listen(3000, () => {
      console.log("server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
