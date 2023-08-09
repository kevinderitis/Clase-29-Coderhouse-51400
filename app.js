import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/routes/users.router.js';
import businessRouter from './src/routes/business.router.js';
import orderRouter from './src/routes/orders.router.js';

const app = express();

const connection = mongoose.connect('mongodb+srv://coderhouse:coder123456@coderhouse.z88zdi9.mongodb.net/codereats?retryWrites=true&w=majority')
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use('/api/users', userRouter);
app.use('/api/business', businessRouter);
app.use('/api/orders', orderRouter);

const PORT = 8080;
const server = app.listen(PORT, () => console.log(`Server running on port: ${server.address().port}`));
server.on('error', error => console.log(error));