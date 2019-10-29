import express, { Request, Response } from 'express';
import { celebrate } from 'celebrate';
import UsersService from '../services/UsersService';
import { loginOrRegisterUserValidator } from './validation/UserValidation';


const router: express.Router = express.Router({
  caseSensitive: true,
  strict: true,
});

router.post('/users/register', celebrate({ body: loginOrRegisterUserValidator }), async (req: Request, res: Response) => {
  await UsersService.registerUser(req.body);
  res.sendStatus(201);
});

router.post('/users/login', celebrate({ body: loginOrRegisterUserValidator }), async (req: Request, res: Response) => {
    const response = UsersService.login(req.body);
    res.send(response);
});

export default router;