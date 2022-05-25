module.exports.productsController = {
    getProducts: (req, res) => {
        res.json('/products выполнено')
    },
    getProductsId: (req, res) => {
        res.json('/products/:id выполнено')
    },
    postProducts: (req, res) => {
        res.json('/products добавлено')
    },
    deleteProductsId: (req, res) => {
        res.json('/products/:id удалено')
    },

};