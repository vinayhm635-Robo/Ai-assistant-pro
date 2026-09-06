/* =================================
   START SHOPPING
================================= */

function startShopping() {

    alert(
        "Welcome to DealMate AI!\n\n" +
        "Your AI shopping team is ready to find the best deal."
    );

}


/* =================================
   LOGIN
================================= */

function loginUser() {

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const message =
        document.getElementById("login-message");


    if (email === "" || password === "") {

        message.innerText =
            "Please enter your email and password.";

        message.style.color = "#ff8a8a";

        return;
    }


    message.innerText =
        "Login successful! Welcome to DealMate AI.";

    message.style.color = "#9ee6b0";

}


/* =================================
   NAVIGATION
================================= */

document
    .querySelectorAll("a[href^='#']")
    .forEach(function(link) {

        link.addEventListener("click", function(event) {

            const target =
                document.querySelector(
                    this.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });
