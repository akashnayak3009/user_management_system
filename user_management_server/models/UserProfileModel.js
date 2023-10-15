import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const userProfileSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        mobile: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        biography: {
            type: String,
        },
        user_image: {
            type: String,
            default:
                "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
        },
    },
    { timestamps: true }
);

//Encrypting the password
userProfileSchema.pre("save", async function (next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await  bcrypt.genSalt(10);
    this.password= await bcrypt.hash(this.password, salt);
    next();
});

userProfileSchema.methods.isPasswordMatched = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword , this.password) ;
}


const UserProfile = mongoose.model("UserProfile", userProfileSchema);

export default UserProfile;
