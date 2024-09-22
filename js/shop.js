let basket = []; //Array to store basket items
let total = 0; //Variable to store total price is set to 0

//Function to add item to basket
function addToBasket(name, price, quantityInputId) {  //defining addToBasket function with three parameters
  let quantity = parseInt(document.getElementById(quantityInputId).value); // get the value of the element and converting into int using "pardseInt"
  let itemTotal = price * quantity; 

  basket.push({ name: name, price: price, quantity: quantity, total: itemTotal });
  total += itemTotal;
  updateBasket(); //"updateBasket" function was called
}

// Function to remove item from basket
function removeItem(index) {
  total -= basket[index].total;
  basket.splice(index, 1); //to specify that only one item from the div should be removed
  updateBasket();
}

//Function to clear all items from basket
function clearAllItems() {
  basket = [];  //Emptying the basket
  total = 0;    //Assinging the total value to 0
  updateBasket();
}

//Function to update basket display
function updateBasket() {
  let basketElement = document.getElementById("basket");
  let totalElement = document.getElementById("total"); 
  basketElement.innerHTML = ""; //Clear previous basket items

  basket.forEach((item, index) => {
    let itemElement = document.createElement("div"); //creating a div
    itemElement.classList.add("basket-item"); //naming the div class as basket-item
    itemElement.textContent = `${item.name} - Quantity: ${item.quantity} - Total: $${item.total}`;
    basketElement.appendChild(itemElement);  //putting the "itemElement" into the " basketElement"

    let removeButton = document.createElement("span");//creating a span
    removeButton.textContent = "❌";
    removeButton.classList.add("remove-item");  //naming the span class as remove-item
    removeButton.onclick = () => removeItem(index); //when it's clicked remove-item func is called
    itemElement.appendChild(removeButton);  //putting the  "removeButton" into the "itemElement"
  });

  totalElement.textContent = `Total: $${total}`;
}

function popImage(element) {
  element.querySelector('img').style.transform = "scale(1.05)";
}

function reset(element) {
  element.querySelector('img').style.transform = "scale(1.0)";
}

//To display certian html elements
function checkout() {
  if (basket.length == 0) {
    alert("Cart is empty");
  }
  else {
    document.getElementById("cart-box").style.display = "none";
    document.getElementById("box").style.display = "flex";
    document.getElementById("filter").style.display = "none"; //hiding the box from the view
    copyContent(); //copying the content from basket and total to the "Order Summery"
  }
}

//Copying the relavent content to the order summmary
function copyContent() {
  var sourceContent = document.getElementById("basket").innerHTML;  //copying the items inside the cart to the oder summery
  document.getElementById("basket1").innerHTML = sourceContent;
  var sourceContent = document.getElementById("total").innerHTML;  //copying the total of the items to the oder summery
  document.getElementById("total1").innerHTML = sourceContent;
}

//back to the shop from the checkout page
function backtoshop() {
  document.getElementById("cart-box").style.display = "flex"; //making the cart-box visible as a flex container
  document.getElementById("box").style.display = "none"; //hiding the box from the view
  document.getElementById("filter").style.display = "block";//making filter visible

}

//fliter select options
var filterSelect = document.getElementById('filterSelect');

//  A event Listener was added to the the dropdown
filterSelect.addEventListener('change', applyFilters);


function applyFilters() {
  var selectedOption = filterSelect.value;


  var products = document.querySelectorAll('.left-pane1 .product-item');
  products.forEach(function (product) {
    if (selectedOption === '' || product.classList.contains(selectedOption)) {  //when we click the "select all" option it'll show all the items
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

//to display an alert when the user clicks "place order button"
function placeorder() {
  alert("This feature is currently under construction");
}

