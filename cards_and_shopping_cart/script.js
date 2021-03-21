let productsArr = [];

let product = {
    image: null,
    price: null,
    description: null,
    id: null
}

function getInfo() {
    product.image = document.getElementById("image").value;
    product.price = document.getElementById("price").value;
    product.description = document.getElementById("description").value;
    product.id = idCounter;
}

function render(productsArr) {
    let arr = productsArr;
    for (let i = 0; i < arr.length; i++) {
        str = ' <div class="item_body" data-id=" ' + i + ' ">\n' +
            '            <img id="img" src="' + arr[i].image + '" alt="#">\n' +
            '            <div class="description">' + arr[i].description + '</div>\n' +
            '            <div class="price">' + arr[i].price + '</div>\n' +
            '            <input type="button" value="В коризну" data-id=" ' + i + ' " onclick="addToCart(this)">' +
            '       </div>'
        document.getElementById('all_products').innerHTML += str;
    }
}

let idCounter = 0;

function pushIt() {
    getInfo();
    idCounter++;
    productsArr.push(product);
    document.getElementById('all_products').innerHTML = '';
    render(productsArr);
    product = {
        image: null,
        price: null,
        description: null,
        id: null,
    }
    sortBlock.style.display = 'block';
}

let sortBlock = document.querySelector('input[name="sortByPrice"]');
sortBlock.style.display = 'none';
let sorted = false;

function sortByPrice() {
    switch (sorted) {
        case false:
            productsArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
            sorted = true;
            document.getElementById('all_products').innerHTML = '';
            render(productsArr);
            sortBlock.value = 'Сортировать по убыванию цены';
            break;

        case true:
            productsArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
            sorted = false;
            document.getElementById('all_products').innerHTML = '';
            render(productsArr);
            sortBlock.value = 'Сортировать по возрастанию цены';
            break;
    }
}

let shoppingCart = [];

function addToCart(card) {
    let attr = parseInt(card.getAttribute('data-id').trim());
    let arr = productsArr;
    for (let i = 0; i < arr.length; i++) {
        arr[i].quantity = 1;
        if (arr[i].id === attr) {

            for (let j = 0; j < shoppingCart.length; j++) {
                if (arr[i].id === shoppingCart[j].id) {
                    shoppingCart[j].quantity++;
                    let att = document.querySelector('#shopping-cart-products input[data-id=' + '"' + shoppingCart[j].id + '"' + ']');
                    att.value = shoppingCart[j].quantity;
                    return;
                }
            }
            shoppingCart.push(arr[i]);

        }
    }
    ;
    document.getElementById('shopping-cart-products').innerHTML = '';
    shoppingCartRender(shoppingCart);
    countPrice();
}


function countPrice() {
    let shoppingCartArr = productsArr;
    let totalPrice = 0;
    for (let i = 0; i < shoppingCartArr.length; i++) {
        totalPrice += parseInt(shoppingCartArr[i].price);
    }
    document.getElementById('cart-total').innerHTML = totalPrice.toString();
}


function shoppingCartRender(ShoppingCart) {
    let arr = ShoppingCart;
    for (let i = 0; i < arr.length; i++) {
        str = '<div class="product">' +
            '<div class="product-image"> <img src="' + arr[i].image + '"> </div> ' +
            '<div class="product-details">' + '<p class="product-description">' + arr[i].description + '</p></div>' +
            '<div class="product-price">' + arr[i].price + '</div>' +
            '<div class="product-quantity">' +
            '<input type="number" value="' + arr[i].quantity + '" min="1" data-id="'+ arr[i].id +'"></div>' +
            '<div class="product-removal">' + '<button class="remove-product">' + 'Удалить' + '</button>' + '</div>' +
            '<div class="product-line-price">' + arr[i].price + '</div></div>'
        document.getElementById('shopping-cart-products').innerHTML += str;

    }
}





