const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: Number,
    projects: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project"}]
})


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;
