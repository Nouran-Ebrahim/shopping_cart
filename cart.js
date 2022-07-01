var addToCartButtons = document.getElementsByClassName('add')
for (var i = 0; i < addToCartButtons.length; i++) {
    var button = addToCartButtons[i]
    button.addEventListener('click', addToCartClicked)
}
var totalCost = document.getElementsByClassName('total-cost')
for (var i = 0; i < totalCost.length; i++) {
    var buttonClicked = totalCost[i]
    buttonClicked.addEventListener('click', updateCartTotal)
}
function removeCartItem(el) {
    el.parentNode.parentNode.remove()
    updateCartTotal()
}
function quantityChanged(input) {
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
}
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('card-title')[0].innerText
    var price = shopItem.getElementsByClassName('price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('card-img-top')[0].src
    addItemToCart(title, price, imageSrc)
    //updateCartTotal()
}
function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    cartRow.innerHTML = `
    <div class="cart-item cart-column">
        <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
        <span class="cart-item-title">${title}</span>
        <span class="cart-price cart-column">${price}</span>
     </div>
    <div class="cart-quantity cart-column">
        <input onchange="quantityChanged(this)" class="cart-quantity-input" type="number" value="1">
        <button  class="btn btn-primary remove" onclick="removeCartItem(this)">Remove</button>
        </div>
    `

    cartItems.append(cartRow)

}

function updateCartTotal() {
    var quantity=document.getElementsByClassName('cart-quantity-input')
    var price = document.getElementsByClassName('price')
    var total=0
    for (var i = 0; i < quantity.length && i<price.length; i++) {
        var buttonClicked = quantity[i].value
        var p=price[i].innerHTML
        var product =buttonClicked*p
        console.log('quantity',buttonClicked)
        console.log('price',p)
        console.log('product',product)
        total =product+total
        console.log('total',total)
    }
    var totalCost=document.getElementById('tot')
    totalCost.innerHTML=' EG '+total
}   