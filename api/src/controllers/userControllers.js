import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const id = req.userId;

    const userData = await User.findByPk(id);

    return res.status(200).send(userData)
  } catch (error) {
    console.log(error)
  }
}