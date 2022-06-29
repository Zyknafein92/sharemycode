const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40,
    },
    pages: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Page"}]
})

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;
