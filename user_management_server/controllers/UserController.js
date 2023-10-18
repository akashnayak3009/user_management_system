import UserProfile from "../models/UserProfileModel.js";
import { generateToken } from "../config/jwtToken.js";
import {validateMongodbId} from '../config/validateMongoDbId.js'

//@Desc Create the user Profile
//@Method POST method
export const signUp = async (req, res) => {
    const email = req.body.email;

    try {

        const existingUser = await UserProfile.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: false,
                message: "User already exists",
            });
        }
        const newUser = await UserProfile.create(req.body);
        return res.status(201).json({
            status: true,
            message: "User Created Successfully",
            user: newUser,
        });
    } catch (error) {
        console.error("Error while creating user:", error);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
};

//@Desc Sign In the user Profile
//@Method POST method
export const signIn = async (req, res) => {
    const { mobile, password } = req.body;

    const user = await UserProfile.findOne({ mobile });

    if (user && (await user.isPasswordMatched(password))) {
        const token = generateToken(user?._id);

        res.status(200).json({
            status: true,
            message: "Login successfully",
            token,
            user
        });
    } else {
        res.status(401).json({
            status: false,
            message: "Invalid Credentials",
        });
    }
};

//@Desc Get all userProfile
//@Method GET METHOD
export const getAllUserProfile = async (req, res) => {
    try {
        const allUser = await UserProfile.find();
        res.status(201).json({
            status: true,
            message: "All users Fetched successfully",
            allUser,
        });
    } catch (error) {
        throw new Error(error);
    }
};

//@Desc Get userProfile
//@Method GET METHOD
export const getUserProfile = async (req, res) => {
    const { id } = req.params;
    try {
        const getProfile = await UserProfile.findById(id);
        if (getProfile) {
            return res.status(200).json({
                status: true,
                message: "User found successfully",
                getProfile,
            });
        } else {
            return res.status(404).json({
                status: false,
                message: "User not found",
            });
        }
    } catch (error) {
        console.error("Error while fetching user profile:", error);
        return res.status(500).json({
            status: false,
            message: "Internal Server Error",
        });
    }
};

//@Desc Update the user Profile
//@Method PUT method
export const updateProfile = async (req, res) => {
    const { _id } = req.user;
try {
  validateMongodbId(_id); 
  const user = await UserProfile.findByIdAndUpdate(_id, req.body, { new: true });
  if (user) {
    return res.status(200).json({
      status: true,
      message: "User data is updated",
      user,
    });
  } else {
    return res.status(404).json({
      status: false,
      message: "User not found",
    });
  }
} catch (error) {
  console.error("Error while updating user data:", error);
  return res.status(500).json({
    status: false,
    message: "Internal Server Error",
  });
}
};

//@Desc Delete the user Profile
//@Method DELETE method
export const deleteProfile = async (req, res) => {
    const { _id } = req.user;
    try {
      validateMongodbId(_id); 
      const deletedUser = await UserProfile.findByIdAndDelete(_id);
      if (deletedUser) {
        return res.status(200).json({
          status: true,
          message: "User Deleted Successfully",
        });
      } else {
        return res.status(404).json({
          status: false,
          message: "User not found",
        });
      }
    } catch (error) {
      console.error("Error while deleting user:", error);
      return res.status(500).json({
        status: false,
        message: "Internal Server Error",
      });
    }
    
};
