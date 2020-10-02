import express, { Request, Response } from "express";
import { usersController } from "../../controllers";

export const router = express.Router({
    strict: true
});

router.get('/all', (req: Request, res: Response)=>{
    usersController.list(req, res);
});

router.post('/add', (req: Request, res: Response)=>{
    usersController.create(req, res);
});

router.get('/find', (req: Request, res: Response)=>{
    usersController.read(req, res);
});

router.patch('/update/:inviteFriendUid', (req: Request, res: Response)=>{
    usersController.update(req, res);
});

router.delete('/delete/:inviteFriendUid', (req: Request, res: Response)=>{
    usersController.delete(req, res);
});
