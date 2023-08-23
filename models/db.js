const mongoose = require("mongoose");

module.exports.init = async function () {
  await mongoose.connect("mongodb://127.0.0.1:27017/ECommercee", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Server is connected to database");
};
