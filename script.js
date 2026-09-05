/* ==========================================
   DEALMATE AI
   AGENTIC PERSONAL SHOPPING NEGOTIATOR
========================================== */


/* ==========================================
   PRODUCT CATALOG
========================================== */

const products = [

    {
        id: 1,
        name: "SoundMax Pro Wireless Headphones",
        brand: "SoundMax",
        category: "headphones",
        price: 4299,
        oldPrice: 5999,
        rating: 4.6,
        emoji: "🎧",
        features: "40-hour battery • ANC • Bluetooth 5.3",
        discount: 28,
        maxDiscount: 8
    },

    {
        id: 2,
        name: "AudioBeat Air ANC",
        brand: "AudioBeat",
        category: "headphones",
        price: 3499,
        oldPrice: 4499,
        rating: 4.4,
        emoji: "🎧",
        features: "35-hour battery • ANC • Fast charging",
        discount: 22,
        maxDiscount: 7
    },

    {
        id: 3,
        name: "BassFlow Wireless 500",
        brand: "BassFlow",
        category: "headphones",
        price: 2799,
        oldPrice: 3999,
        rating: 4.3,
        emoji: "🎧",
        features: "50-hour battery • Deep bass",
        discount: 30,
        maxDiscount: 5
    },

    {
        id: 4,
        name: "TechBook Creator 15",
        brand: "TechBook",
        category: "laptop",
        price: 58999,
        oldPrice: 67999,
        rating: 4.5,
        emoji: "💻",
        features: "Core i5 • 16GB RAM • 512GB SSD",
        discount: 13,
        maxDiscount: 5
    },

    {
        id: 5,
        name: "PowerBook Gaming 15",
        brand: "PowerBook",
        category: "laptop",
        price: 61999,
        oldPrice: 71999,
        rating: 4.6,
        emoji: "💻",
        features: "Core i5 • RTX Graphics • 16GB RAM",
        discount: 14,
        maxDiscount: 6
    },

    {
        id: 6,
        name: "CodeMate Pro 14",
        brand: "CodeMate",
        category: "laptop",
        price: 54999,
        oldPrice: 62999,
        rating: 4.4,
        emoji: "💻",
        features: "Ryzen 7 • 16GB RAM • 512GB SSD",
        discount: 12,
        maxDiscount: 5
    },

    {
        id: 7,
        name: "RunFlex Ultra",
        brand: "RunFlex",
        category: "shoes",
        price: 3299,
        oldPrice: 4999,
        rating: 4.5,
        emoji: "👟",
        features: "Cushioned • Lightweight • Breathable",
        discount: 34,
        maxDiscount: 8
    },

    {
        id: 8,
        name: "SpeedRun Comfort",
        brand: "SpeedRun",
        category: "shoes",
        price: 2799,
        oldPrice: 3999,
        rating: 4.3,
        emoji: "👟",
        features: "Soft foam • Running support",
        discount: 30,
        maxDiscount: 6
    },

    {
        id: 9,
        name: "ActiveStep Runner",
        brand: "ActiveStep",
        category: "shoes",
        price: 3799,
        oldPrice: 4999,
        rating: 4.6,
        emoji: "👟",
        features: "Premium cushion • Flexible sole",
        discount: 24,
        maxDiscount: 7
    }

];


/* ==========================================
   HOME
========================================== */

function startSoftware() {

    window.location.href = "login.html";

}


function goHome() {

    window.location.href = "index.html";

}


/* ==========================================
   REGISTER
========================================== */

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


    if (
        !name ||
        !email ||
        !password ||
        !confirmPassword
    ) {

        alert("Please fill in all fields.");

        return;
    }


    if (password.length < 6) {

        alert(
            "Password must contain at least 6 characters."
        );

        return;
    }


    if (password !== confirmPassword) {

        alert(
            "Passwords do not match."
        );

        return;
    }


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


    window.location.href =
        "login.html";

}


/* ==========================================
   LOGIN
========================================== */

