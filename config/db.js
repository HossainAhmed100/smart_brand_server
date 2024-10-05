const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.9txhv.mongodb.net/smart?retryWrites=true&w=majority&appName=Cluster0`;
const connectDB = async () => {
  try {
    await mongoose.connect(uri)
    .then(() => console.log("Mongodb is Connected"))
  } catch (err) {
    // console.error(err.message);
    // process.exit(1);
  }
};

module.exports = connectDB;
