

//@Desc Create the user Profile
//@Method POST method
export const signUp=async(req,res)=>{
    try{
        console.log("sign up ");
        res.status(200).json({status:true, message:"SignUp successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({status:false, message:"SignUp Failed"});
    }
}

//@Desc Sign In the user Profile
//@Method GET method
export const signIn=async(req,res)=>{
    try{
        console.log("sign in ");
        res.status(200).json({status:true, message:"SignIn successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({status:false, message:"SigIn Failed"});
    }
}


//@Desc Update the user Profile
//@Method PUT method
export const updateProfile=async(req,res)=>{
    try{
        console.log("updateProfile ");
        res.status(200).json({status:true, message:"Update successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({status:false, message:"updateProfile Failed"});
    }
}

//@Desc Delete the user Profile
//@Method DELETE method
export const deleteProfile=async(req,res)=>{
    try{
        console.log("deleteProfile");
        res.status(200).json({status:true, message:"Delete successfully"});
    }catch(error){
        console.log(error);
        res.status(404).json({status:false, message:"deleteProfile Failed"});
    }
}