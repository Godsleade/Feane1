let menu = [
  { image: 'f1.png', title: 'Delicious Pizza', price: 10},
  { image: 'f2.png', title: 'Delicious Burger', price: 12},
  { image: 'f3.png', title: 'Delicious Pizza', price: 8},
  { image: 'f4.png', title: 'Delicious Pasta', price: 2},
  { image: 'f5.png', title: 'French Fries', price: 5},
  { image: 'f6.png', title: 'Delicious Pizza', price: 5},
  { image: 'f7.png', title: 'Tasty Burger', price: 5},
  { image: 'f8.png', title: 'Tasty Burger', price: 5},
  { image: 'f9.png', title: 'Delicious Pasta', price: 5},
];
function Menu (){
  let menuItems = "";
  menu.forEach((i, index) =>{
    menuItems += `<div class="menu-item">
                <img src="assets/images/${i.image}" alt="${i.title}">
                <h3>${i.title}</h3>
                <p>$${i.price}</p>
                <button class="add-btn" onclick="addToCart(${index})">Add to Cart</button>
            </div>`
  })
}