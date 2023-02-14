const express = require('express')
const router  = express.Router()

const { 
    getFood,
    getFruits,
    getVegetables,
    getElectronics,
    getProducts,
    setProduct,  
    updateProduct,
    deleteProduct,
} = require('../controllers/productsController')

router.route('/food').get(getFood)
router.route('/fruits').get(getFruits)
router.route('/vegetables').get(getVegetables)
router.route('/electronics').get(getElectronics)
router.route('/').get(getProducts).post(setProduct)
router.route('/:id').put(updateProduct).delete(deleteProduct)

module.exports = router