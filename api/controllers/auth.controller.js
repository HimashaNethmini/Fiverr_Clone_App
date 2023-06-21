import User from "../models/user.model.js";



//async - as we gonna fetch data frm db
export const register = async (req,res)=>{

    try{
        const newUser = new User ({
            username:"test",
            email:"test",
            password:"test",
            country:"test",
        })
//sending new user to db
        await newUser.save()
        res.status(201).send("User has been created")
        
    }catch (err){
        res.status(500).send ("Something went wrong!")
    }
}

export const login = async (req,res)=>{}

export const logout = async (req,res)=>{}