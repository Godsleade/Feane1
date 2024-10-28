let localCart = localStorage.getItem('cart');
let cart = !localCart ? [] : JSON.parse(localCart);
console.log(cart);

let addUp = '';
let empty = 0;
cart.forEach((cartItem, index) => {
    addUp += `<li class="cart-item">
        <span class="item-name">${cartItem.title}</span>
        <span class="item-price">$${cartItem.price}</span>
        <span class="item-quantity">Quantity: ${cartItem.quantity}</span>
        <span class="item-total">Total: $${cartItem.price * cartItem.quantity}</span>
        <button class="delete-btn" data-index="${index}">Remove item</button>
    </li>`;
    empty += cartItem.price * cartItem.quantity;
});

let cartList = document.getElementById("cartList");
cartList.innerHTML = addUp;

let TotalAmount = document.getElementById("totalAmount");
TotalAmount.innerHTML = `The total price of all your goods is $${empty}`;

function renderCart() {
    let updatedCartHTML = '';
    let updatedTotal = 0;

    cart.forEach((cartItem, index) => {
        updatedCartHTML += `<li class="cart-item">
            <span class="item-name">${cartItem.title}</span>
            <span class="item-price">$${cartItem.price}</span>
            <span class="item-quantity">Quantity: ${cartItem.quantity}</span>
            <span class="item-total">Total: $${cartItem.price * cartItem.quantity}</span>
            <button class="delete-btn" data-index="${index}">Remove item</button>
        </li>`;
        updatedTotal += cartItem.price * cartItem.quantity;
    });

   
    cartList.innerHTML = updatedCartHTML;
    TotalAmount.innerHTML = `The total price of all your goods is $${updatedTotal}`;

 
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const indexToDelete = this.getAttribute('data-index');
            cart.splice(indexToDelete, 1); cart
            localStorage.setItem('cart', JSON.stringify(cart)); 

            renderCart(); 
        });
    });
}


renderCart();

