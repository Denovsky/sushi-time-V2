import express from 'express';
import userController from './controllers/userController.js';
import productController from './controllers/productController.js';
import categoryController from './controllers/categoryController.js';

const router = express.Router();

router.get('/users', userController.getUsers);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

router.get('/products', productController.getProducts);
router.get('/products-categories', productController.getProductsCategories);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

router.get('/categories', categoryController.getCategories);
router.get('/categories/:category', categoryController.getCategoryID);
router.post('/categories', categoryController.createCategory);
router.put('/categories/:id', categoryController.updateCategory);
router.delete('/categories/:id', categoryController.deleteCategory);

export default router;