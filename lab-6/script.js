// Fixed Unit Price
const unitPrice = 1000;

// Get elements
const quantity = document.getElementById("quantity");
const totalPrice = document.getElementById("totalPrice");

// Event listener for real-time calculation
quantity.addEventListener("input", function(){

    let qty = parseInt(quantity.value);

    // Validation (Prevent negative values)
    if(qty < 0 || isNaN(qty)){
        alert("Quantity cannot be negative");
        qty = 0;
        quantity.value = 0;
    }

    // Calculate total price
    let total = unitPrice * qty;

    // Display total price
    totalPrice.value = total;

    // Gift coupon alert
    if(total > 1000){
        alert("Congratulations! You are eligible for a Gift Coupon.");
    }

});