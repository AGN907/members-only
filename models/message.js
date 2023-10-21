const mongoose = require('mongoose')
const { Schema } = mongoose

const { DateTime } = require('luxon')

const MessageSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now() },
  user: { type: mongoose.Types.ObjectId, ref: 'User' },
})


MessageSchema.virtual('dateFormatted').get(function() {
  return DateTime.fromJSDate(this.dateCreated).toLocaleString(DateTime.DATETIME_MED)
})


module.exports = mongoose.model('Message', MessageSchema)
