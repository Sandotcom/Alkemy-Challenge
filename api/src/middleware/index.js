import jwt from 'jsonwebtoken';

const middleware = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    let decodedData = jwt.verify(token, process.env.JWT);

    req.userId = decodedData?.id

    next()
  } catch (error) {
    console.log(error)
  }
}

export default middleware;