// Schema for details about the user
import * as mongoose from "mongoose";
import { MONTH_TIME_IN_MSEC, schemaName } from "../../config";

let adminLogSchema = new mongoose.Schema({
    adminID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: schemaName.admin,
        default: null,
        select: false
    },
    //original ip adress from which user have logged in
    registerIPAddress:{
        type: String,
        default: null,
        lowercase: true,
        trim: true
    },
    //changed ip address received from the user
    newIPAddress:{
        type: String,
        default: null,
        lowercase: true,
        trim: true
    },
    //new location based on new ip address
    newLocation: {
        type: String,
        default: null,
        trim: true
    },
    //url request from the user
    originalURL:{
        type: String,
        default: null,
        trim: true
    },
    //data will delete after 6 month
    createdAt: {
        type: Date,
        default: Date.now(),
        expires: (MONTH_TIME_IN_MSEC*6)
    }
},
//time when user was registered to our platform
{
    timestamps: true,
});

const AdminLog = mongoose.model(schemaName.adminLog, adminLogSchema);
export default AdminLog;
