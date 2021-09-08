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

function searchItem(items, searchItem) {
        let searchProduct = [];
        for (const item of items) {
                const name = item.name.toLowerCase();
                if (name.indexOf(searchItem.toLowerCase()) != -1) {
                        searchProduct.push(item.name);
                }
        }
        if (searchProduct.length === 0) {
                searchProduct = "Sorry Can't Find Product";
        }
        return searchProduct;

}
console.log(searchItem(products, 'mobl'));