import * as express from 'express'
import { getAllPhones, addNewPhone, deletePhoneById, getPhonesByBrand, updatePhone, getPhonesByColor, getPhonesByPrice, getQuantityByBrand, getTotalQuantity } from '../controllers/phoneControllers'

const router = express.Router();

router.get('/', getAllPhones);
router.get('/:brand', getPhonesByBrand);
router.get('/color/:color', getPhonesByColor);
router.get('/price/:price', getPhonesByPrice);
router.get('/quantity/total-number-of-products', getTotalQuantity);
router.get('/quantity/brand/:brand', getQuantityByBrand);
router.post('/', addNewPhone);
router.put('/:id', updatePhone);
router.delete('/:id', deletePhoneById);

export default router;