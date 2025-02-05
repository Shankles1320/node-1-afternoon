const products = require('../products.json')



const getProducts = (req, res, ) => {
    if (req.query.price){
        const items = products.filter(val => val.price >= parseInt(req.query.price));
        return res.status(200).send(items);
    }
   
    res.status(200).send(products)
};

const getProduct = (req, res) => {
    const item = products.find(val => val.id === parseInt(req.params.id));
if (!item){
    return res.status(500).send("item not in list");
}
res.status(200).send(item);
}
module.exports = {
    getProducts, getProduct
}