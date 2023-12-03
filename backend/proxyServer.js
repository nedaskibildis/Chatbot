import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';

import User from './models/user.js';

const dbUrl = "mongodb://localhost:27017/chatbot"

mongoose.connect(dbUrl);

const app = express();

app.use(express.json());
app.use(cors());

app.post('/login', (req, res) => {
    console.log(req.body);
    res.sendStatus(200);
});

app.post('/register', async (req, res) => {
    console.log('HELLO');
    const {firstname, lastname, password, email} = req.body;
    const existingUser = await User.findOne({email});
    const user = new User({
        firstName: firstname,
        lastName: lastname,
        password: password,
        email: email
    })
 

    if(existingUser) {
        console.log('exists Already');
        res.sendStatus(409);
    }
    else {
        await user.save();
        res.sendStatus(200);
    }
})

app.listen(3000, () => {
    console.log("Serving on port 3000");
})