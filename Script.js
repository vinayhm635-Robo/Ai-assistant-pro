// ===============================
// HOME PAGE
// ===============================

function startSoftware() {
    window.location.href = "login.html";
}


// ===============================
// LOGIN
// ===============================

function loginUser(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (email === "" || password === "") {
        alert("Please enter your email and password.");
        return;
    }

    // Prototype login
    alert("Login successful!");

    window.location.href = "dashboard.html";
}


// ===============================
// REGISTER
// ===============================

function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const confirmPassword =
        document.getElementById("confirmPassword").value.trim();

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    if (password.length < 6) {
        alert("Password must contain at least 6 characters.");
        return;
    }

    // Prototype registration
    alert("Account created successfully!");

    window.location.href = "login.html";
}


// ===============================
// DASHBOARD
// ===============================

function openDashboard() {
    window.location.href = "dashboard.html";
}


// ===============================
// LOGOUT
// ===============================

function logoutUser() {
    alert("You have been logged out.");

    window.location.href = "login.html";
}


// ===============================
// BACK TO HOME
// ===============================

function goHome() {
    window.location.href = "index.html";
}
