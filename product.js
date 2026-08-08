// =============================
// SEARCH PRODUCTS
// =============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {

        let value = this.value.toLowerCase();

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title = card.querySelector("h5").innerText.toLowerCase();

            if (title.includes(value)) {

                card.parentElement.style.display = "block";

            } else {

                card.parentElement.style.display = "none";

            }

        });

    });
}



// =============================
// CATEGORY FILTER
// =============================

const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

    categoryFilter.addEventListener("change", function () {

        let value = this.value;

        let cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {

            let title = card.querySelector("h5").innerText.toLowerCase();

            if (value == "all") {

                card.parentElement.style.display = "block";

            }

            else if (value == "electronics") {

                if (
                    title.includes("headphones") ||
                    title.includes("speaker") ||
                    title.includes("watch")
                ) {

                    card.parentElement.style.display = "block";

                } else {

                    card.parentElement.style.display = "none";

                }

            }

            else if (value == "fashion") {

                if (
                    title.includes("jacket") ||
                    title.includes("shirt") ||
                    title.includes("bag")
                ) {

                    card.parentElement.style.display = "block";

                } else {

                    card.parentElement.style.display = "none";

                }

            }

            else if (value == "sports") {

                if (
                    title.includes("shoe")
                ) {

                    card.parentElement.style.display = "block";

                } else {

                    card.parentElement.style.display = "none";

                }

            }

        });

    });

}



// =============================
// SORT PRICE
// =============================

const sortPrice = document.getElementById("sortPrice");

if (sortPrice) {

    sortPrice.addEventListener("change", function () {

        let container = document.getElementById("productContainer");

        let items = Array.from(container.children);

        items.sort(function (a, b) {

            let priceA = parseInt(
                a.querySelector("h4").innerText.replace("₹", "")
            );

            let priceB = parseInt(
                b.querySelector("h4").innerText.replace("₹", "")
            );

            if (sortPrice.value == "low") {

                return priceA - priceB;

            } else {

                return priceB - priceA;

            }

        });

        container.innerHTML = "";

        items.forEach(item => {

            container.appendChild(item);

        });

    });

}



// =============================
// ADD TO CART
// =============================

let buttons = document.querySelectorAll(".addCart");

buttons.forEach(button => {

    button.addEventListener("click", function () {

        let user = localStorage.getItem("loggedInUser");

        if (!user) {

            if (confirm("Please Login First!\n\nClick OK to Login.")) {

                window.location.href = "login.html";

            }

            return;

        }

        let card = this.closest(".product-card");

        const product = {

            id: Date.now(),

            name: card.querySelector("h5").innerText,

            price: parseFloat(
                card.querySelector("h4").innerText.replace(/[^\d.]/g, "")
            ),

            image: card.querySelector("img").src,

            quantity: 1

        };

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        let existing = cart.find(item => item.name === product.name);

        if (existing) {

            existing.quantity++;

        } else {

            cart.push(product);

        }

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(product.name + " added to Cart Successfully.");

    });

});



// =============================
// PRODUCT COUNT
// =============================

console.log("Products Loaded Successfully");
function addToCart(name) {
    alert(name + " added to cart successfully.");
}
function viewProduct(id) {
    window.location.href = "product-details.html?id=" + id;
}