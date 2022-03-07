const express = require("express");
const UserModel = require('./DB/user')
const mongoose = require("mongoose");
const upload = require("./helper")

const DB = "mongodb://localhost/uploader"
const app = express();
const PORT = process.env.PORT || 5000; //Use PORT of Heroku or 5000
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set('views', 'public');
console.log("server strtaed");

app.use(express.static('public'));
app.get("/", (req, res) => {
  res.render("index");
});
app.post("/edite", (req, res) => {
  console.log(req);
  console.log("hellow world");
  res.end();
});

app.post("/index", upload.single("img"), upload.single("cv"), async (req, res) => {
  console.log(req.file);
  let data = {
    full_name: req.body.fname,
    user_name: req.body.fname,
    email: req.body.fname,
    img: req.file.filename,
    cv: req.file.filename
  }
  skill = new SkillModel(data);
  await skill.save();

  let user = await UserModel.find();
  // UserModel.updateOne(
  //     { _id: user[0]._id }, 
  //     { $push: { skill: skill.id } },
  // );
  await user[0].addSkill(skill._id);
  user[0].save();
  console.log(user[0])
  res.redirect("/index");
});

app.listen(PORT);