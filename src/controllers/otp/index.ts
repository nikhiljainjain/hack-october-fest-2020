import { Request, Response } from "express";
import validator from "validator";

import { CrudController } from "../crud-controller";
import { hereIsError, jwtGenerateToken, createOTPAgain, otpGeneration, 
    insertRedis, verifyOTPNumber, cookieUidGenerator, 
     setCookieAndHeaderSend } from "../../services";
import OTP from "../../database/model/otp";
import { ONE_DAY_TIME_IN_MSEC, validRes } from "../../config";
import Admin from "../../database/model/admin";

export class AdminLoginController extends CrudController {
    public async list(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        throw new Error("Method not implemented.");
    }

    /**
     * @description => this method will check existence of 
     * requested mobile no in database is exist or not
     * 
     * @param req 
     * @param res 
     */
    public async create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            const { email } = req.body;

            //checkiing valid format of number entered by user
            if (!validator.isEmail(email)) throw "INVALID EMAIL";

            let adminData = await Admin.findOne({email});

            //checking if the any data exist or not with this name
            if (!adminData) throw "INVALID EMAIL";

            //generationg the otp number
            let otpData:any = new OTP({
                number: otpGeneration()
            });

            //generating the jwt token
            const payload = {
                cookie: cookieUidGenerator(),
                ipAddress: req.ip
            };

            adminData.set({ cookie: payload.cookie });

            //saving otp in redis 
            insertRedis(payload.cookie, otpData, ONE_DAY_TIME_IN_MSEC);

            //call email sending service to send the otp 
            //email
            //const emailStatus:any = 
            //await sendOTPEmail(email, otpData.number);

            //add if condition to check if the email send or not

            //signing the jwt token
            const jwtToken =  jwtGenerateToken(payload, ONE_DAY_TIME_IN_MSEC);
            res.locals = validRes;
            
            //later this otpData is changed with "DONE"
            res.locals.data = "OTP SENT";

            return setCookieAndHeaderSend(jwtToken, res, res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    /**
     * @description => resend otp
     * 
     * @param req 
     * @param res 
     */
    public async read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            let otpData:any = res.locals;

            //checking if otp data exist or not
            if (otpData && !otpData.number) throw "RESTART THE PROCESS";
            otpData = await createOTPAgain(otpData);
            
            if (!otpData) throw "TRY AGAIN AFTER 24HOURS";
            insertRedis(res.locals.cookie, otpData, ONE_DAY_TIME_IN_MSEC);

            //send otp to email
            //await sendOTPEmail(res.locals.email, otpData.number);

            res.locals = validRes;
            res.locals.data = "OTP RESENT";
            return res.json(res.locals);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    /**
     * @description => otp confirmation system
     * 
     * @param req 
     * @param res 
     */
    public async update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            let otpData = res.locals;

            let verifyOTP = verifyOTPNumber(otpData, req.body.otpNumber);

            //checking if the otp is valid or not
            if (!verifyOTP){
                otpData.attempts++;
                insertRedis(res.locals.cookie, otpData, ONE_DAY_TIME_IN_MSEC); 
                throw "INVALID OTP";
            }else if (typeof(verifyOTP) == "string") throw verifyOTP;

            //sending the list of the audio list
            return res.json(validRes);
            //setCookieAndHeaderSend()
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    }

    /**
     * @description => logout the user from the system
     * 
     * @param req 
     * @param res 
     */
    public async delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response) {
        try{
            //loggin out user from server side
            await Admin.updateOne({ _id: res.locals._id },{ $set: {cookie:null} });
            return setCookieAndHeaderSend("", res, validRes);
        }catch(error){
            hereIsError(error, req.originalUrl, res);
        }
    } 
}
