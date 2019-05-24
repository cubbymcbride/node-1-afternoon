const products = require('../products.json')

const getProductById = (req, res) => {
    const product = products.find(val => val.id === parseInt(req.params.id));
     if (!product) return res.status(500).send('Item not in list')
     res.send (product)
 }

 module.exports = getProductById