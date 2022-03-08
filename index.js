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
  res.render("index", {eror:false});
});

app.get("/show", (req, res) => {
  res.render("show");
});

app.post("/edite", (req, res) => {
  console.log(req);
  console.log("hellow world");
  res.end();
});

app.post("/index", upload.fields([{ name: 'img', maxCount: 1 }, { name: 'cv', maxCount: 8 }]), async (req, res) => {
  console.log(req.file);
  let data = {
    full_name: req.body.fname,
    user_name: req.body.fname,
    email: req.body.fname,
    img: req.files['img'][0].filename,
    cv: req.files['cv'][0].filename
  }

  user = new UserModel(data);
  // await user.save();
  // res.redirect("/show");

  await user.save(function (err) {
    if (err) {
      res.render("index", {eror:true});
    }
    else
    res.redirect("show")
  });
});

app.listen(PORT);