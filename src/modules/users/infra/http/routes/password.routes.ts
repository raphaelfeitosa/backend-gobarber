import { Router } from 'express';

import ForgotPasswordController from '../controllers/ForgotPasswordController';
import ResetPasswordController from '../controllers/ResetPasswordController';

const passswordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPasswordController = new ResetPasswordController();

passswordRouter.post('/forgot', forgotPasswordController.create);
passswordRouter.post('/reset', resetPasswordController.create);

export default passswordRouter;
