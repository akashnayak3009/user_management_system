import express from 'express';
import { deleteProfile, signIn, signUp, updateProfile } from '../controllers/UserController.js';

const UserRouter =express.Router();


UserRouter.post("/create", signUp);
UserRouter.get("/fetch", signIn);
UserRouter.put("/updateProfile", updateProfile);
UserRouter.delete("/deleteProfile", deleteProfile);

export default UserRouter;