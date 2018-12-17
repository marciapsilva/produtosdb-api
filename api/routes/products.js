const express = require('express');
const router = express.Router();
const multer = require('multer');

const ProductsController = require('../controllers/products');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
})
const upload = multer({storage: storage});

router.get('/', ProductsController.products_get_all);

router.post('/', upload.array('productImages', 4), ProductsController.products_create_product);

router.get('/:productId', ProductsController.products_get_single_product);

router.patch('/:productId', ProductsController.products_update_product);

router.delete('/:productId', ProductsController.products_delete_product);

module.exports = router;