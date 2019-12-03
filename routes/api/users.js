const express = require('express');
const router = express.Router();

const User = require('../../models/User');
const Team = require('../../models/Team');
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
    .then(user => res.json(user));
})


// POST api/users
// @desc new user
router.post('/users', (req, res) =>{
    const newUser = new User({
        name: req.body.name,
        teams: req.body.teams
    })

    newUser.save().then(name => res.json(name))

})

// // POST api/users/:user
// router.post('/users/:name', (req, res) => {
//     User.findById( req.params.name )
//     .then((user) => {
//         const newTeam = new Team ({
//             teams: req.body.teams
//         })
//         user.params.teams.save(newTeam).then(team => res.json(team))
//     })
    // .then((user) => {
    //     const newTeam = new Team({
    //         // will probably need a spread operator here eventually
    //         teams: req.body.teams,
    //     })
    //     newTeam.save().then(team => res.json(team))

    //     User.teams.update(newTeam)
    //     // user.update(teams)
    // });

// })


module.exports = router;