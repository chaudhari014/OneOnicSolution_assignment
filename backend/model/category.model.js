// models/Category.js
const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  parent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    default:null
  }
},{
  versionKey:false,
  timestamps:true
});

module.exports = mongoose.model('Category', categorySchema);
