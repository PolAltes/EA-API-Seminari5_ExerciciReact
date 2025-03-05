import mongoose from "mongoose";
import { ObjectId } from "mongodb";


const subjectSchema = new mongoose.Schema({
    name :{type: String,required : true},
    teacher: {type: Number,required : true},
    alumni:  [{ type: ObjectId, ref: 'Artist' }]
});

export interface ISubject{
    name : string;
    teacher : number;
    alumni : ObjectId[];

}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
