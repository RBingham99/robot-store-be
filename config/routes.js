const productsController = require('../controllers/productsController');

const routes = (app) => {
    app.get('/products', productsController.getAllProducts);
    app.get('/products/:id', productsController.getProductById);
}

module.exports = routes;