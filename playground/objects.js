// object property shorthand
const hisName = 'Andrew'
const userAge = 37


const user = {
    hisName,
    userAge,
    location: 'CDMX'
}

// object destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 241,
    salePrice: undefined
}

// const label = product.label
// or

const { label:productLabel, price, stock, salePrice, rating = 5 } = product
console.log(productLabel, price, stock, salePrice, rating) 

const transaction = function(type, { label, stock }){ //we can destructure the expected arg
    console.log(`${type}: The product is ${label} and we have ${stock} left`)
}

transaction('order', product)