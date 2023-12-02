import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    email: String,
    firstName: String,
    lastName: String,
    password: String,
    friends : [
        {
        type: Schema.Types.ObjectId,
        ref: 'User'
        }
    ]
})

const User = mongoose.model('User', UserSchema);
export default User;