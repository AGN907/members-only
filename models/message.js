const mongoose = require('mongoose')
const { Schema } = mongoose.Schema


const MessageSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now() },
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
})





module.exports = mongoose.model('Message', MessageSchema)
