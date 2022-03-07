const multer = require("multer")
// configure multer 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.mimetype == "image/jpg" || "image/png")
      cb(null, 'public/uploads/images')
    if (file.mimetype == "application/pdf")
      cb(null, 'public/uploads/pdf')
  },
  filename: function (req, file, cb) {
    // console.log("jhhhjh");
    cb(null, file.fieldname + '-' + Date.now() + "." + file.mimetype.split('/')[1])
  }
})

module.exports = multer({ storage: storage });
// remove
// Model.exists()s
/**
    multer filter
    ,{multerFilter:multerFilter}
    const multerFilter=(req,file,cb)=>{
      if(file.mimetype.split('/')[1]==='pdf'){
        cb(null,true)
      }else{
        cb(new Error('Not a PDF file'))
      }
      }
    };
    const upload=multer({
      storage:multerStorage,
      fileFilter:multerFilters
    })
    
    */