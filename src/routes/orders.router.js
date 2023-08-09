import { Router } from 'express';
import { 
    getOrders, 
    getOrderById, 
    createOrder, 
    resolveOrder
 } from '../controllers/orders.controller.js';

const orderRouter = Router();

orderRouter.get('/', getOrders);
orderRouter.get('/:oid', getOrderById);
orderRouter.post('/', createOrder);
orderRouter.put('/:oid', resolveOrder);

export default orderRouter;