import { Request, Response } from "express";

import { CrudController } from "../crud-controller";
import { validRes } from "../../config";
import { hereIsError, setCookieAndHeaderSend } from "../../services";
import Admin from "../../database/model/admin";

export class AdminController extends CrudController {
    public async list(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        throw new Error("Method not implemented.");
    }
    
    public async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            res.locals = validRes;
            res.locals.data = "DONE";
            return res.json(res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            const dataToRemove = [ "cookie", "token", "ipAddress" ];
            let adminData = res.locals;
        
            //remove data before sending
            dataToRemove.forEach((key:string)=> adminData[`${key}`] = undefined);    
            adminData._id = null;

            res.locals = validRes;
            res.locals.data = adminData;
            return res.json(res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            res.locals = validRes;
            res.locals.data = "DONE";
            return res.json(res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            await Admin.findByIdAndDelete(res.locals._id);
            res.locals = validRes;
            res.locals.data = "DONE";
            return setCookieAndHeaderSend("", res, res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    } 
}
