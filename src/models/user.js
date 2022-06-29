const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 40,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
    },
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"}]
})


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
