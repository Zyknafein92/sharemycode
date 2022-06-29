const UserModel = require('../models/user');
const Bcrypt = require('bcrypt');
const salt = 10;
const errorMaker = require('../error/errorMaker')
const {ObjectId} = require("mongodb");
const mongoose = require("mongoose");


// GET
const findById = async (id) => {
    if (!mongoose.Types.ObjectId.isValid(id)) throw new errorMaker(400,'Invalid ID');
    return await UserModel.findOne({_id: ObjectId(id)});
}

const findByEmail = async (email) => {
    let userToFind = await UserModel.findOne({email: email});
    if(userToFind) {
        return userToFind;
    } else {
        throw new errorMaker(404, 'User not found');
    }
}

// POST
const createUser = async (user) => {
    user.password = Bcrypt.hashSync(user.password, salt);
    return await UserModel.create({user});
}

const login = async (credential) => {
    let userToLogin = await findByEmail(credential.email);
    if (userToLogin) {
        const isSamePassword = await Bcrypt.compare(credential.password, userToLogin.password);
        if(isSamePassword && userToLogin.email ===  credential.email) {
            console.log('We have a winner !');
        } else {
            throw new errorMaker(401,'Wrong Password or Email') ;
        }
    } else {
        throw new errorMaker(404, 'User not found');
    }
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
    login,
    createUser,
    updateUser,
    deleteUser,
}
