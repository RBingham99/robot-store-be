const dbService = require('../services/dbservice');
const objectId = require('mongodb').ObjectId;

let productsCollection = null;
dbService.connectToDB()
    .then((db) => productsCollection = db.collection('products'));

const getAllProducts = async () => {
    console.log('Repository: getAllProducts');
    return await productsCollection.find({}).toArray();
}

const getProductById = async (id) => {
    console.log('Repository: getProductById');
    return await productsCollection.find({"id":id}).toArray();

}

module.exports.getAllProducts = getAllProducts;
module.exports.getProductById = getProductById;