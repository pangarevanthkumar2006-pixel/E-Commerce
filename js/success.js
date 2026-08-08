// Generate Random Order ID

const randomNumber = Math.floor(100000 + Math.random() * 900000);

document.getElementById("orderId").innerHTML = "SE" + randomNumber;