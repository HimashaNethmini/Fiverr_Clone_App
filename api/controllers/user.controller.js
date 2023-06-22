import User from "../models/user.model.js";
import createError from "../utils/createError.js";

//the account can be deleted by the user only. verify using jwt
export const deleteUser = async (req, res, next) => {
    const user = await User.findById(req.params.id); // find the user in the db
  
    if (req.userId !== user._id.toString()) {
      return next(createError(403, "You can delete only your account!"));
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted.");
  };
  export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id);
  
    res.status(200).send(user);
  };