import User from '../dao/user.dao.js';

const userService = new User();

export const getUsers = async (req, res) => {
    let result = await userService.getUsers()
    if(!result) return res.status(500).send({ status: 'error', error: 'Error getting all users.'})
    res.send({ status: 'success', result })
}

export const getUserById = async (req, res) => {
    const { uid } = req.params;
    let user = await userService.getUserById(uid);
    if(!result) return res.status(500).send({ status: 'error', error: 'Error getting user by id.'})
    res.send({ status: 'success', result: user })
}

export const saveUser = async (req, res) => {
    const user = req.body;
    let result = await userService.saveUser(user);
    if(!result) return res.status(500).send({ status: 'error', error: 'Error saving user.'})
    res.send({ status: 'success', result })
}
