/* =========================================================
   A LITTLE BIRTHDAY SURPRISE
   Complete script.js
   ========================================================= */


/* =========================================================
   DATA
   ========================================================= */

const flowers = [
    { name: "Red Rose", emoji: "🌹" },
    { name: "Pink Rose", emoji: "🌹" },
    { name: "White Rose", emoji: "🌹" },
    { name: "Yellow Rose", emoji: "🌹" },

    { name: "Tulip", emoji: "🌷" },
    { name: "Sunflower", emoji: "🌻" },
    { name: "Daisy", emoji: "🌼" },
    { name: "Hibiscus", emoji: "🌺" },

    { name: "Cherry Blossom", emoji: "🌸" },
    { name: "Lavender", emoji: "🪻" },
    { name: "Peony", emoji: "🌸" },
    { name: "Lily", emoji: "🌷" },

    { name: "Lotus", emoji: "🪷" },
    { name: "Daffodil", emoji: "🌼" },
    { name: "Poppy", emoji: "🌺" },
    { name: "Carnation", emoji: "🌸" },

    { name: "Camellia", emoji: "🌺" },
    { name: "Marigold", emoji: "🌼" },
    { name: "Bluebell", emoji: "🔹" },
    { name: "Orchid", emoji: "🌸" }
];


const greenery = [
    { name: "Willow", emoji: "🌿" },
    { name: "Mint Leaves", emoji: "🌱" },
    { name: "Eucalyptus", emoji: "🍃" },
    { name: "Ruscus", emoji: "🌿" },
    { name: "Fern", emoji: "🌿" },
    { name: "Olive Branch", emoji: "🫒" },
    { name: "Baby's Breath", emoji: "🌿" },
    { name: "Ivy", emoji: "🍃" },
    { name: "Silver Dollar", emoji: "🍃" },
    { name: "Lemon Leaves", emoji: "🌿" }
];


const ribbons = [
    { name: "Baby Blue", color: "#9ccbea" },
    { name: "Lavender", color: "#b8a1d8" },
    { name: "Blush Pink", color: "#e5a2b4" },
    { name: "Rose Pink", color: "#c97991" },
    { name: "Cream", color: "#ead9b9" },
    { name: "Sage Green", color: "#a9bb9a" },
    { name: "Butter Yellow", color: "#ead48b" },
    { name: "Dusty Rose", color: "#b98491" },
    { name: "Peach", color: "#e9ae95" },
    { name: "White", color: "#eee9e2" }
];


const wrappings = [
    { name: "Peach Blush", color: "#eeb59f" },
    { name: "Lavender Mist", color: "#b9a6d7" },
    { name: "Sage Garden", color: "#a9b99d" },
    { name: "Rose Paper", color: "#dfabb8" },
    { name: "Cream Linen", color: "#e8d8bd" },
    { name: "Baby Pink", color: "#edc4cb" },
    { name: "Soft Blue", color: "#b7cfe0" },
    { name: "Dusty Mauve", color: "#b994a4" }
];


/* =========================================================
   APPLICATION STATE
   ========================================================= */

const birthday = {
    name: "",
    age: 0,

    flowers: [],
    greenery: [],

    ribbon: null,
    wrapping: null
};


/*
    Temporary selection state.
*/

let firstFlowerSelection = null;
let secondFlowerSelection = null;

let firstFlowerQuantity = 1;
let secondFlowerQuantity = 1;

let selectedGreeneryMap = {};

let selectedRibbon = null;
let selectedWrapping = null;


/* =========================================================
   GENERAL HELPERS
   ========================================================= */

function $(id) {
    return document.getElementById(id);
}


