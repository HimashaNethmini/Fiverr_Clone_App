import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt  from "jsonwebtoken";

//hashing pw using hashSync and giving a salt value(5)
export const register = async (req, res, next) => {
    try {
      const hash = bcrypt.hashSync(req.body.password, 5);
      const newUser = new User({
        ...req.body,
        password: hash,
      });
  
      await newUser.save(); //creating new user
      res.status(201).send("User has been created.");
    } catch (err) {
      next(err);
    }
  };
  export const login = async (req, res, next) => {
    try {
      const user = await User.findOne({ username: req.body.username });
  
      if (!user) return next(createError(404, "User not found!")); //if pw is wrong, response this
  
      const isCorrect = bcrypt.compareSync(req.body.password, user.password);
      if (!isCorrect)
        return next(createError(400, "Wrong password or username!"));
   
        //jwt configuration
        
      const token = jwt.sign(
        {
          id: user._id,
          isSeller: user.isSeller,
        },
        process.env.JWT_KEY
      );
  
      const { password, ...info } = user._doc;
      res
        .cookie("accessToken", token, {
          httpOnly: true,
        })
        .status(200)
        .send(info);
    } catch (err) {
      next(err);
    }
  };
  
  export const logout = async (req, res) => {
    res
      .clearCookie("accessToken", {
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User has been logged out.");
  };

     
       