const Product = require('../models/product.model');

exports.product_create = (req, res, next) => {
    let product = new Product({
        author: req.body.author,
        item: req.body.item
    });

    product.save(err => {
        if (err) return next(err);

        // 201 always for created
        res.status(201).send({
            message: 'Product Created successfully',
            data: product
        });
    })
};

exports.products_search = (req, res) => {
    Product.find({"item.title": new RegExp(req.query.q) }, 'author item', (err, products) => {
        if (err) return next(err);

        const categories = products.reduce((list, product)=> {
            let productCategories = product.item.categories;
            if (productCategories) {
                productCategories.forEach(item => {
                    if (!list.includes(item)) {
                        list.push(item);
                    }
                });
            }
            return list;
        }, []);

        res.status(200).send({
            data: {
                products,
                categories
            }
        });
    });
}

exports.product_details = (req, res, next) => {
    Product.findById(req.params.id, (err, product) => {
        if (err) return next(err);

        res.status(200).send({
            data: product
        });
    })
};