function loginUser(event) {

    event.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value.trim();


    if (!email || !password) {

        alert(
            "Please enter your email and password."
        );

        return;
    }


    const savedEmail =
        localStorage.getItem("userEmail");


    if (
        savedEmail &&
        email !== savedEmail
    ) {

        alert(
            "This email is not registered. Please register first."
        );

        return;
    }


    localStorage.setItem(
        "loggedIn",
        "true"
    );


    alert(
        "Welcome to DealMate AI!"
    );


    window.location.href =
        "dashboard.html";

}


/* ==========================================
   LOGOUT
========================================== */

function logoutUser() {

    localStorage.removeItem(
        "loggedIn"
    );

    window.location.href =
        "login.html";

}


/* ==========================================
   QUICK PROMPT
========================================== */

function usePrompt(text) {

    const input =
        document.getElementById(
            "shoppingRequest"
        );

    if (input) {

        input.value = text;

        input.focus();

    }

}


/* ==========================================
   PREFERENCE AGENT
========================================== */

function analyzePreferences(request) {

    const text =
        request.toLowerCase();


    let category = "general";

    if (
        text.includes("headphone") ||
        text.includes("earphone") ||
        text.includes("audio")
    ) {

        category = "headphones";

    }

    else if (
        text.includes("laptop") ||
        text.includes("computer")
    ) {

        category = "laptop";

    }

    else if (
        text.includes("shoe") ||
        text.includes("running")
    ) {

        category = "shoes";

    }


    // Extract budget

    let budget = null;


    const numbers =
        text.match(
            /(?:₹|rs\.?|inr)?\s?(\d[\d,]*)/i
        );


    if (numbers) {

        budget =
            parseInt(
                numbers[1].replace(/,/g, "")
            );

    }


    // Detect preferences

    const preferences = [];


    if (
        text.includes("battery")
    ) {

        preferences.push(
            "Long battery"
        );

    }

    if (
        text.includes("gaming")
    ) {

        preferences.push(
            "Gaming"
        );

    }

    if (
        text.includes("coding") ||
        text.includes("programming")
    ) {

        preferences.push(
            "Coding"
        );

    }

    if (
        text.includes("comfortable") ||
        text.includes("comfort")
    ) {

        preferences.push(
            "Comfort"
        );

    }

    if (
        text.includes("anc")
    ) {

        preferences.push(
            "Noise cancellation"
        );

    }

    if (
        text.includes("cheap") ||
        text.includes("budget") ||
        text.includes("affordable")
    ) {

        preferences.push(
            "Budget friendly"
        );

    }


    if (preferences.length === 0) {

        preferences.push(
            "Best value"
        );

    }


    return {
        category,
        budget,
        preferences
    };

}


/* ==========================================
   START SHOPPING
========================================== */

