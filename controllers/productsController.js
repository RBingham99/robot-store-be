const productsService = require('../services/productsService');

const getAllProducts = (req, res) => {
    console.log('Products controller: getAllProducts');
    productsService.getAllProducts()
        .then((allProducts) => res.json(allProducts));
}

const getProductById = (req, res) => {
    console.log('Products controller: getProductById');
    let id = req.params.id;
    productsService.getProductById(id)
        .then((id) => res.json(id));
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;