let menu = [
  { image: 'f1.png', 
    title: 'Delicious Pizza', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 20 
  },
  { image: 'f2.png', 
    title: 'Delicious Burger', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 15 
  },
  { image: 'f3.png', 
    title: 'Delicious Pizza', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 17 
  },
  { image: 'f4.png', 
    title: 'Delicious Pasta', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 18 
  },
  { image: 'f5.png', 
    title: 'French Fries', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 10 
  },
  { image: 'f6.png', 
    title: 'Delicious Pizza', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 15 
  },
  { image: 'f7.png', 
    title: 'Tasty Burger', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 12 
  },
  { image: 'f8.png', 
    title: 'Tasty Burger', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque', 
    price: 14 
  },
  { image: 'f9.png', 
    title: 'Delicious Pasta', 
    description: 'Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque',  
    price: 10 
  },
];


let localCart = localStorage.getItem('cart');
let cart = !localCart ? [] : JSON.parse(localCart);

function Menu() {
  let menuItems = "";
  menu.forEach((b, index) => {
    menuItems += `<div class="col-sm-6 col-lg-4">
            <div class="box">
              <div>
                <div class="img-box">
                  <img src="images/${b.image}" alt="${b.title}">
                </div>
                <div class="detail-box">
                  <h5>${b.title}</h5>
                  <p>${b.description}</p>
                  <div class="options">
                    <h6><s>N</s>${b.price}</h6>
                    <button class="addButton" onclick="addCart(${index})">Add Item</button>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
  });
  document.getElementById('menu-section').innerHTML = menuItems; 
}

function addCart(menuIndex) {
  let menuItem = menu[menuIndex];
  let cartSearch = cart.find((cartItem) => cartItem.title == menuItem.title);
  if (cartSearch == undefined) {
      cart.push({
          title: menuItem.title,
          price: menuItem.price,
          quantity: 1,
          total: menuItem.price
      });
      alert(`${menuItem.title} added to cart`);
  } else {
      cartSearch.quantity += 1;
      cartSearch.total = cartSearch.quantity * menuItem.price; // Update total based on quantity
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  cartNumber();
  sumCartTotal(); // Update the total cost display
}

function cartNumber() {
  document.getElementById('cart-count').innerHTML = cart.length;
}

function listCartItems() {
  let cartLi = '';
  if (cart.length == 0) {
      cartLi = `<li>No items in the cart yet.</li>`;
  } else {
      cart.forEach(cartItem => {
          cartLi += `<li>Item: ${cartItem.title} | Price: $${cartItem.price} | Qty: ${cartItem.quantity} | Total: $${cartItem.total}</li>`;
      });
  }

  document.getElementById('cart-list').innerHTML = cartLi;
}

function sumCartTotal() {
   let totalCost = 0;
   cart.forEach(cartItem => {
       totalCost += cartItem.total;
   });
   document.getElementById('total-amount').innerHTML = `Total: $${totalCost}`;
}

Menu();
cartNumber();
listCartItems();
sumCartTotal();