function startShopping() {

    const input =
        document.getElementById(
            "shoppingRequest"
        );


    const request =
        input.value.trim();


    if (!request) {

        alert(
            "Tell me what you want to shop for first."
        );

        input.focus();

        return;
    }


    // ------------------------------
    // AGENT 1
    // ------------------------------

    const profile =
        analyzePreferences(
            request
        );


    displayPreferenceResult(
        profile,
        request
    );


    // ------------------------------
    // AGENT 2
    // ------------------------------

    const matches =
        findDeals(
            profile
        );


    displayProducts(
        matches
    );


    // ------------------------------
    // Update summary
    // ------------------------------

    updateSummary(
        profile,
        matches
    );


    // Scroll

    setTimeout(function () {

        document
            .getElementById(
                "productsSection"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }, 400);

}


/* ==========================================
   DISPLAY PREFERENCE AGENT
========================================== */

function displayPreferenceResult(
    profile,
    request
) {

    const section =
        document.getElementById(
            "preferenceResult"
        );


    const text =
        document.getElementById(
            "preferenceText"
        );


    const tags =
        document.getElementById(
            "preferenceTags"
        );


    let categoryName =
        profile.category;


    if (
        categoryName === "headphones"
    ) {

        categoryName =
            "wireless headphones";

    }

    else if (
        categoryName === "laptop"
    ) {

        categoryName =
            "laptops";

    }

    else if (
        categoryName === "shoes"
    ) {

        categoryName =
            "running shoes";

    }


    let message =
        "You're looking for " +
        categoryName;


    if (profile.budget) {

        message +=
            " within ₹" +
            profile.budget.toLocaleString("en-IN");

    }


    message +=
        ". I will prioritize " +
        profile.preferences.join(", ") +
        ".";


    text.innerText =
        message;


    tags.innerHTML = "";


    profile.preferences.forEach(
        function (item) {

            const tag =
                document.createElement(
                    "span"
                );

            tag.innerText =
                "✓ " + item;

            tags.appendChild(tag);

        }
    );


    section.classList.remove(
        "hidden"
    );

}


/* ==========================================
   DEAL-HUNTER AGENT
========================================== */

function findDeals(profile) {

    let matches =
        products.filter(
            function (product) {

                if (
                    profile.category ===
                    "general"
                ) {

                    return true;

                }

                return (
                    product.category ===
                    profile.category
                );

            }
        );


    // Sort by price/value

    matches.sort(
        function (a, b) {

            return b.rating - a.rating;

        }
    );


    // If budget exists,
    // put affordable products first

    if (profile.budget) {

        matches.sort(
            function (a, b) {

                const aWithin =
                    a.price <= profile.budget;

                const bWithin =
                    b.price <= profile.budget;


                if (
                    aWithin &&
                    !bWithin
                ) {

                    return -1;

                }

                if (
                    !aWithin &&
                    bWithin
                ) {

                    return 1;

                }

                return (
                    b.rating - a.rating
                );

            }
        );

    }


    return matches.slice(0, 6);

}


/* ==========================================
   DISPLAY PRODUCTS
========================================== */

function displayProducts(matches) {

    const section =
        document.getElementById(
            "productsSection"
        );

    const grid =
        document.getElementById(
            "productsGrid"
        );

    const count =
        document.getElementById(
            "matchCount"
        );


    grid.innerHTML = "";


    count.innerText =
        matches.length;


    matches.forEach(
        function (product) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "product-card";


            card.id =
                "product-" +
                product.id;


            card.innerHTML = `

                <div class="product-image">
                    ${product.emoji}
                </div>

                <div class="product-brand">
                    ${product.brand}
                </div>

                <h3>
                    ${product.name}
                </h3>

                <div class="rating">
                    ★ ${product.rating}
                </div>

                <div class="price-row">

                    <div>

                        <span class="price">
                            ₹${product.price.toLocaleString("en-IN")}
                        </span>

                        <span class="old-price">
                            ₹${product.oldPrice.toLocaleString("en-IN")}
                        </span>

                    </div>

                    <span class="discount">
                        ${product.discount}% OFF
                    </span>

                </div>

                <div class="product-details">
                    ${product.features}
                </div>

                <button
                    class="select-product"
                    onclick="selectProduct(${product.id})">

                    Select for Negotiation

                </button>

            `;


            grid.appendChild(card);

        }
    );


    section.classList.remove(
        "hidden"
    );


    // Show negotiation section

    document
        .getElementById(
            "negotiationSection"
        )
        .classList.remove(
            "hidden"
        );

}


/* ==========================================
   SELECT PRODUCT
========================================== */

let selectedProducts = [];


function selectProduct(id) {

    const product =
        products.find(
            function (item) {

                return item.id === id;

            }
        );


    if (!product) return;


    const existing =
        selectedProducts.find(
            function (item) {

                return item.id === id;

            }
        );


    const card =
        document.getElementById(
            "product-" + id
        );


    if (existing) {

        selectedProducts =
            selectedProducts.filter(
                function (item) {

                    return item.id !== id;

                }
            );


        card.classList.remove(
            "selected"
        );


        card.querySelector(
            ".select-product"
        ).innerText =
            "Select for Negotiation";


    }

    else {

        selectedProducts.push(
            product
        );


        card.classList.add(
            "selected"
        );


        card.querySelector(
            ".select-product"
        ).innerText =
            "✓ Selected";

    }


    if (
        selectedProducts.length > 0
    ) {

        document
            .getElementById(
                "negotiationSection"
            )
            .scrollIntoView({
                behavior: "smooth"
            });

    }

}


