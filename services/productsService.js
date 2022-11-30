const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    console.log('Service: getAllProducts');
    return await productsRepository.getAllProducts();
}

const getProductById = async (id) => {
    console.log('Service: getProductById');
    id = parseInt(id);
    return await productsRepository.getProductById(id);
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;
