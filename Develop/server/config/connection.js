const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://root:root@cluster0.nien6ix.mongodb.net/techmatchup');

module.exports = mongoose.connection;
