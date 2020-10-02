// Schema for details about the user
import * as mongoose from "mongoose";
import { schemaName, userLang, userGender, genderList, languageList, saluationObj, saluationArr } from "../../config";
import { setTitleString } from "../../services";

let userSchema = new mongoose.Schema({
    //saluation for the user
    saluation: {
        type: String,
        default: saluationObj.man,
        uppercase: true,
        trim: true,
        enum: saluationArr
    },
    //first name of the user
    firstName: {
        type: String,
        trim: true,
        default: null,
        //set: setTitleString
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
        enum: genderList
        //index: true
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
        //index: true
    },
    //code used for invite a friend
    inviteFriendUid: {
        type: String,
        default: null,
        unique: true,
        required: true,
        trim: true
    },
    //language preferred by user either hi or en
    lang: {
        type: String,
        default: userLang.english,
        trim: true,
        uppercase: true,
        //select: false,
        enum: languageList
        //index: true
    },
    //ip address used to register
    ipAddress: {
        type: String,
        default: "127.0.0.1",
        trim: true,
        lowercase: true,
        select: false
    },
    //location based on ip 
    ipLocation: {
        type: String,
        default: null,
        trim: true,
        select: false
    },
    //device token use for sending notification from
    //server side
    deviceToken: {
        type: String,
        default: null,
        trim: true,
        select: false
    },
    //device type used like ANDROID or iOS
    deviceType: {
        type: String,
        default: null,
        trim: true,
        select:false
    }
},
//time when user was registered to our platform
{
    timestamps: true,
});

userSchema.path("firstName").set((val:string)=>setTitleString(val));
userSchema.path("lastName").set((val:string)=>setTitleString(val));

const User = mongoose.model(schemaName.users, userSchema);
export default User;
