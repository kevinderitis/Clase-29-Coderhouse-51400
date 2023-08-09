import mongoose from 'mongoose';

const orderCollection = 'orders';

const orderSchema = new mongoose.Schema({
    number: Number,
    business: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'business'
    },
    user: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users'
    },
    products: [],
    totalPrice: Number
})

export const orderModel = mongoose.model(orderCollection, orderSchema)