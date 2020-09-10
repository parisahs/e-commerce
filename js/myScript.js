const products = [
    {
        id: 1,
        title: 'T-Shirt',
        price: 98,
        quantity: 10
    },
    {
        id: 2,
        title: 'Shoes',
        price: 70,
        quantity: 17
    },
    {
        id: 3,
        title: 'nude women Bag',
        price: 43,
        quantity: 19
    },
    {
        id: 4,
        title: 'Perfume',
        price: 120,
        quantity: 10
    },
    {
        id: 5,
        title: 'Bag',
        price: 230,
        quantity: 5
    },
    {
        id: 6,
        title: 'blue women bag',
        price: 120,
        quantity: 12
    }
]

let addBtn = document.querySelectorAll('.cart-btn')
let showCounter = document.querySelector('.counter')
let cartItems = []
let parsIntPrice
let totalPrice = 0
let counter = 0

const shoppingCart = (myId) => {

    localStorage.setItem('myProduct', JSON.stringify(products))
    const getStorage = localStorage.getItem('myProduct')
    const finalProducts = JSON.parse(getStorage)
    // SHOW EACH ITEM SELECTED
    let selectedResult = finalProducts.filter(item => item.id === myId)
    for (let product in selectedResult) {
        console.log(selectedResult[product].title)
        counter++
        showCounter.innerHTML = counter
        // SHOW SELECTED PRODUCTS IN ARRAY
        // cartItems = JSON.stringify([...selectedResult])     // to myself

        // SHOW SELECTED PRODUCTS TITLE IN ARRAY
        cartItems.push(JSON.stringify(`Product Title: ${[selectedResult[product].title]} - Price: ${[selectedResult[product].price]}`))
        console.log(cartItems)

        // CALCULATE TOTAL PRICES
        parsIntPrice = selectedResult[product].price
        totalPrice += parsIntPrice
        // totalPrice = cartItems.reduce((firstItem, secondItem) => firstItem + secondItem.parsIntPrice, 0)
        console.log(`Total Price is: ${totalPrice}`)

    }


}


for (let i = 0; i < products.length; i++) {
    addBtn[i].addEventListener('click', () => {
        shoppingCart(i + 1)
    })
}

