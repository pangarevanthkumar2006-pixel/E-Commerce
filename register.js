function register() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    if (name == "" || email == "" || password == "") {

        alert("Please fill all fields");
        return;
    }

    let user = {

        name: name,
        email: email,
        password: password

    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Registration Successful!");

    window.location.href = "login.html";
}