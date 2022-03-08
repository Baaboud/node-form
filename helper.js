const multer = require("multer")
// configure multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname == 'cv')
      cb(null, "public/uploads/pdfs/");
    else if (file.fieldname == 'img')
      cb(null, "public/uploads/images/");
  },
  filename: function (req, file, cb) {
    // console.log("jhhhjh");
    cb(null, file.fieldname + '-' + Date.now() + "." + file.mimetype.split('/')[1])
  }
})

module.exports = multer({ storage: storage });