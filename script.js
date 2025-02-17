// Отримуємо кошик з localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функція для оновлення відображення кошика
function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    let totalAmount = 0;

    // Додаємо кожен товар з кошика
    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <h4>${item.name}</h4>
            <p>Ціна: ${item.price} грн</p>
            <button class="remove-item" onclick="removeFromCart('${item.name}')">Видалити</button>
        `;
        cartItemsDiv.appendChild(productDiv);
        totalAmount += item.price;
    });

    // Оновлюємо загальну суму
    document.getElementById('total-amount').textContent = `${totalAmount} грн`;
}

// Функція для видалення товару з кошика
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    localStorage.setItem('cart', JSON.stringify(cart)); // Оновлюємо кошик в localStorage
    updateCart();
}

// Оформлення замовлення
document.getElementById('checkout-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Ваш кошик порожній! Додайте товари перед оформленням замовлення.');
    } else {
        alert('Ваше замовлення оформлено! Дякуємо за покупку.');
        // Очищаємо кошик після оформлення
        localStorage.removeItem('cart');
        cart = [];
        updateCart();
    }
});

// Оновлюємо кошик при завантаженні сторінки
updateCart();


let cart = JSON.parse(localStorage.getItem('cart')) || [];

    
function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem('cart', JSON.stringify(cart)); 
  alert(`${productName} додано до кошика!`);
}


function searchProducts() {
  const searchInput = document.getElementById("search-input").value.toLowerCase();
  const products = document.querySelectorAll(".product-card");
  products.forEach(product => {
    const productName = product.querySelector("h4").textContent.toLowerCase();
    if (productName.includes(searchInput)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}