import { Request, Response } from "express";

import { hereIsError, findIPData } from "../index";
import AdminLog from "../../database/model/admin-log";
import UserLog from "../../database/model/users-log";

/**
 * @description => saving the ip address & location 
 * of new ip address of user
 * 
 * @param req 
 * @param res 
 */
export const saveUserChangedIP = async (req:Request, res: Response) =>{
    try{
        const { ipAddress, _id } = res.locals;
        const { ip, originalUrl } = req;

        const newLocation = await findIPData(ip);
        
        const userLogData = new UserLog({
            userID: _id,
            registerIPAddress: ipAddress,
            newIPAddress: ip,
            newLocation,
            originalUrl
        });

        await userLogData.save();
    }catch(error){
        hereIsError(error, req.originalUrl, res);
    }
}

/**
 * @description => saving the ip address & location 
 * of new ip address of user
 * 
 * @param req 
 * @param res 
 */
export const saveAdminChangedIP = async (req:Request, res: Response) =>{
    try{
        const { ipAddress, _id } = res.locals;
        const { ip, originalUrl } = req;

        const newLocation = await findIPData(ip);
        
        const adminLogData = new AdminLog({
            adminID: _id,
            registerIPAddress: ipAddress,
            newIPAddress: ip,
            newLocation,
            originalUrl
        });

        await adminLogData.save();
    }catch(error){
        hereIsError(error, req.originalUrl, res);
    }
}
