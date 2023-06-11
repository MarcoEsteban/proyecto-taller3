import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
/* ROUTER */
import { router } from "./routes/index.routes";

// Initilization:
const app = express();

// Setting:
app.set('PORT', process.env.PORT || 5000);

// Middleware:
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(router);

export default app