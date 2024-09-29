function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.forms["loginForm"]["username"].value;
    var password = document.forms["loginForm"]["password"].value;

    if (username === "" || password === "") {
        alert("Username and Password must be filled out");
        return false;
    }

    // If validation passes, redirect to p-interface.html
    window.location.href = "p-interface.html";
    return true;
}
