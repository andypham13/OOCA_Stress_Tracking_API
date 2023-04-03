import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { userRouter } from './routes/user.route';
import helmet from 'helmet';
import expressFileUpload from 'express-fileupload';

// environment selection
if (process.argv[2] !== 'local') {
    console.log('Environment: ' + process.argv[2]);
    dotenv.config();
} else {
    console.log('Environment: local');
    dotenv.config({ path: '.env.local' });
}
const app = express();
const port = process.env.PORT || 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
mongoose.set('strictQuery', true);
mongoose.connect(mongoUri)
.then(() => console.log('Connected to MongoDB...'))
.catch(() => console.error('Could not connect to MongoDB...'));

app.use(helmet());
app.use(express.json());
app.use(expressFileUpload({
    limits: { fileSize: 50 * 1024 * 1024 },
    useTempFiles: true,
    tempFileDir: process.env.PUBLIC_PATH
}));

app.use(express.static('public'));
app.use(userRouter);

app.use((req: Request, res: Response) => {
    console.log('Unknown route: ' + req.originalUrl);
    res.status(404).send('Not Found');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

// Handler for unhandled rejections, and uncaught exceptions
process.on('unhandledRejection', (reason, p) => {
    console.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception thrown: ', err);
    process.exit(1);
});