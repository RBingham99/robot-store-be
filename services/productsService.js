const productsRepository = require('../repositories/productsRepository');

const getAllProducts = async () => {
    console.log('Service: getAllProducts');
    return await productsRepository.getAllProducts();
}

const getProductById = async (id) => {
    console.log('Service: getProductById');
    if (typeof id != "number") {
        id = parseInt(id);
    }
    let product = await productsRepository.getProductById(id);
    if (product.length === 0) {
        product[0] = "Invalid product id";
    }
    return product;
}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;
