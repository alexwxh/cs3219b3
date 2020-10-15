// fruitModel.js
var mongoose = require('mongoose');
// Setup schema
var fruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    taste: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Fruit model
var Fruit = module.exports = mongoose.model('fruit', fruitSchema);
module.exports.get = function (callback, limit) {
    Fruit.find(callback).limit(limit);
}
