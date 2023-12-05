const mongoose = require('mongoose');

const MessageSchema = new mongoose.Schema({
    sender: {
        type: String, 
        required: true
    },
    recipient: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    timeStamp: {
        type: Date,
        default: Date.now
    }
})

const Message = mongoose.model('Message', MessageSchema);

export default Message;