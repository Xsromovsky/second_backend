import express from 'express';
import { getAllProducts, addNewProduct, deleteProductById, getProductByName, getProductByType, updateProductById } from '../controllers/productControllers';


const router = express.Router();

router.get('/all-products', getAllProducts);
router.get('/name/:name', getProductByName);
router.get('/type/:type', getProductByType);
router.post('/add', addNewProduct);
router.put('/update/:id', updateProductById);
router.delete('/delete/:id', deleteProductById);

export default router;