/* ==========================================
   NEGOTIATION AGENT
========================================== */

function negotiateBundle() {

    if (
        selectedProducts.length === 0
    ) {

        alert(
            "Select at least one product first."
        );

        return;
    }


    let total = 0;

    let maxSaving = 0;


    selectedProducts.forEach(
        function (product) {

            total +=
                product.price;

            maxSaving +=
                product.price *
                (
                    product.maxDiscount /
                    100
                );

        }
    );


    // Bundle bonus

    let bundleDiscount = 0;


    if (
        selectedProducts.length >= 2
    ) {

        bundleDiscount = 0.03;

    }


    const negotiatedPrice =
        Math.round(
            total *
            (
                1 -
                bundleDiscount
            )
        );


    const saving =
        total -
        negotiatedPrice;


    showDealResult(
        "Bundle Deal Accepted",
        total,
        negotiatedPrice,
        saving,
        selectedProducts.length
    );

}


/* ==========================================
   NEGOTIATE INDIVIDUAL DISCOUNT
========================================== */

function negotiateDiscount() {

    if (
        selectedProducts.length === 0
    ) {

        alert(
            "Select a product first."
        );

        return;
    }


    const product =
        selectedProducts[0];


    const discount =
        product.maxDiscount;


    const negotiatedPrice =
        Math.round(
            product.price *
            (
                1 -
                discount / 100
            )
        );


    const saving =
        product.price -
        negotiatedPrice;


    showDealResult(
        "Negotiation Successful",
        product.price,
        negotiatedPrice,
        saving,
        1
    );

}


/* ==========================================
   SHOW DEAL
========================================== */

function showDealResult(
    title,
    original,
    negotiated,
    saving,
    itemCount
) {

    const result =
        document.getElementById(
            "dealResult"
        );


    result.innerHTML = `

        <h3>
            ✓ ${title}
        </h3>

        <p>
            The Negotiation Agent created an offer
            for ${itemCount} item(s) within the
            seller's allowed discount limit.
        </p>

        <div class="deal-price">
            ₹${negotiated.toLocaleString("en-IN")}
        </div>

        <div class="saving">
            You could save ₹${saving.toLocaleString("en-IN")}
            from ₹${original.toLocaleString("en-IN")}
        </div>

    `;


    result.classList.remove(
        "hidden"
    );


    document.getElementById(
        "summarySaving"
    ).innerText =
        "₹" +
        saving.toLocaleString("en-IN");


    result.scrollIntoView({
        behavior: "smooth"
    });

}


/* ==========================================
   SUMMARY
========================================== */

function updateSummary(
    profile,
    matches
) {

    const budget =
        document.getElementById(
            "summaryBudget"
        );


    const productCount =
        document.getElementById(
            "summaryProducts"
        );


    if (profile.budget) {

        budget.innerText =
            "₹" +
            profile.budget.toLocaleString(
                "en-IN"
            );

    }

    else {

        budget.innerText =
            "Not specified";

    }


    productCount.innerText =
        matches.length;


    document.getElementById(
        "summarySaving"
    ).innerText =
        "₹0";

}


/* ==========================================
   PAGE LOAD
========================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        const name =
            localStorage.getItem(
                "userName"
            );


        const welcome =
            document.getElementById(
                "welcomeName"
            );


        const display =
            document.getElementById(
                "userNameDisplay"
            );


        if (name && welcome) {

            welcome.innerText =
                "Good to see you, " +
                name +
                " 👋";

        }


        if (name && display) {

            display.innerText =
                name;

        }

    }
);
