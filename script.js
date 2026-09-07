const DELIVERY_CHARGE = 200;

// Change main product image on thumbnail click
function changeColor(imageSrc) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = imageSrc;
    }
}

// Calculate total price with delivery charges
function updateCheckoutDetails() {
    const priceElement = document.querySelector('.price');
    const qtyElement = document.getElementById('productQty');
    const modalTotal = document.getElementById('modalTotalPrice');

    if (!priceElement || !modalTotal) return;

    // Extract numbers from price text (e.g., "PKR 2,500" -> 2500)
    const unitPrice = parseInt(priceElement.innerText.replace(/[^0-9]/g, '')) || 0;
    const quantity = qtyElement ? (parseInt(qtyElement.value) || 1) : 1;
    const subtotal = unitPrice * quantity;
    const grandTotal = subtotal + DELIVERY_CHARGE;

    modalTotal.innerHTML = `PKR ${subtotal.toLocaleString()} + PKR ${DELIVERY_CHARGE} Delivery = <b>PKR ${grandTotal.toLocaleString()}</b>`;
}

// Attach event listeners when page loads
document.addEventListener('DOMContentLoaded', () => {
    const buyNowBtns = document.querySelectorAll('.buy-now');
    buyNowBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.type === 'submit') return; // Ignore form confirm button
            
            updateCheckoutDetails();
            const modal = document.get
            if (modal) modal.style.display = 'flex';
        });
    });

    const qtyElement = document.getElementById('productQty');
    if (qtyElement) {
        qtyElement.addEventListener('change', updateCheckoutDetails);
        qtyElement.addEventListener('input', updateCheckoutDetails);
    }
});

// Modal Control Functions
function openModal() {
    var modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeModal() {
    var modal = document.getElementById('checkoutModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function openContactModal() {
    var modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'flex';
    }
}

function closeContactModal() {
    var modal = document.getElementById('contactModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Background par click karne se modal band karne ke liye
window.onclick = function(event) {
    const checkoutModal = document.getElementById('checkoutModal');
    const contactModal = document.getElementById('contactModal');
    if (event.target === checkoutModal) checkoutModal.classList.remove('show');
    if (event.target === contactModal) contactModal.classList.remove('show');
};

// Order Form Submission
function submitOrder(event) {
    event.preventDefault();
    alert("Your order has been placed successfully!Cash will be collected upon delivery.");
    closeModal();
}

// Close modals when clicking outside
    window.onclick = function(event) {
    const checkoutModal = document.getElementById('checkoutModal');
    const contactModal = document.getElementById('contactModal');
    if (event.target === checkoutModal) closeModal();
    if (event.target === contactModal) closeContactModal();
};
function addToCart() {
    alert("Item added to cart successfully!");
}
function togglePaymentFields() {
    let methodSelect = document.getElementById("paymentMethod");
    if (!methodSelect) return;

    let method = methodSelect.value;
    let codNotice = document.getElementById("codNotice");
    let cardFields = document.getElementById("cardFields");
    let totalElement = document.getElementById("cartTotal");

    let baseTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    if (method === "cod") {
        let finalTotal = baseTotal + 200;
        if (totalElement) totalElement.innerText = finalTotal;
        if (codNotice) codNotice.style.display = "block";
        if (cardFields) cardFields.style.display = "none";
    } else {
        if (totalElement) totalElement.innerText = baseTotal;
        if (codNotice) codNotice.style.display = "none";
        if (cardFields) cardFields.style.display = "block";
    }
}
   
     