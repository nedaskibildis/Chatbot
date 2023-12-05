import mongoose from "mongoose";
const Schema = mongoose.Schema;

const FriendSchema = new Schema ({
    firstName: String,
    lastName: String,
})

const Friend = mongoose.model('Friend', FriendSchema);
export default Friend;