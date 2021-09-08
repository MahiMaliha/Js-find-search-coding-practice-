//Find Any Product:

const products = [
        {
                name: 'Asus Mobile',
                price: 1000
        },
        {
                name: 'Redmi Mobile',
                price: 1000
        },
        {
                name: 'Dell Laptop',
                price: 1000
        },
        {
                name: 'Hp Laptop',
                price: 1000
        },
        {
                name: 'Asus Laptop',
                price: 1000
        },
        {
                name: 'Redmi Mobile',
                price: 1000
        },
        {
                name: 'Xaomi Mobile',
                price: 1000
        },
        {
                name: 'Samsung Mobile',
                price: 1000
        },
        {
                name: 'Oppo Mobile',
                price: 1000
        },
        {
                name: 'Vivo Mobile',
                price: 1000
        },
]

function searchProduct(products, searchItem) {
        let matchProduct = [];

        for (const product of products) {
                const name = product.name.toLowerCase();
                if (name.indexOf(searchItem.toLowerCase()) != -1) {
                        matchProduct.push(product);
                }
        }
        return matchProduct;
}
console.log(searchProduct(products, 'mobile'));