import { Request, Response } from "express";
import { validRes } from "../../config";
import { hereIsError } from "../../services";

export class ClearDBController {
    public async clearRedis(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async clearUserData(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async clearListAndAudio(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async clearEverything(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async clearLogs(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }
}
