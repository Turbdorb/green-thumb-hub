const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://dhm0010:Clyde1025$@cluster0.zikjbds.mongodb.net/techmatchup"
);

module.exports = mongoose.connection;
