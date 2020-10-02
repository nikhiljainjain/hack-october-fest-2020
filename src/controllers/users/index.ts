import { Request, Response } from "express";
import { validRes } from "../../config";
import { hereIsError } from "../../services";
import { CrudController } from "../crud-controller";

export class UsersController extends CrudController {
    public async list(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    public async delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response){
        try{
            return res.json(validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }
}
