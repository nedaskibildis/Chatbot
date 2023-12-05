import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: String,
    username: String,
    firstName: String,
    lastName: String,
    password: String,
    profilePhoto: {type: String, default: 'default_profile.jpg'},
    friends: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
})

const User = mongoose.model('User', UserSchema);
export default User;