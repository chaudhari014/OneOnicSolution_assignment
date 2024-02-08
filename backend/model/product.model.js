// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img:{
    type:String,
    default:"https://5.imimg.com/data5/SELLER/Default/2023/9/343246830/OL/JL/KZ/73731263/mobile.png"
  },
  category: {
    type: String,
    required: true
  },
  price:Number
 
});

module.exports = mongoose.model('Product', productSchema);
