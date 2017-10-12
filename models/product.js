//Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Schema database
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: Number,
});

//Return models
module.exports = restful.model('Products', productSchema);