// =====================================
// Load Cart
// =====================================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const orderItems = document.getElementById("orderItems");
const subtotal = document.getElementById("subtotal");
const gst = document.getElementById("gst");
const grandTotal = document.getElementById("grandTotal");


// =====================================
// Display Order Summary
// =====================================

function displayOrder() {

    orderItems.innerHTML = "";

    if (cart.length === 0) {

        orderItems.innerHTML = `
            <p class="text-center text-danger">
                Your cart is empty.
            </p>
        `;

        subtotal.innerHTML = "₹0";
        gst.innerHTML = "₹0";
        grandTotal.innerHTML = "₹0";

        return;
    }

    let total = 0;

    cart.forEach(product => {

        const price = parseFloat(String(product.price).replace(/[^\d.]/g, "")) || 0;
        const quantity = Number(product.quantity) || 1;

        if (!isNaN(price)) {
            total += price * quantity;
        }

        orderItems.innerHTML += `

        <div class="order-item">

            <img src="${product.image}" alt="${product.name}">

            <div class="order-item-name">

                ${product.name}

                <br>

                <small>
                    Qty : ${quantity}
                </small>

            </div>

            <div class="order-item-price">

                ₹${price * quantity}

            </div>

        </div>

        `;

    });

    let gstAmount = Math.round(total * 0.18);

    let finalTotal = total + gstAmount;

    subtotal.innerHTML = `₹${total}`;
    gst.innerHTML = `₹${gstAmount}`;
    grandTotal.innerHTML = `₹${finalTotal}`;

}

displayOrder();


// =====================================
// Place Order
// =====================================

document
    .getElementById("placeOrderBtn")
    .addEventListener("click", function () {

        const name = document.getElementById("name").value.trim();

        const email = document.getElementById("email").value.trim();

        const phone = document.getElementById("phone").value.trim();

        const city = document.getElementById("city").value.trim();

        const address = document.getElementById("address").value.trim();

        const state = document.getElementById("state").value.trim();

        const pincode = document.getElementById("pincode").value.trim();



        if (
            name === "" ||
            email === "" ||
            phone === "" ||
            city === "" ||
            address === "" ||
            state === "" ||
            pincode === ""
        ) {

            alert("Please fill all required fields.");

            return;

        }



        if (phone.length !== 10 || isNaN(phone)) {

            alert("Please enter a valid 10-digit mobile number.");

            return;

        }



        if (pincode.length !== 6 || isNaN(pincode)) {

            alert("Please enter a valid 6-digit pincode.");

            return;

        }



        if (cart.length === 0) {

            alert("Your cart is empty.");

            return;

        }

        const payment =
            document.querySelector("input[name='payment']:checked").value;

        // UPI Validation

        if (payment === "upi") {

            let upiId =
                document.getElementById("upiId").value.trim();

            let app =
                document.getElementById("upiApp").value;

            if (app === "" || upiId === "") {

                alert("Please complete UPI details.");

                return;

            }

        }

        // Card Validation

        if (payment === "card") {

            let cardName =
                document.getElementById("cardName").value.trim();

            let cardNumber =
                document.getElementById("cardNumber").value.trim();

            let expiry =
                document.getElementById("expiry").value.trim();

            let cvv =
                document.getElementById("cvv").value.trim();

            if (
                cardName === "" ||
                cardNumber.length !== 16 ||
                expiry === "" ||
                cvv.length !== 3
            ) {

                alert("Please enter valid card details.");

                return;

            }

        }

        alert("🎉 Order Placed Successfully!");



        localStorage.removeItem("cart");



        window.location.href = "success.html";

    });
// ==============================
// PAYMENT METHOD
// ==============================

const paymentOptions =
    document.querySelectorAll("input[name='payment']");

const upiSection =
    document.getElementById("upiSection");

const cardSection =
    document.getElementById("cardSection");

paymentOptions.forEach(option => {

    option.addEventListener("change", function () {

        upiSection.style.display = "none";
        cardSection.style.display = "none";

        if (this.value === "upi") {

            upiSection.style.display = "block";

        }

        if (this.value === "card") {

            cardSection.style.display = "block";

        }

    });

});