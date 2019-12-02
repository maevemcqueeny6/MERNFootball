var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var TeamSchema = new Schema({
    team: string
})

var Team = mongoose.model("Team", TeamSchema);

module.exports = Team;