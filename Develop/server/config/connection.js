const mongoose = require("mongoose");
require('dotenv').config();


mongoose.connect(
  process.env.MONGODB_URI ||
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.xlfikhl.mongodb.net/greenthumbhub`
);

module.exports = mongoose.connection;
