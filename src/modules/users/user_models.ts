import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name :{
        type: String,
        required : true
    },
    password : {
        type: String,
        required : false
    },
    age: {
        type: Number,
        required : true
    },
    email: {
        type : String,
        required : true,
        unique: true
    },
    updated: {
        type: Number,
        required : true,
        default: 0,
    },
    phone: {
        type: Number,
        required : false
    },

});

export interface IUser{
    name: string;
    password?: string;
    age?: number;
    email: string;
    updated: number;
    phone?: number;

}

const User = mongoose.model('User', userSchema);
export default User;
