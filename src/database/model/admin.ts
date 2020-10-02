// Schema for details about the user
import * as mongoose from "mongoose";
import { userGender, schemaName, genderList } from "../../config";
import { setTitleString } from "../../services";

let adminSchema = new mongoose.Schema({
    //first name of the user
    firstName: {
        type: String,
        trim: true,
        //set: setTitleString,
        default: null
    },
    //last name of the user
    lastName: {
        type: String,
        trim: true,
        default: null,
        //set: setTitleString
    },
    //it should be either M or F or O
    gender: {
        type: String,
        trim: true,
        default: userGender.female,
        uppercase: true,
        enum: genderList,
        required: true
    },
    // registered mobile no. of user
    mobileNo: {
        type: Number,
        default: 0,
        unique: true,
        required: true
    },
    //checks whether profile is active or not
    activeStatus: {
        type: Boolean,
        default: true,
        select: false,
    },
    //email address of admin
    email: {
        type: String,
        default: null,
        required: true,
        lowercase: true,
        unique: true
    },
    //cookie for user stay login
    cookie: {
        type: String,
        default: null,
        trim: true,
        select: false
    }
},
//time when user was registered to our platform
{
    timestamps: true,
});

adminSchema.path("firstName").set((val:string)=>setTitleString(val));
adminSchema.path("lastName").set((val:string)=>setTitleString(val));

const Admin = mongoose.model(schemaName.admin, adminSchema);
export default Admin;
