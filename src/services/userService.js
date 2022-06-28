const UserModel = require('../models/user');

// GET
const findById = async (id) => {
    return await UserModel.findOne({_id: id}).populate("project");
}

// POST
const createUser = async (user) => {
    console.log('user: ', user);
    return await UserModel.create(user);
}

// UPADATE
const updateUser = async (id, user) => {
    console.log('id', id);
    console.log('user', user);
    return await UserModel.findOneAndUpdate(id,user);
}

// DELETE
const deleteUser = async (id) => {
    console.log('id: ', id);
    return await UserModel.remove(id);
}

module.exports = {
    findById,
    createUser,
    updateUser,
    deleteUser,
}
