import express, { Request, Response } from "express";
import { clearDBController } from "../../controllers";

export const router = express.Router({
    strict: true
});

router.get('/redis', (req: Request, res: Response)=>{
    clearDBController.clearRedis(req, res);
});

router.get('/users', (req: Request, res: Response)=>{
    clearDBController.clearUserData(req, res);
});

router.get('/lists', (req: Request, res: Response)=>{
    clearDBController.clearListAndAudio(req, res);
});

router.get('/logs', (req: Request, res: Response)=>{
    clearDBController.clearEverything(req, res);
});

router.get('/logs', (req: Request, res: Response)=>{
    clearDBController.clearLogs(req, res);
});
