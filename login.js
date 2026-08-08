function login() {

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let savedUser = JSON.parse(localStorage.getItem("user"));

    if (savedUser == null) {

        alert("You are not registered.\nPlease Register First!");

        window.location.href = "register.html";

        return;
    }

    if (email === savedUser.email && password === savedUser.password) {

        localStorage.setItem("loggedInUser", savedUser.name);

        alert("Login Successful");

        window.location.href = "products.html";

    }

    else {

        alert("Invalid Email or Password");

    }

}