function showScreen(id) {
    document.querySelectorAll(".birthday-screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   SCREEN 1 — PERSONALIZATION
   ========================================================= */

$("personalize-next").addEventListener("click", () => {

    const name = $("name-input").value.trim();
    const age = parseInt($("age-input").value, 10);

    const error = $("personalize-error");

    if (!name) {
        error.textContent = "Tell me your name first ♡";
        $("name-input").focus();
        return;
    }

    if (!age || age < 1 || age > 120) {
        error.textContent = "Enter a valid age between 1 and 120.";
        $("age-input").focus();
        return;
    }

    birthday.name = name;
    birthday.age = age;

    error.textContent = "";

    $("birthday-name-banner").textContent = birthday.name;
    $("letter-name").textContent = birthday.name;
    $("letter-name-inside").textContent = birthday.name;
    $("final-name").textContent = birthday.name;

    createBirthdayCandles(age);
    createBirthdayAnimals();

    showScreen("screen-dark-room");
});


/* =========================================================
   SCREEN 2 — LIGHTS
   ========================================================= */

$("lights-button").addEventListener("click", () => {

    showScreen("screen-birthday-room");

    const room = $("screen-birthday-room");

    room.classList.add("lights-coming-on");

    setTimeout(() => {
        room.classList.add("room-revealed");
    }, 400);
});


/* =========================================================
   FULL-BODY ANIMALS
   ========================================================= */

/*
    We don't use emoji animals anymore.

    These are simple SVG-style full-body characters created
    directly in JavaScript, so the CSS can animate them later.
*/

function createBirthdayAnimals() {

    const container = document.querySelector(".birthday-animals");

    if (!container) return;

    container.innerHTML = "";

    const animals = [
        createBunny(),
        createBear(),
        createCat(),
        createDog()
    ];

    animals.forEach((animal, index) => {

        const wrapper = document.createElement("div");

        wrapper.className = `animal animal-${index + 1}`;

        wrapper.innerHTML = animal;

        container.appendChild(wrapper);
    });
}


function createBunny() {

    return `
        <svg class="animal-svg bunny-svg"
             viewBox="0 0 100 130"
             xmlns="http://www.w3.org/2000/svg">

            <ellipse cx="35" cy="25" rx="11" ry="30"
                     fill="#f4eeee"/>

            <ellipse cx="65" cy="25" rx="11" ry="30"
                     fill="#f4eeee"/>

            <ellipse cx="35" cy="25" rx="4" ry="20"
                     fill="#e8b9c3"/>

            <ellipse cx="65" cy="25" rx="4" ry="20"
                     fill="#e8b9c3"/>

            <circle cx="50" cy="57" r="32"
                    fill="#f5f0ed"/>

            <circle cx="39" cy="54" r="4"
                    fill="#493e43"/>

            <circle cx="61" cy="54" r="4"
                    fill="#493e43"/>

            <circle cx="50" cy="64" r="4"
                    fill="#d98c9e"/>

            <path d="M50 66 Q43 75 36 70"
                  fill="none"
                  stroke="#493e43"
                  stroke-width="2"/>

            <path d="M50 66 Q57 75 64 70"
                  fill="none"
                  stroke="#493e43"
                  stroke-width="2"/>

            <ellipse cx="50" cy="100"
                     rx="25" ry="28"
                     fill="#f5f0ed"/>

            <ellipse cx="35" cy="126"
                     rx="10" ry="5"
                     fill="#e8dedd"/>

            <ellipse cx="65" cy="126"
                     rx="10" ry="5"
                     fill="#e8dedd"/>
        </svg>
    `;
}


function createBear() {

    return `
        <svg class="animal-svg bear-svg"
             viewBox="0 0 100 130"
             xmlns="http://www.w3.org/2000/svg">

            <circle cx="28" cy="27" r="15"
                    fill="#795548"/>

            <circle cx="72" cy="27" r="15"
                    fill="#795548"/>

            <circle cx="28" cy="27" r="7"
                    fill="#b27b67"/>

            <circle cx="72" cy="27" r="7"
                    fill="#b27b67"/>

            <circle cx="50" cy="58" r="34"
                    fill="#795548"/>

            <ellipse cx="50" cy="68"
                     rx="19" ry="15"
                     fill="#c58c70"/>

            <circle cx="39" cy="55" r="4"
                    fill="#292326"/>

            <circle cx="61" cy="55" r="4"
                    fill="#292326"/>

            <ellipse cx="50" cy="65"
                     rx="6" ry="5"
                     fill="#3c2925"/>

            <path d="M45 72 Q50 77 55 72"
                  fill="none"
                  stroke="#3c2925"
                  stroke-width="2"/>

            <ellipse cx="50" cy="103"
                     rx="27" ry="29"
                     fill="#795548"/>

            <ellipse cx="34" cy="126"
                     rx="10" ry="5"
                     fill="#68463c"/>

            <ellipse cx="66" cy="126"
                     rx="10" ry="5"
                     fill="#68463c"/>
        </svg>
    `;
}


function createCat() {

    return `
        <svg class="animal-svg cat-svg"
             viewBox="0 0 100 130"
             xmlns="http://www.w3.org/2000/svg">

            <path d="M20 40 L25 15 L43 31 Z"
                  fill="#f4c52e"/>

            <path d="M80 40 L75 15 L57 31 Z"
                  fill="#f4c52e"/>

            <path d="M27 27 L28 22 L36 30"
                  fill="#e59aa5"/>

            <path d="M73 27 L72 22 L64 30"
                  fill="#e59aa5"/>

            <circle cx="50" cy="59" r="34"
                    fill="#f4c52e"/>

            <ellipse cx="39" cy="56"
                     rx="5" ry="7"
                     fill="#382f27"/>

            <ellipse cx="61" cy="56"
                     rx="5" ry="7"
                     fill="#382f27"/>

            <circle cx="40" cy="56" r="2"
                    fill="white"/>

            <circle cx="62" cy="56" r="2"
                    fill="white"/>

            <path d="M46 67 Q50 71 54 67"
                  fill="none"
                  stroke="#49372c"
                  stroke-width="2"/>

            <ellipse cx="50" cy="103"
                     rx="27" ry="29"
                     fill="#f4c52e"/>

            <ellipse cx="34" cy="126"
                     rx="10" ry="5"
                     fill="#dcae22"/>

            <ellipse cx="66" cy="126"
                     rx="10" ry="5"
                     fill="#dcae22"/>

            <path d="M23 91 Q5 80 14 70"
                  fill="none"
                  stroke="#f4c52e"
                  stroke-width="9"
                  stroke-linecap="round"/>
        </svg>
    `;
}


function createDog() {

    return `
        <svg class="animal-svg dog-svg"
             viewBox="0 0 100 130"
             xmlns="http://www.w3.org/2000/svg">

            <path d="M18 37 Q5 18 22 13 Q37 14 37 38"
                  fill="#8b6255"/>

            <path d="M82 37 Q95 18 78 13 Q63 14 63 38"
                  fill="#8b6255"/>

            <circle cx="50" cy="57" r="33"
                    fill="#f3dfbd"/>

            <ellipse cx="38" cy="55"
                     rx="5" ry="6"
                     fill="#3c302d"/>

            <ellipse cx="62" cy="55"
                     rx="5" ry="6"
                     fill="#3c302d"/>

            <ellipse cx="50" cy="67"
                     rx="8" ry="6"
                     fill="#493631"/>

            <path d="M45 75 Q50 80 55 75"
                  fill="none"
                  stroke="#493631"
                  stroke-width="2"/>

            <ellipse cx="50" cy="103"
                     rx="27" ry="29"
                     fill="#f3dfbd"/>

            <ellipse cx="34" cy="126"
                     rx="10" ry="5"
                     fill="#d2b68e"/>

            <ellipse cx="66" cy="126"
                     rx="10" ry="5"
                     fill="#d2b68e"/>

            <circle cx="50" cy="86" r="8"
                    fill="#d77e91"/>
        </svg>
    `;
}


/* =========================================================
   CAKE — NUMBER CANDLES
   ========================================================= */

function createBirthdayCandles(age) {

    const container = $("cake-candles");

    if (!container) return;

    container.innerHTML = "";

    /*
        We create ONE candle for each digit.

        18 → "1" + "8"
        20 → "2" + "0"
        7  → "7"
        100 → "1" + "0" + "0"
    */

    const digits = String(age).split("");

    digits.forEach((digit, index) => {

        const candle = document.createElement("div");

        candle.className = "number-candle";

        candle.dataset.digit = digit;

        candle.innerHTML = `
            <span class="number-candle-digit">${digit}</span>
            <span class="number-flame"></span>
        `;

        candle.style.setProperty(
            "--candle-index",
            index
        );

        container.appendChild(candle);
    });
}


/* =========================================================
   BLOW OUT CANDLES
   ========================================================= */

$("blow-candles-button").addEventListener("click", () => {

    const candles =
        document.querySelectorAll(".number-candle");

    candles.forEach((candle, index) => {

        setTimeout(() => {
            candle.classList.add("blown");
        }, index * 100);
    });

    $("cake-interaction").classList.add("hidden");

    setTimeout(() => {

        $("after-cake").classList.remove("hidden");

    }, 900);
});


/* =========================================================
   GO TO FLOWER SHOP
   ========================================================= */

$("to-flower-shop").addEventListener("click", () => {

    showScreen("screen-flower-shop");

    resetFlowerShop();

    showShopStep(1);
});


/* =========================================================
   FLOWER SHOP RESET
   ========================================================= */

function resetFlowerShop() {

    birthday.flowers = [];
    birthday.greenery = [];

    birthday.ribbon = null;
    birthday.wrapping = null;

    firstFlowerSelection = null;
    secondFlowerSelection = null;

    firstFlowerQuantity = 1;
    secondFlowerQuantity = 1;

    selectedGreeneryMap = {};

    selectedRibbon = null;
    selectedWrapping = null;

    renderFlowerCards();
    renderSecondFlowerCards();
    renderGreeneryCards();
    renderRibbonCards();
    renderWrappingCards();

    updateSelectionUI();

    updateBasketCount();
}


/* =========================================================
   SHOP STEP NAVIGATION
   ========================================================= */

const shopStepLabels = [
    "Choose your flowers",
    "Add another flower",
    "Choose your greenery",
    "Choose your ribbon",
    "Choose your wrapping"
];


function showShopStep(step) {

    document.querySelectorAll(".shop-step").forEach(item => {
        item.classList.remove("active");
    });

    const target = $(`shop-step-${step}`);

    if (target) {
        target.classList.add("active");
    }

    $("shop-step-label").textContent =
        shopStepLabels[step - 1] || "";

    $("shop-step-number").textContent =
        `${step} / 5`;

    $("shop-progress-bar").style.width =
        `${step * 20}%`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   FLOWER CARD CREATOR
   ========================================================= */

function createFlowerCard(flower, selected, clickHandler) {

    const card = document.createElement("button");

    card.type = "button";

    card.className = "flower-card";

    if (selected) {
        card.classList.add("selected");
    }

    card.innerHTML = `
        <span class="flower-emoji">${flower.emoji}</span>
        <span class="flower-name">${flower.name}</span>
    `;

    card.addEventListener("click", clickHandler);

    return card;
}


/* =========================================================
   FIRST FLOWER
   ========================================================= */

function renderFlowerCards() {

    const grid = $("flower-grid-1");

    if (!grid) return;

    grid.innerHTML = "";

    flowers.forEach((flower, index) => {

        const selected =
            firstFlowerSelection &&
            firstFlowerSelection.name === flower.name;

        const card = createFlowerCard(
            flower,
            selected,
            () => {

                firstFlowerSelection = flower;

                firstFlowerQuantity = 1;

                renderFlowerCards();

                updateSelectionUI();
            }
        );

        grid.appendChild(card);
    });
}


/* =========================================================
   SECOND FLOWER
   ========================================================= */

function renderSecondFlowerCards() {

    const grid = $("flower-grid-2");

    if (!grid) return;

    grid.innerHTML = "";

    flowers.forEach(flower => {

        /*
            The second flower can be the same flower too.
            This allows:

            Rose x 3

            or

            Rose x 2 + Sunflower x 4
        */

        const selected =
            secondFlowerSelection &&
            secondFlowerSelection.name === flower.name;

        const card = createFlowerCard(
            flower,
            selected,
            () => {

                secondFlowerSelection = flower;

                secondFlowerQuantity = 1;

                renderSecondFlowerCards();

                updateSelectionUI();
            }
        );

        grid.appendChild(card);
    });
}


/* =========================================================
   FIRST FLOWER QUANTITY
   ========================================================= */

$("quantity-minus").addEventListener("click", () => {

    if (firstFlowerQuantity > 1) {
        firstFlowerQuantity--;

        updateSelectionUI();
    }
});


$("quantity-plus").addEventListener("click", () => {

    if (!firstFlowerSelection) return;

    if (firstFlowerQuantity < 20) {
        firstFlowerQuantity++;

        updateSelectionUI();
    }
});


/* =========================================================
   SECOND FLOWER QUANTITY
   ========================================================= */

$("quantity-minus-2").addEventListener("click", () => {

    if (secondFlowerQuantity > 1) {
        secondFlowerQuantity--;

        updateSelectionUI();
    }
});


$("quantity-plus-2").addEventListener("click", () => {

    if (!secondFlowerSelection) return;

    if (secondFlowerQuantity < 20) {
        secondFlowerQuantity++;

        updateSelectionUI();
    }
});


/* =========================================================
   ADD FIRST FLOWER
   ========================================================= */

$("add-first-flower").addEventListener("click", () => {

    if (!firstFlowerSelection) return;

    birthday.flowers = [
        {
            name: firstFlowerSelection.name,
            emoji: firstFlowerSelection.emoji,
            quantity: firstFlowerQuantity
        }
    ];

    updateBasketCount();

    showShopStep(2);
});


/* =========================================================
   ADD SECOND FLOWER
   ========================================================= */

$("add-second-flower").addEventListener("click", () => {

    if (!secondFlowerSelection) return;

    addFlowerToBouquet(
        secondFlowerSelection,
        secondFlowerQuantity
    );

    updateBasketCount();

    showShopStep(3);
});


/* =========================================================
   SKIP SECOND FLOWER
   ========================================================= */

$("skip-second-flower").addEventListener("click", () => {

    updateBasketCount();

    showShopStep(3);
});


/* =========================================================
   ADD FLOWER TO BOUQUET
   ========================================================= */

function addFlowerToBouquet(flower, quantity) {

    const existing =
        birthday.flowers.find(
            item => item.name === flower.name
        );

    if (existing) {

        existing.quantity += quantity;

    } else {

        birthday.flowers.push({
            name: flower.name,
            emoji: flower.emoji,
            quantity
        });
    }
}


/* =========================================================
   GREENERY
   ========================================================= */

function renderGreeneryCards() {

    const grid = $("greenery-grid");

    if (!grid) return;

    grid.innerHTML = "";

    greenery.forEach(item => {

        const selected =
            selectedGreeneryMap[item.name] !== undefined;

        const card = document.createElement("button");

        card.type = "button";

        card.className = "greenery-card";

        if (selected) {
            card.classList.add("selected");
        }

        card.innerHTML = `
            <span class="greenery-emoji">
                ${item.emoji}
            </span>

            <span>
                ${item.name}
            </span>
        `;

        card.addEventListener("click", () => {

            if (selected) {

                delete selectedGreeneryMap[item.name];

            } else {

                selectedGreeneryMap[item.name] = 1;
            }

            renderGreeneryCards();

            updateGreenerySelectionUI();
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   GREENERY QUANTITY
   ========================================================= */

$("greenery-minus").addEventListener("click", () => {

    const selected =
        Object.keys(selectedGreeneryMap);

    if (!selected.length) return;

    const last =
        selected[selected.length - 1];

    if (selectedGreeneryMap[last] > 1) {

        selectedGreeneryMap[last]--;

    } else {

        delete selectedGreeneryMap[last];
    }

    updateGreenerySelectionUI();
});


$("greenery-plus").addEventListener("click", () => {

    const selected =
        Object.keys(selectedGreeneryMap);

    if (!selected.length) return;

    const last =
        selected[selected.length - 1];

    if (selectedGreeneryMap[last] < 20) {
        selectedGreeneryMap[last]++;
    }

    updateGreenerySelectionUI();
});


/* =========================================================
   ADD GREENERY
   ========================================================= */

$("add-greenery").addEventListener("click", () => {

    birthday.greenery = [];

    Object.entries(selectedGreeneryMap)
        .forEach(([name, quantity]) => {

            const item =
                greenery.find(
                    greeneryItem =>
                        greeneryItem.name === name
                );

            if (!item) return;

            birthday.greenery.push({
                name: item.name,
                emoji: item.emoji,
                quantity
            });
        });

    updateBasketCount();

    showShopStep(4);
});


/* =========================================================
   SKIP GREENERY
   ========================================================= */

$("skip-greenery").addEventListener("click", () => {

    birthday.greenery = [];

    selectedGreeneryMap = {};

    updateBasketCount();

    showShopStep(4);
});


/* =========================================================
   RIBBONS
   ========================================================= */

function renderRibbonCards() {

    const grid = $("ribbon-grid");

    if (!grid) return;

    grid.innerHTML = "";

    ribbons.forEach(ribbon => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "ribbon-card";

        if (
            selectedRibbon &&
            selectedRibbon.name === ribbon.name
        ) {
            card.classList.add("selected");
        }

        card.style.setProperty(
            "--ribbon-color",
            ribbon.color
        );

        card.innerHTML = `
            <span class="ribbon-symbol">🎀</span>
            <span>${ribbon.name}</span>
        `;

        card.addEventListener("click", () => {

            selectedRibbon = ribbon;

            renderRibbonCards();

            $("ribbon-preview-name").textContent =
                ribbon.name;

            $("ribbon-preview-icon").style.color =
                ribbon.color;

            $("add-ribbon").disabled = false;
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   ADD RIBBON
   ========================================================= */

$("add-ribbon").addEventListener("click", () => {

    if (!selectedRibbon) return;

    birthday.ribbon = {
        name: selectedRibbon.name,
        color: selectedRibbon.color
    };

    showShopStep(5);
});


/* =========================================================
   WRAPPING
   ========================================================= */

function renderWrappingCards() {

    const grid = $("wrapping-grid");

    if (!grid) return;

    grid.innerHTML = "";

    wrappings.forEach(wrapping => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "wrapping-card";

        card.style.setProperty(
            "--wrap-color",
            wrapping.color
        );

        if (
            selectedWrapping &&
            selectedWrapping.name === wrapping.name
        ) {
            card.classList.add("selected");
        }

        card.innerHTML = `
            <span class="paper-preview"></span>
            <span>${wrapping.name}</span>
        `;

        card.addEventListener("click", () => {

            selectedWrapping = wrapping;

            renderWrappingCards();

            $("wrapping-preview-name").textContent =
                wrapping.name;

            $("wrapping-preview").style.setProperty(
                "--preview-wrap",
                wrapping.color
            );

            $("add-wrapping").disabled = false;
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   ADD WRAPPING
   ========================================================= */

$("add-wrapping").addEventListener("click", () => {

    if (!selectedWrapping) return;

    birthday.wrapping = {
        name: selectedWrapping.name,
        color: selectedWrapping.color
    };

    buildFinalBouquet();

    $("bouquet-reveal").classList.remove("hidden");

    document.querySelectorAll(".shop-step").forEach(step => {
        step.classList.remove("active");
    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================================================
   BASKET COUNT
   ========================================================= */

function updateBasketCount() {

    let count = 0;

    birthday.flowers.forEach(item => {
        count += item.quantity;
    });

    birthday.greenery.forEach(item => {
        count += item.quantity;
    });

    $("basket-count").textContent = count;
}


/* =========================================================
   SELECTION UI
   ========================================================= */

function updateSelectionUI() {

    if (firstFlowerSelection) {

        $("selected-flower-1").textContent =
            firstFlowerSelection.name;

        $("flower-quantity").textContent =
            firstFlowerQuantity;

        $("add-first-flower").disabled = false;

    } else {

        $("selected-flower-1").textContent =
            "Nothing chosen yet";

        $("flower-quantity").textContent = "1";

        $("add-first-flower").disabled = true;
    }


    if (secondFlowerSelection) {

        $("selected-flower-2").textContent =
            secondFlowerSelection.name;

        $("flower-quantity-2").textContent =
            secondFlowerQuantity;

        $("add-second-flower").disabled = false;

    } else {

        $("selected-flower-2").textContent =
            "Nothing chosen yet";

        $("flower-quantity-2").textContent = "1";

        $("add-second-flower").disabled = true;
    }


    updateGreenerySelectionUI();
}


function updateGreenerySelectionUI() {

    const names =
        Object.keys(selectedGreeneryMap);

    if (!names.length) {

        $("selected-greenery").textContent =
            "None yet";

        $("greenery-quantity").textContent =
            "1";

        $("add-greenery").disabled = true;

        return;
    }

    const last =
        names[names.length - 1];

    $("selected-greenery").textContent =
        names.length === 1
            ? last
            : `${names.length} types selected`;

    $("greenery-quantity").textContent =
        selectedGreeneryMap[last];

    $("add-greenery").disabled = false;
}


/* =========================================================
   BOUQUET BUILDER
   ========================================================= */

/*
    THIS IS THE IMPORTANT PART.

    The bouquet is built in layers:

        1. paper
        2. stems
        3. greenery
        4. flowers
        5. ribbon

    Flowers are deliberately arranged in a rounded cluster,
    NOT in a horizontal row.
*/

function buildFinalBouquet() {

    const visual = $("bouquet-visual");

    if (!visual) return;

    visual.innerHTML = "";

    /*
        PAPER
    */

    const paper = document.createElement("div");

    paper.className = "bouquet-paper";

    paper.style.setProperty(
        "--wrap-color",
        birthday.wrapping
            ? birthday.wrapping.color
            : "#efb6a0"
    );

    visual.appendChild(paper);


    /*
        STEM CONTAINER
    */

    const stems = document.createElement("div");

    stems.className = "bouquet-stems";

    visual.appendChild(stems);


    /*
        Flatten all flowers according to quantity.
    */

    const flowerInstances = [];

    birthday.flowers.forEach(flower => {

        for (
            let i = 0;
            i < flower.quantity;
            i++
        ) {

            flowerInstances.push({
                ...flower
            });
        }
    });


    /*
        STEMS

        Every flower gets its own visible stem.
    */

    flowerInstances.forEach((flower, index) => {

        const stem =
            document.createElement("span");

        stem.className = "bouquet-stem";

        /*
            Spread the stems slightly.
        */

        const center =
            (flowerInstances.length - 1) / 2;

        const offset =
            (index - center) * 9;

        const angle =
            (index - center) * 1.8;

        stem.style.left =
            `calc(50% + ${offset}px)`;

        stem.style.transform =
            `translateX(-50%) rotate(${angle}deg)`;

        stem.style.height =
            `${190 + (index % 4) * 13}px`;

        stems.appendChild(stem);
    });


    /*
        GREENERY

        Greenery goes behind flower heads.
    */

    buildBouquetGreenery(
        visual,
        flowerInstances.length
    );


    /*
        FLOWER CLUSTER
    */

    buildBouquetFlowers(
        visual,
        flowerInstances
    );


    /*
        RIBBON / BOW
    */

    buildBouquetBow(visual);


    /*
        Details are intentionally emptied.
    */

    const details = $("bouquet-details");

    if (details) {
        details.innerHTML = "";
        details.style.display = "none";
    }
}


/* =========================================================
   FLOWER POSITIONING
   ========================================================= */

function buildBouquetFlowers(
    visual,
    flowerInstances
) {

    /*
        Positions form a bouquet dome.

        x = horizontal spread
        y = vertical height

        The middle flowers are higher.
        Outer flowers are slightly lower.

        This creates the rounded arrangement
        from the reference.
    */

    const positions = [
        [-105, 155],
        [-72, 120],
        [-38, 102],
        [0, 88],
        [38, 102],
        [72, 120],
        [105, 155],

        [-88, 175],
        [-50, 145],
        [-17, 130],
        [18, 130],
        [50, 145],
        [88, 175],

        [-62, 190],
        [-28, 170],
        [8, 165],
        [43, 173],
        [68, 190],

        [-38, 205],
        [0, 195],
        [38, 205]
    ];


    flowerInstances.forEach((flower, index) => {

        const position =
            positions[index % positions.length];

        const row =
            Math.floor(index / positions.length);

        /*
            If there are more than 21 flowers,
            create additional positions around the cluster.
        */

        let x = position[0];
        let y = position[1];

        if (row > 0) {

            const extraIndex =
                index - positions.length;

            x +=
                ((extraIndex % 5) - 2) * 17;

            y -=
                Math.floor(extraIndex / 5) * 18;
        }


        /*
            Convert bouquet coordinates into
            visual coordinates.

            The bouquet center is around x=50%.
        */

        const flowerElement =
            document.createElement("span");

        flowerElement.className =
            "bouquet-flower-head";

        flowerElement.textContent =
            flower.emoji;

        flowerElement.style.left =
            `calc(50% + ${x}px)`;

        flowerElement.style.bottom =
            `${y}px`;

        /*
            Small random-looking but controlled rotation.
        */

        const rotation =
            ((index * 17) % 25) - 12;

        flowerElement.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        /*
            Later flowers appear slightly in front.
        */

        flowerElement.style.zIndex =
            40 + index;

        /*
            Animation delay creates the bouquet
            blooming into place.
        */

        flowerElement.style.animationDelay =
            `${index * 35}ms`;

        visual.appendChild(flowerElement);
    });
}


/* =========================================================
   GREENERY POSITIONING
   ========================================================= */

function buildBouquetGreenery(
    visual,
    flowerCount
) {

    const greeneryInstances = [];

    birthday.greenery.forEach(item => {

        for (
            let i = 0;
            i < item.quantity;
            i++
        ) {

            greeneryInstances.push({
                ...item
            });
        }
    });


    /*
        If the user didn't choose greenery,
        don't create any.
    */

    if (!greeneryInstances.length) {
        return;
    }


    const positions = [
        [-125, 150, -25],
        [125, 150, 25],

        [-112, 188, -35],
        [112, 188, 35],

        [-135, 115, -45],
        [135, 115, 45],

        [-92, 210, -20],
        [92, 210, 20],

        [-145, 175, -48],
        [145, 175, 48]
    ];


    greeneryInstances.forEach((item, index) => {

        const position =
            positions[index % positions.length];

        const leaf =
            document.createElement("span");

        leaf.className =
            "bouquet-greenery-item";

        leaf.textContent =
            item.emoji;

        leaf.style.left =
            `calc(50% + ${position[0]}px)`;

        leaf.style.bottom =
            `${position[1]}px`;

        leaf.style.setProperty(
            "--rotation",
            `${position[2]}deg`
        );

        leaf.style.zIndex =
            25 + index;

        visual.appendChild(leaf);
    });
}


/* =========================================================
   BOUQUET BOW
   ========================================================= */

function buildBouquetBow(visual) {

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.style.setProperty(
        "--bow-color",
        birthday.ribbon
            ? birthday.ribbon.color
            : "#9ccbea"
    );

    bow.innerHTML = `
        <span class="bow-left"></span>
        <span class="bow-right"></span>
        <span class="bow-knot"></span>
        <span class="bow-tail-left"></span>
        <span class="bow-tail-right"></span>
    `;

    visual.appendChild(bow);
}


/* =========================================================
   INITIALIZE SHOP
   ========================================================= */

renderFlowerCards();
renderSecondFlowerCards();
renderGreeneryCards();
renderRibbonCards();
renderWrappingCards();

updateSelectionUI();
updateBasketCount();


/* =========================================================
   FINAL LETTER
   ========================================================= */

$("open-letter").addEventListener("click", () => {

    buildMiniBouquet();

    showScreen("screen-letter");
});


/* =========================================================
   MINI BOUQUET FOR LETTER
   ========================================================= */

function buildMiniBouquet() {

    const container =
        $("final-bouquet-mini");

    if (!container) return;

    container.innerHTML = "";

    /*
        Show the actual selected flower emojis
        rather than a generic 💐.
    */

    const flowersToShow = [];

    birthday.flowers.forEach(item => {

        /*
            We don't need every quantity here.
            The letter bouquet is decorative.
        */

        flowersToShow.push(item);
    });


    flowersToShow
        .slice(0, 9)
        .forEach((flower, index) => {

            const span =
                document.createElement("span");

            span.className =
                "mini-flower";

            span.textContent =
                flower.emoji;

            span.style.animationDelay =
                `${index * .12}s`;

            container.appendChild(span);
        });


    if (birthday.ribbon) {

        const ribbon =
            document.createElement("span");

        ribbon.className =
            "mini-ribbon";

        ribbon.textContent =
            "🎀";

        container.appendChild(ribbon);
    }
}


/* =========================================================
   RESTART
   ========================================================= */

$("restart-birthday").addEventListener("click", () => {

    birthday.name = "";
    birthday.age = 0;

    birthday.flowers = [];
    birthday.greenery = [];

    birthday.ribbon = null;
    birthday.wrapping = null;

    firstFlowerSelection = null;
    secondFlowerSelection = null;

    firstFlowerQuantity = 1;
    secondFlowerQuantity = 1;

    selectedGreeneryMap = {};

    selectedRibbon = null;
    selectedWrapping = null;

    $("name-input").value = "";
    $("age-input").value = "";

    $("personalize-error").textContent = "";

    $("cake-interaction").classList.remove("hidden");
    $("after-cake").classList.add("hidden");

    showScreen("screen-personalize");
});


/* =========================================================
   KEYBOARD SUPPORT
   ========================================================= */

$("name-input").addEventListener("keydown", event => {

    if (event.key === "Enter") {
        $("age-input").focus();
    }
});


$("age-input").addEventListener("keydown", event => {

    if (event.key === "Enter") {
        $("personalize-next").click();
    }
});


/* =========================================================
   PREVENT BUTTON DOUBLE CLICK ISSUES
   ========================================================= */

document.addEventListener("click", event => {

    const button =
        event.target.closest("button");

    if (!button) return;

    button.blur();
});


/* =========================================================
   END
   ========================================================= */
