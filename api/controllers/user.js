import User from '../models/User.js';


// updateUser
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,    
      { $set: req.body },  /* $set operator is used to update the document */
      { new: true }   /*this option returns the updated document instead of the original document */
    );
    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
}

// deleteUser
export const deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'User has been deleted' });
  } catch (err) {
    next(err);
  }
}

// getUser
export const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
}   
// getAllUsers
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
}