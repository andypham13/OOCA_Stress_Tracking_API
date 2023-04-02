import express from 'express';
import { Request, Response } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

if (process.argv[2] !== 'local') {
    dotenv.config();
} else {
    dotenv.config({ path: '.env.local' });
}
const app = express();
const port = process.env.PORT || 3000;

const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017';
mongoose.set('strictQuery', true);
mongoose.connect(mongoUri)
.then(() => console.log('Connected to MongoDB...'))
.catch(() => console.error('Could not connect to MongoDB...'));

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    console.log('connect from client', req.ip);
    res.send('Hello World!');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
