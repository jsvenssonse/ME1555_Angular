'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let userSchema = new Schema({
    user: {
        id: {
            type: String,
            required: true,
            unique: true
        },
        _token: {
            type: String,
            required: true
        }
    },
    display_name: {
        type: String,
        required: true,

    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

var User = mongoose.model('User', userSchema);

module.exports = {
    User: User
}
