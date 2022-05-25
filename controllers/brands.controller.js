module.exports.brandsController = {
    getBrands: (req, res) => {
        res.json('/brands выполнено')
    },
    postBrands: (req, res) => {
        res.json('/brands добавлено')
    },
    deleteBrands: (req, res) => {
        res.json('/brands удалено')
    },

};