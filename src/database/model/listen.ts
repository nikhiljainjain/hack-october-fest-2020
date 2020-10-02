//here we will store %age completion of any audio by user
import * as mongoose from "mongoose";
import { schemaName } from "../../config";

let listenRecordSchema = new mongoose.Schema({
    //first name of the user
    userID: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: schemaName.users,
        default: null,
        select: false,
        //index: true
    },
    //completion of audio file
    audioRecordID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: schemaName.audio,
        default: null,
        required: true,
        select: false
        //index: true
    },
    //percentage complete by audio
    completion: {
        type: Number,
        default: 0,
        //index: true
    },
    //num of time audio listened by the user
    numOfTimesCompletion:{
        type: Number,
        default: 0,
        //index: true
    },
    //checks whether data is active or not
    activeStatus: {
        type: Boolean,
        default: true,
        select: false,
    },
},
//time when user was registered to our platform
{
    timestamps: true,
});

listenRecordSchema.index({ activeStatus: 1, userID: 1, audioRecordID: 1 }, { unique: true });

const ListendRecord = mongoose.model(schemaName.listen, listenRecordSchema);
export default ListendRecord;
