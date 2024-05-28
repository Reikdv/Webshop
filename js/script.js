// Toggle cart visibility
document.addEventListener('DOMContentLoaded', () => {
    const cartIcon = document.querySelector('.cart a:last-child');
    const cartItems = [];
    
    cartIcon.addEventListener('click', () => {
        alert(`Cart Items: ${cartItems.join(', ')}`);
    });

    // Add functionality to 'SHOP NU' button
    const shopNowButton = document.querySelector('.hero-content button');
    shopNowButton.addEventListener('click', () => {
        window.location.href = '#';
    });

    // Simulate adding items to the cart
    const productImages = document.querySelectorAll('.product-images img');
    productImages.forEach((img, index) => {
        img.addEventListener('click', () => {
            const itemName = `Item ${index + 1}`;
            cartItems.push(itemName);
            alert(`${itemName} added to cart!`);
        });
    });
});
