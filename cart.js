// ===============================
// Load Cart From LocalStorage
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];


const cartContainer = document.getElementById("cartContainer");

const cartSummary = document.getElementById("cartSummary");




// ===============================
// Display Cart
// ===============================

function displayCart() {


    cartContainer.innerHTML = "";


    if (cart.length === 0) {


        cartContainer.innerHTML = `

        <div class="empty-cart">

            <h2>
            Your Cart is Empty
            </h2>

            <a href="products.html">

                <button class="continue">
                Continue Shopping
                </button>

            </a>

        </div>

        `;


        cartSummary.innerHTML = "";

        updateCartCount();

        return;

    }



    let total = 0;



    cart.forEach((product, index) => {



        // Convert price into number
        let price = Number(
            String(product.price)
                .replace("₹", "")
                .replace(/,/g, "")
        );



        total += price * product.quantity;



        cartContainer.innerHTML += `


        <div class="cart-card">


            <img src="${product.image}" 
            alt="${product.name}">


            <div class="product-info">


                <h3>
                ${product.name}
                </h3>



                <p class="price">

                Price: ₹${price}

                </p>




                <div class="quantity">


                    <button onclick="decreaseQuantity(${index})">

                    -

                    </button>



                    <span>

                    ${product.quantity}

                    </span>




                    <button onclick="increaseQuantity(${index})">

                    +

                    </button>



                </div>




                <button 
                class="remove"
                onclick="removeItem(${index})">


                Remove


                </button>



            </div>


        </div>


        `;



    });





    cartSummary.innerHTML = `


    <h2>
    Total: ₹${total}
    </h2>



    <a href="products.html">

    <button class="continue">

    Continue Shopping

    </button>

    </a>




    <a href="checkout.html">

    <button class="checkout">

    Proceed To Checkout

    </button>

    </a>


    `;



    updateCartCount();


}






// ===============================
// Increase Quantity
// ===============================

function increaseQuantity(index) {


    cart[index].quantity++;


    saveCart();


}






// ===============================
// Decrease Quantity
// ===============================

function decreaseQuantity(index) {



    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    }


    saveCart();


}







// ===============================
// Remove Item
// ===============================

function removeItem(index) {


    cart.splice(index, 1);


    saveCart();


}








// ===============================
// Save Cart
// ===============================

function saveCart() {


    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );


    displayCart();


}








// ===============================
// Add Product To Cart
// ===============================

function addToCart(product) {



    let cart =
        JSON.parse(localStorage.getItem("cart"))
        || [];



    let existing =
        cart.find(item => item.id === product.id);





    if (existing) {


        existing.quantity++;


    }

    else {


        cart.push({


            id: product.id,


            name: product.name,


            // convert price into number
            price: Number(
                String(product.price)
                    .replace("₹", "")
                    .replace(/,/g, "")
            ),



            image: product.image,


            quantity: 1


        });


    }




    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );



    alert("Product Added To Cart");


    updateCartCount();


}







// ===============================
// Cart Count In Navbar
// ===============================

function updateCartCount() {



    let cartCount =
        document.getElementById("cartCount");



    if (cartCount) {



        let count = 0;



        cart.forEach(item => {


            count += item.quantity;


        });



        cartCount.innerHTML = count;


    }


}







// ===============================
// Load Cart On Page
// ===============================

displayCart();