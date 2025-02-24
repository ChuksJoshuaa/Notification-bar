import CustomApiError from "../errors/custom-error.js";
import StatusCodes from "http-status-codes";

const errorHandlerMiddleware = (err, res) => {
  if (err instanceof CustomApiError) {
    return res.status(err.status).json({ message: err.message });
  }
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ message: err.message });
};

export default errorHandlerMiddleware;
