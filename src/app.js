const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

app.use(express.json());
//signup api
app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    const userData = await user.save();

    res.send(userData);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//get the user by email
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

//get all the users
app.get("/feed", async (req, res) => {
  try {
    const userData = await User.find({})
      .select("firstName lastName emailId age gender -_id")
      .lean();
    if (userData.length == 0) {
      res.status(404).send("No users registered");
    } else {
      res.send(userData);
    }
  } catch (err) {
    res
      .status(400)
      .send({ error: "something went wrong", details: err.message });
  }
});

app.delete("/user", async (req, res) => {
  const userId = req.body.userid;
  try {
    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).send("User does not exist");
    }

    res.send("User deleted");
  } catch (err) {
    res
      .status(400)
      .send({ error: "Something went wrong", details: err.message });
  }
});

//connection
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
