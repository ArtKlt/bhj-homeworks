document.addEventListener('DOMContentLoaded', function () {
    const products = document.querySelectorAll('.product');
    const cartProducts = document.querySelector('.cart__products');

    products.forEach(product => {
        const quantityControls = product.querySelector('.product__quantity-controls');
        const quantityValue = product.querySelector('.product__quantity-value');
        const addButton = product.querySelector('.product__add');

        quantityControls.addEventListener('click', function (event) {
            if (event.target.classList.contains('product__quantity-control')) {
                const isIncrement = event.target.classList.contains('product__quantity-control_inc');
                updateQuantity(isIncrement);
            }
        });

        addButton.addEventListener('click', function () {
            addToCart();
        });

        function updateQuantity(isIncrement) {
            let quantity = parseInt(quantityValue.textContent);

            if (isIncrement) {
                quantity++;
            } else {
                quantity = Math.max(quantity - 1, 1);
            }

            quantityValue.textContent = quantity;
        }

        function addToCart() {
            const productId = product.dataset.id;
            const productImageSrc = product.querySelector('.product__image').src;
            const productCount = parseInt(quantityValue.textContent);

            const existingCartItem = findCartItem(productId);

            if (existingCartItem) {
                const existingCount = parseInt(existingCartItem.querySelector('.cart__product-count').textContent);
                existingCartItem.querySelector('.cart__product-count').textContent = existingCount + productCount;
            } else {
                const cartProduct = createCartProduct(productId, productImageSrc, productCount);
                cartProducts.appendChild(cartProduct);
            }
        }

        function findCartItem(productId) {
            return cartProducts.querySelector(`.cart__product[data-id="${productId}"]`);
        }

        function createCartProduct(productId, productImageSrc, productCount) {
            const cartProduct = document.createElement('div');
            cartProduct.classList.add('cart__product');
            cartProduct.dataset.id = productId;

            const cartProductImage = document.createElement('img');
            cartProductImage.classList.add('cart__product-image');
            cartProductImage.src = productImageSrc;

            const cartProductCount = document.createElement('div');
            cartProductCount.classList.add('cart__product-count');
            cartProductCount.textContent = productCount;

            cartProduct.appendChild(cartProductImage);
            cartProduct.appendChild(cartProductCount);

            return cartProduct;
        }
    });
});