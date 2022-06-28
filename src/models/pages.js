const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pageSchema = new Schema({
    code: String,
    language: String,
})

const pageModel = mongoose.model('Page', pageSchema);

module.exports = pageModel;
