const addToCartForms = document.querySelectorAll('form[action="/cart/add"]');

// add to cart
addToCartForms.forEach((form) => {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const button = form.querySelector("button[type=submit]");

    button.disabled = true;

    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "/cart/add");
      xhr.onload = function () {
        if (xhr.status === 200) {
          const cartRequest = new XMLHttpRequest();
          cartRequest.open("GET", "/cart.json");
          cartRequest.onload = function () {
            if (cartRequest.status === 200) {
              const cart = JSON.parse(cartRequest.responseText);

              document.querySelectorAll(".cart-count").forEach((el) => {
                el.textContent = cart.item_count;
              });

              const message = document.createElement("p");
              message.classList.add("added-to-cart");
              message.textContent = "Added to cart!";
              form.appendChild(message);
              button.disabled = false;
            } else {
              console.error("Failed to retrieve cart.");
            }
          };
          cartRequest.send();
        } else {
          console.error("Failed to add to cart.");
        }
      };
      xhr.send(formData);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});

// clear cart
document.querySelector('.clear-cart').addEventListener('click', function(e) {
  e.preventDefault();
  var xhr = new XMLHttpRequest();
  xhr.open('POST', '/cart/clear.js');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Cleared the cart!');
    }
  };
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send();
});

//update cart
document.querySelectorAll('.updateItem').forEach(function(e) {
  e.addEventListener('click', function() {
    console.log(this)
    var qty = this.value;
    var variant = this.dataset.id;

    var data = { updates: {} };
    data.updates[variant] = qty;

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/cart/update.js');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function() {
      if (xhr.status === 200) {
        alert('Updated the cart!');
      }
    };
    xhr.send(JSON.stringify(data));
  });
});