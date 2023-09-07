const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.nien6ix.mongodb.net/greenthumbhub');

module.exports = mongoose.connection;
