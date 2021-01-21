const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("message", MessageSchema);
