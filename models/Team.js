var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    teams: Array
})

var Team = mongoose.model("Team", TeamSchema);

module.exports = Team;