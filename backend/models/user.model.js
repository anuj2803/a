import mongoose from "mongoose";
const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    followers: [{
        type: mongoose.Schema.Types.ObjectId,//ObjectIds are the default unique identifier for documents in MongoDB 
        //16-byte unique values
        ref: "User",
        default: [] //initiay 0 follwowers
    }],
    following: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [] //initialy 0 following users
    }],
    profileImage: {
        type: String,
        default: "" 
    },
    coverImage: {
        type: String,
        default: ""
    },
    bio: {
        type: String,
        default: ""
    },
    link: {
        type: String,
        default: ""
    },
},{timestamp: true});

const user = mongoose.model("User", userSchema);    
export default user;