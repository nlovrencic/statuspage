if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv');
    dotenv.config();
}

import mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import express from 'express';
import UsersRouter from './routers/UsersRouter';
import HealthRouter from './routers/HealthRouter';
import { ErrorMiddleware } from './middlewares/ErrorMiddleware';

const port = parseInt(process.env.APP_PORT, 10) || 3000;
const mongoUrl = process.env.MONGO_URL;

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    const app: express.Express = express();

    app.use(bodyParser.json());

    app.use('/health', HealthRouter);
    app.use('/api/v1', UsersRouter);
    app.use(ErrorMiddleware);

    app.listen(port, (err: Error) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.info(`Server running on port ${port}`);
    });
})


