const Router = require('express').Router();
const userService = require('../services/userService')


// GET
Router.get('/:id', async (req, res) => {
    let id = req.params.id;
    try {
        let user = await userService.findById(id);
        if(!user) res.status(400).send({error: 'User not found'});
        res.status(200).json({user});
    } catch (e) {
        res.status(e.status).send({ error: e.message});
    }
})

// POST
Router.post('/', async (req, res) => {
    let user = req.body;
    try {
        let createdUser = await userService.createUser(user);
        res.status(201).json(createdUser);
    } catch (e) {
        res.status(e.status).send({error: e.message});
    }

})

Router.post('/login', async (req, res) => {
    let credential = req.body;
    try {
        let userToLogin = await userService.login(credential);
        res.status(201).json(userToLogin);
    } catch (e) {
        res.status(e.status).send({ error: e.message});
    }

})

// PUT
Router.put('/:id', async (req, res) => {
    let id = req.params.id;
    let data = req.body;
    let user = await userService.updateUser(id,data);
    res.status(200).json(user);
})

// DELETE
Router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await userService.deleteUser(id);
    res.status(200).json({id});
})

module.exports = Router;
