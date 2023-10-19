import express from 'express';
import { deleteProfile, findPhone, getAllUserProfile, getUserProfile, signIn, signUp, updateProfile } from '../controllers/UserController.js';
import {authMiddleware} from '../middleware/authMiddleware.js'

const UserRouter =express.Router();


UserRouter.post("/create", signUp);
UserRouter.post("/login",signIn);
UserRouter.post("/forgot", findPhone);

UserRouter.get("/fetchAllProfile", authMiddleware,getAllUserProfile);
UserRouter.get("/fetchProfile/:id",authMiddleware,getUserProfile);

UserRouter.put("/updateProfile",authMiddleware, updateProfile);
UserRouter.delete("/deleteProfile/:id",authMiddleware, deleteProfile);

export default UserRouter;