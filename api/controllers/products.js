const Product = require('../models/product');
const mongoose = require('mongoose');

exports.products_get_all = (req, res, next) => {
  Product.find()
    .exec()
    .then(docs => {
      res.status(200).json({
        method: 'GET',
        status: 200,
        products: [...docs]
      });
    })
    .catch(err => {
      res.status(500).json({
        method: 'GET',
        status: 500,  
        error: err
      });
    })
};

exports.products_create_product = (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    item: req.body.item,
    productLine: req.body.productLine,
    productImages: {},
    originalPrice: req.body.originalPrice,
    newestPrice: req.body.newestPrice,
    category: req.body.category,
    keywords: req.body.keywords
  });

  for (let i = 0; i < 4; i++) {
    let teste = req.files[i].path;
    product.productImages[`img${i}`] = teste.replace(/\\/g,"/");
  }

  product.save().then(result => {
    res.status(201).json({
      message: 'Created product successfully',
      method: 'POST',
      status: 201,
      createdProduct: result
    });
  })
  .catch(err => {
    res.status(500).json({
      method: 'GET',
      status: 500,
      error: err
    });
  });
};

exports.products_get_single_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findById(id)
    .exec()
    .then(doc => {
      if(doc) {
        res.status(200).json({
          message: 'Product found',
          method: 'GET',
          status: 200,
          product: doc
        });
      } else {
        res.status(404).json({message: 'No valid entry found for provided ID'});
      }
    })
    .catch(err => {
      res.status(500).json({error: err});
    })
};

exports.products_update_product = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};

  for(const key in req.body) {
    updateOps[key] = req.body[key];
  }
  
  Product.findOneAndUpdate({ _id: id }, { $set: updateOps })
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Product updated successfully!',
        method: 'PATCH',
        status: 200,
        originalProduct: result
      });
    })
    .catch(err => {
      res.status(500).json({
        method: 'PATCH',
        status: 500,
        error: err
      });
    })
};

exports.products_delete_product = (req, res, next) => {
  const id = req.params.productId;
  Product.findByIdAndRemove({_id: id})
    .exec()
    .then(result => {
      res.status(200).json({
        message: 'Product deleted successfully!',
        method: 'DELETE',
        status: 200,
        productDeleted: result
      });
    })
    .catch(err => {
      res.status(500).json({
        method: 'DELETE',
        status: 500,
        error: err
      });
    });
};