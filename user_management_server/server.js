import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors';
import connectDb from "./config/db.js";
import bodyParser from "body-parser";
import UserRouter from "./routes/UserRoutes.js";
import { handleError, notFound } from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());
app.use(cors());


dotenv.config();

//connection to MONGODB database
connectDb();

//bodyParser
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

//Routes
app.use("/api/user", UserRouter)

//Error handling routes
app.use(notFound);
app.use(handleError);


//Connection To server
const port = process.env.PORT || 6000; //Alternate port
app.listen(port, () => {
    console.log(
        `Server is connected and  mode at http://localhost:${port}`.yellow.bold
    );
});