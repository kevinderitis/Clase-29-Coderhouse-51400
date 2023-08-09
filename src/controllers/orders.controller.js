import Order from '../dao/order.dao.js';
import User from '../dao/user.dao.js';

const orderService = new Order();
const userService = new User();

export const getOrders = async (req, res) => {
    let orders = await orderService.getOrders();
    if(!orders) return res.status(500).send({ status: 'error', error: 'Error getting all orders.'})
    res.send({ status: 'success', result: orders })
}

export const getOrderById = async (req, res) => {
    const { oid } = req.params;
    let order = await orderService.getOrderById(oid);
    if(!order) return res.status(500).send({ status: 'error', error: 'Error getting order by id.'})
    res.send({ status: 'success', result: order })
}

export const createOrder = async (req, res) => {
    const { uid, bid, products } = req.body;
    let resultUser = await userService.getUserById(uid);
    let orderNumber = Date.now() + Math.floor(Math.random() * 100000+1);
    let totalPrice = products.reduce((acc, product) => {
        if(product.price && typeof product.price === 'number'){
            return acc + product.price;
        }
        return acc;
    },0);

    let order = {
        number: orderNumber,
        business: bid,
        user: uid,
        status: 'Pending',
        products,
        totalPrice
    }

    let orderResult = await orderService.createOrder(order);
    resultUser.orders.push(orderResult._id);
    await userService.updateUser(uid, resultUser)

    res.send({ status: 'success', result: orderResult })
}

export const resolveOrder = async (req, res) => {
    const { resolve } = req.query;
    let order = await orderService.getOrderById(req.params.oid);
    order.status = resolve;
    await orderService.resolveOrder(order._id, order);
    res.send({ status: 'success', result: "Order resolved" })
}
