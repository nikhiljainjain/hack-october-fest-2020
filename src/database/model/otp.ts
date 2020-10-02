// Schema for details about the user
import * as mongoose from "mongoose";
import { schemaName } from "../../config";

let otpSchema = new mongoose.Schema({    
    //random number generated for otp verification
    number:{
        type: String,
        default: null,
        trim: true,
        required: true
    },
    //number of attempst done by user to confirm otp number
    attempts:{
        type: Number,
        default: 0
    },
    //time at which user try to verify the account or email
    lastAttempt: {
        type: Date,
        default: Date.now()
    }
},
{
    timestamps:true
});

const OTP = mongoose.model(schemaName.usersOTP, otpSchema);
export default OTP;
