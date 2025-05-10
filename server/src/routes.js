import express from 'express';
import userController from './controllers/userController.js';
import productController from './controllers/productController.js';
import categoryController from './controllers/categoryController.js';
import userOrdersController from './controllers/userOrdersController.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/products', productController.getProducts);
router.get('/products-categories', productController.getProductsCategories);
router.get('/best-products', productController.getPopularProduct);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

router.get('/categories', categoryController.getCategories);
router.get('/categories/:category', categoryController.getCategoryID);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

router.get('/orders', userOrdersController.getOrders);                      // admin: get all orders with status
router.post('/orders/:order_id', userOrdersController.changeOrderStatus);   // admin: change order status: 0: started, 1: accepted, 2: procced, 3: deliver, 4: ended, 5: canceled
router.get('/orders/:user_id', userOrdersController.getOrderByUserId);      // user: get order/orders of user
router.post('/orders', userOrdersController.createOrder);                   // user: create new order, need verification for the first time order

export default router;  