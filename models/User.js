const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    teams: {
        type: Array
    }
})

module.exports = User = mongoose.model('user', UserSchema);