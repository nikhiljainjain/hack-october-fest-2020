import express, { Request, Response } from "express";
import { adminLoginController } from "../../controllers";
import { cookieValid } from "../../services";

export const router = express.Router({
    strict: true
});

router.post('/send', (req: Request, res: Response)=>{
    adminLoginController.create(req, res);
});

router.get('/resend', cookieValid, (req: Request, res: Response)=>{
    adminLoginController.read(req, res);
});

router.patch('/confirm', cookieValid, (req: Request, res: Response)=>{
    adminLoginController.update(req, res);
});

router.delete('/confirm', cookieValid, (req: Request, res: Response)=>{
    adminLoginController.delete(req, res);
});
