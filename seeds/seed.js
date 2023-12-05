import mongoose from 'mongoose';
import User from "../backend/models/user.js";
import { firstnames, lastnames } from "./fullNames.js";
import { usernames } from "./usernames.js";
import { emails } from "./emails.js";

const dbUrl = 'mongodb://localhost:27017/chatbot'

await mongoose.connect(dbUrl);

const db = mongoose.connection;

const seedDB = async () => {

    if (mongoose.connection.readyState !== 1) {
        throw new Error('MongoDB connection not established!!');
    }
    await User.deleteMany({});
    const randomUsers = [];
    for (let i = 0; i < 15; i++) {
        const randomFirst = Math.floor(Math.random() * 11)
        const randomLast = Math.floor(Math.random() * 11)
        const firstName = firstnames[randomFirst];
        const lastName = lastnames[randomLast];
        const username = usernames[i];
        const email = emails[i];
        const password = "password123";
        // Create a new User instance
        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
        });
    // Save the user to the database
        await newUser.save();
        randomUsers.push(newUser);
    }
    const newUser = new User({
        firstName: "Nedas",
        lastName: "Kibildis",
        username: 'nedas11',
        email: "nedas11@icloud.com",
        password: "Saden123!",
        friends: randomUsers,
    });
    
    await newUser.save();

}   


seedDB();
