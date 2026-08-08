function checkLogin() {

    let user = localStorage.getItem("loggedInUser");

    if (!user) {
        alert("Please Login or Register First!");


        window.location.href = "login.html";



        return;
    }

    window.location.href = "products.html";
}