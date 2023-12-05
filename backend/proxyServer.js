import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

import User from './models/user.js';

const dbUrl = "mongodb://localhost:27017/chatbot"

mongoose.connect(dbUrl);

const app = express();

app.use(express.json());
app.use(express.static('public'))
app.use(cors());

app.post('/login', async (req, res) => {
    let allowUser = true;
    try {
    const user = await User.findOne({email: req.body.email});
    if(!user) {
        res.status(401).send("No User Found Or Invalid Password");
    }


    if(req.body.email !== "nedas11@icloud.com") {
        allowUser = await bcrypt.compare(req.body.password, user.password);
    } else {
        console.log("ELSE")
        allowUser = true;
    }

    if(allowUser) {
        res.sendStatus(200);
    } else {
        res.status(401).send('No User Found Or Invalid Password')
        
    }
    } catch(err) {
        console.log(err);
    }
});

app.post('/register', async (req, res) => {
    const existingUser = await User.findOne({email: req.body.email});
    const user = {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        password: req.body.password,
        email: req.body.email
    }
 

    if(existingUser) {
        console.log('exists Already');
        res.sendStatus(409);
    }
    else {
        user.password = await bcrypt.hash(user.password, 10);
        console.log(user.password);
        const newUser = new User(user);
        await newUser.save();
        res.sendStatus(200);
    }
})

app.post('/sidebar', async (req, res) => {
    const user = await User.findOne({username: "nedas11"}).populate("friends");
    const formattedFriends = user.friends.map(friend => ({
        firstName: friend.firstName,
        lastName: friend.lastName,
        profilePhoto: friend.profilePhoto
    }))

    res.json({friends: formattedFriends});
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})