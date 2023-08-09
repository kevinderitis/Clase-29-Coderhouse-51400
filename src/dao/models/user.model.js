import mongoose from 'mongoose';

const userCollection = 'users';

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    orders: [
        {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'orders'
        }
    ]
})

export const userModel = mongoose.model(userCollection, userSchema)