import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import rateLimiter from "express-rate-limit";
import helmet from "helmet";
import { configDB, connectDB } from "./db/connect.js";

dotenv.config();

// Error imports
import notFound from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();
const PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json({ limit: "30mb" }));
app.use(cors());
app.use(helmet());

// Set Extra packages
app.set("trust proxy", 1);
app.use(
  rateLimiter({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: "Too many requests, please try again later.",
  })
);

const startServer = async () => {
  try {
    configDB();
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

app.get("/", (_, res) => {
  res.send("Api working perfectly!");
});

// Errors
app.use(errorHandlerMiddleware);
app.use(notFound);

startServer();
