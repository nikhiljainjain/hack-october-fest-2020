import express, { Request, Response } from "express";
import { adminController } from "../../controllers";

export const router = express.Router({
    strict: true
});

router.post('/create', (req: Request, res: Response)=>{
    adminController.create(req, res);
});

router.get('/profile', (req: Request, res: Response)=>{
    adminController.read(req, res);
});

router.patch('/update', (req: Request, res: Response)=>{
    adminController.update(req, res);
});

router.delete('/remove', (req: Request, res: Response)=>{
    adminController.delete(req, res);
});
