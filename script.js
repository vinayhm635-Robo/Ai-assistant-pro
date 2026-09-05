// ========================================
// HOME PAGE
// ========================================

function startSoftware() {

    window.location.href = "login.html";

}


// ========================================
// REGISTER
// ========================================

function registerUser(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("registerEmail").value.trim();

    const password =
        document.getElementById("registerPassword").value.trim();

    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();


    // Check fields

    if (
        name === "" ||
        email === "" ||
        password === "" ||
        confirmPassword === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    // Check password length

    if (password.length < 6) {

        alert("Password must contain at least 6 characters.");

        return;
    }


    // Check passwords

    if (password !== confirmPassword) {

        alert("Passwords do not match.");

        return;
    }


    // Save prototype user

    localStorage.setItem(
        "userName",
        name
    );

    localStorage.setItem(
        "userEmail",
        email
    );


    alert(
        "Account created successfully!"
    );


    window.location.href = "login.html";

}


// ========================================
// LOGIN
// ========================================

function loginUser(event) {

    event.preventDefault();


    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (
        email === "" ||
        password === ""
    ) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    const savedEmail =
        localStorage.getItem("userEmail");


    // Prototype login

    if (
        savedEmail &&
        email !== savedEmail
    ) {

        alert(
            "Email not found. Please register first."
        );

        return;
    }


    localStorage.setItem(
        "loggedIn",
        "true"
    );


    alert(
        "Login successful!"
    );


    window.location.href =
        "dashboard.html";

}


// ========================================
// LOGOUT
// ========================================

function logoutUser() {

    localStorage.removeItem(
        "loggedIn"
    );


    alert(
        "You have been logged out."
    );


    window.location.href =
        "login.html";

}


// ========================================
// DASHBOARD
// ========================================

function startFeature() {

    alert(
        "Main software feature will be opened here."
    );

}


function openAI() {

    alert(
        "AI Assistant will be added here."
    );

}


function showActivity() {

    alert(
        "Activity section will be added here."
    );

}


function showSettings() {

    alert(
        "Settings section will be added here."
    );

}


// ========================================
// HOME
// ========================================

function goHome() {

    window.location.href =
        "index.html";

}
