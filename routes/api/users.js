const express = require('express');
const router = express.Router();

const User = require('../../models/User');
// const Team = require('../../models/Team')

// GET api/users
// desc get all users
router.get('/users', (req, res) => {
    User.find()
    .then(users => res.json(users));
})

// Get user team
router.get('/users/:user', (req, res) => {
    User.findOne({ })
    .then(user => res.json(user.teams));
})

// POST api/users
// c
// router.post('/', (req, res) =>{
//     const newUser = new User({
//         name: req.body.name
//     })

//     newUser.save().then(name => )
// })

// should also create an update route

module.exports = router;