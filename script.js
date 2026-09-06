/* =========================================
   DEALMATE AI JAVASCRIPT
========================================= */


/* =========================================
   LOGIN
========================================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email =
            document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();

        const message =
            document.getElementById("loginMessage");


        if (!email || !password) {

            message.textContent =
                "Please enter your email and password.";

            message.style.color =
                "#ff9999";

            return;
        }


        localStorage.setItem(
            "dealMateUser",
            email
        );


        message.textContent =
            "Login successful. Opening DealMate AI...";

        message.style.color =
            "#b9c7d8";


        setTimeout(function() {

            window.location.href =
                "app.html";

        }, 1200);

    });

}


/* =========================================
   CATEGORY SELECTION
========================================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(function(card) {

    card.addEventListener("click", function() {

        categoryCards.forEach(function(item) {

            item.classList.remove("selected");

        });


        card.classList.add("selected");


        const category =
            card.getAttribute("data-category");


        localStorage.setItem(
            "dealMateCategory",
            category
        );


        const selectedCategory =
            document.getElementById(
                "selectedCategory"
            );


        if (selectedCategory) {

            selectedCategory.textContent =
                category;

        }


        const productInput =
            document.getElementById("product");


        if (productInput) {

            if (category === "Laptop") {

                productInput.placeholder =
                    "Example: Gaming laptop";

            }

            else if (category === "Headphones") {

                productInput.placeholder =
                    "Example: Wireless headphones";

            }

            else if (category === "Shoes") {

                productInput.placeholder =
                    "Example: Running shoes";

            }

        }

    });

});


/* =========================================
   SHOPPING FORM
========================================= */

const shoppingForm =
    document.getElementById("shoppingForm");


if (shoppingForm) {

    shoppingForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const category =
                localStorage.getItem(
                    "dealMateCategory"
                );


            const product =
                document.getElementById(
                    "product"
                ).value.trim();


            const budget =
                document.getElementById(
                    "budget"
                ).value.trim();


            const preference =
                document.getElementById(
                    "preference"
                ).value;


            const requirements =
                document.getElementById(
                    "requirements"
                ).value.trim();


            if (!category) {

                alert(
                    "Please select Laptop, Headphones or Shoes first."
                );

                return;

            }


            if (!product || !budget) {

                alert(
                    "Please enter your product and budget."
                );

                return;

            }


            localStorage.setItem(
                "dealMateProduct",
                product
            );


            localStorage.setItem(
                "dealMateBudget",
                budget
            );


            localStorage.setItem(
                "dealMatePreference",
                preference
            );


            localStorage.setItem(
                "dealMateRequirements",
                requirements
            );


            /* PROCESSING SCREEN */

            shoppingForm.innerHTML = `

                <div class="processing-box">

                    <div class="processing-icon">
                        🤖
                    </div>

                    <h2>
                        DealMate AI is working
                    </h2>

                    <p>
                        🧠 Preference Agent is understanding your needs...
                    </p>

                    <p>
                        🔎 Deal-Hunter Agent is finding the best deals...
                    </p>

                    <p>
                        🤝 Negotiation Agent is checking extra savings...
                    </p>

                </div>

            `;


            /* 3 SECOND PROCESSING */

            setTimeout(function() {

                window.location.href =
                    "results.html";

            }, 3000);

        }
    );

}


/* =========================================
   RESULTS SUMMARY
========================================= */

const searchSummary =
    document.getElementById(
        "searchSummary"
    );


if (searchSummary) {

    const product =
        localStorage.getItem(
            "dealMateProduct"
        );


    const budget =
        localStorage.getItem(
            "dealMateBudget"
        );


    const preference =
        localStorage.getItem(
            "dealMatePreference"
        );


    if (product && budget) {

        searchSummary.textContent =
            `Results for "${product}" • Budget ₹${Number(budget).toLocaleString("en-IN")} • ${preference}`;

    }

}


/* =========================================
   SAVE DEAL
========================================= */

function saveDeal(button) {

    button.textContent = "♥";

    button.style.background =
        "#263248";

    localStorage.setItem(
        "dealSaved",
        "true"
    );

}


/* =========================================
   SELECT PRODUCT
========================================= */

function selectProduct(
    productName,
    price,
    saving
) {

    localStorage.setItem(
        "selectedProduct",
        productName
    );


    localStorage.setItem(
        "selectedPrice",
        price
    );


    localStorage.setItem(
        "selectedSaving",
        saving
    );


    const message =
        document.getElementById(
            "selectionMessage"
        );


    if (message) {

        message.innerHTML = `

            <div class="processing-box"
                 style="min-height:180px;">

                <h2>
                    ✓ Deal selected
                </h2>

                <p>
                    ${productName}
                </p>

                <br>

                <a
                    href="success.html"
                    class="primary-btn"
                >
                    Continue →
                </a>

            </div>

        `;

        message.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   NEGOTIATION BUNDLE
========================================= */

function acceptBundle() {

    const product =
        localStorage.getItem(
            "dealMateProduct"
        ) || "Selected Product";


    localStorage.setItem(
        "selectedProduct",
        product + " + Smart Accessory Bundle"
    );


    localStorage.setItem(
        "selectedPrice",
        "53499"
    );


    localStorage.setItem(
        "selectedSaving",
        "11500"
    );


    const message =
        document.getElementById(
            "selectionMessage"
        );


    if (message) {

        message.innerHTML = `

            <div class="processing-box"
                 style="min-height:180px;">

                <h2>
                    🤝 Negotiation successful
                </h2>

                <p>
                    DealMate found an additional bundle saving.
                </p>

                <br>

                <a
                    href="success.html"
                    class="primary-btn"
                >
                    Accept Deal →
                </a>

            </div>

        `;

        message.scrollIntoView({
            behavior: "smooth"
        });

    }

}


/* =========================================
   SUCCESS PAGE
========================================= */

const successProduct =
    document.getElementById(
        "successProduct"
    );


if (successProduct) {

    const product =
        localStorage.getItem(
            "selectedProduct"
        );


    const price =
        localStorage.getItem(
            "selectedPrice"
        );


    const saving =
        localStorage.getItem(
            "selectedSaving"
        );


    if (product) {

        successProduct.textContent =
            product;

    }


    if (price) {

        document.getElementById(
            "successPrice"
        ).textContent =
            "₹" +
            Number(price).toLocaleString(
                "en-IN"
            );

    }


    if (saving) {

        document.getElementById(
            "successSaving"
        ).textContent =
            "₹" +
            Number(saving).toLocaleString(
                "en-IN"
            );

    }

}


/* =========================================
   FILTER BUTTONS
========================================= */

const filters =
    document.querySelectorAll(".filter");


filters.forEach(function(filter) {

    filter.addEventListener(
        "click",
        function() {

            filters.forEach(function(item) {

                item.classList.remove(
                    "active"
                );

            });


            filter.classList.add("active");

        }
    );

});
