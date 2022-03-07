const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    full_name: {
        type: String,
        required: true,
        unique: true,
    },
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
        unique: true,
    },
    cv: {
        type: String,
        required: true,
        unique: true,
    },
});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;