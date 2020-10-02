//external packages using in this package
import express from 'express';
import morgan from "morgan";
import * as Sentry from "@sentry/node";
import { config as dotenvConfig } from "dotenv";
import helmet from "helmet";
import rateLimit  from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";
import expressSession from "express-session";
import connectMongo from "connect-mongo";
import cookieParser from "cookie-parser";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import expressFileUpload from "express-fileupload";
import path from "path";

dotenvConfig();
//module made by developers for this package
import { connectToMongo } from "./database/connect";
import redisClientConnect from "./database/redis";
import {  API_VERSION, PRODUCTION_ENV, invalidRes, 
	mongo_store,rateLimitOptions, 
	expressSessionOptions, 
	fileUploadConfig
} from './config';
import { adminLoginRouter, adminRouter, clearDBRouter, 
	usersRouter, } from './routes';

connectToMongo();
redisClientConnect;
const app = express();
const MongoStore = connectMongo(expressSession);

//defining log method
const logMethod =  PRODUCTION_ENV ? 'combined' : 'dev';
const requestLimit = rateLimit(rateLimitOptions);

app.use(morgan(logMethod));
app.use(express.json({ limit: '20kb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(expressFileUpload(fileUploadConfig));
app.use(expressSession({ 
	...expressSessionOptions,
	store: new MongoStore(mongo_store)	
}))

//calling fucntion only in production mode
if (PRODUCTION_ENV){
	Sentry.init({ dsn: process.env.SENTRY_DSN });
	app.disable("etag");
	app.use(Sentry.Handlers.requestHandler());
	app.use(helmet());
	app.use(requestLimit);
	app.use(mongoSanitize());
}

app.use(`/${API_VERSION}/static`, express.static(path.join(__dirname, '../public')));


app.use(`/${API_VERSION}/otp`, adminLoginRouter);
app.use(`/${API_VERSION}/unknown`, adminRouter);
app.use(`/${API_VERSION}/clear`, clearDBRouter);
app.use(`/${API_VERSION}/users`, usersRouter);

// catch 404 and forward to error handler
app.use((req, res)=>{
	res.locals = invalidRes;
	res.locals.data = "NOT FOUND";
	return res.status(404).json(res.locals);
});

export default app;
