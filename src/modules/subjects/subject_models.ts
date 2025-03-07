import mongoose from "mongoose";
import { ObjectId } from "mongodb";


const subjectSchema = new mongoose.Schema({
    name :{type: String,required : true},
    teacher: {type: String,required : true},
    alumni:  [{ type: ObjectId, ref: 'User' }]
});

export interface ISubject{
    name : string;
    teacher : string;
    alumni : ObjectId[];

}

const Subject = mongoose.model('Subject', subjectSchema);
export default Subject;
