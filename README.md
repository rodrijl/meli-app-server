## About this project

Here we have a server for meli-app(https://github.com/rodrijl/meli-app). 

## Required tools

- Nodejs
- npm


## Available endpoints

### Create Product
method: POST body: raw 
author: {
        name: String,
        lastname: String
    },
    item: {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number
        },
        categories: Array,
        picture: String,
        condition: String,
        free_shipping: Boolean,
        sold_quantity: Number,
        city: String,
        description: { type: String, max: 1200 }
    }
});

### Search Product
url: localhost:8080/item/:id
mehod: GET 

 item: {
        id: String,
        title: String,
        price: {
            currency: String,
            amount: Number,
            decimals: Number
        }

