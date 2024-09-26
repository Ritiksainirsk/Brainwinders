const multer = require('multer');
const path = require('path');

// Use memory storage to store the file in memory as a buffer
const storage = multer.memoryStorage(); // No need for destination here

const upload = multer({
  storage: storage, // using memory storage
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: function (req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: Images Only!');
  },
});

module.exports = upload;
