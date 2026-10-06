/* =========================================================
   A LITTLE BIRTHDAY SURPRISE
   FINAL SCRIPT
   ========================================================= */

const state = {
    name: "",
    age: 0,

    flowers: [],
    greenery: [],
    ribbon: null,
    wrapping: null
};


/* =========================================================
   FLOWER DATA
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
    { name: "Bluebell", emoji: "🔷" },
    { name: "Orchid", emoji: "🌸" }
];

const greenery = [
    { name: "Willow", emoji: "🌿" },
    { name: "Mint Leaves", emoji: "🌱" },
    { name: "Eucalyptus", emoji: "🌿" },
    { name: "Ruscus", emoji: "🌿" },
    { name: "Fern", emoji: "🌿" },
    { name: "Olive Branch", emoji: "🌿" },
    { name: "Baby's Breath", emoji: "🌿" },
    { name: "Ivy", emoji: "🍃" },
    { name: "Silver Dollar", emoji: "🌿" },
    { name: "Lemon Leaves", emoji: "🍃" }
];

const ribbons = [
    { name: "Baby Blue", color: "#91c7e8" },
    { name: "Blush Pink", color: "#e6a1b4" },
    { name: "Rose Pink", color: "#d47c9b" },
    { name: "Cream", color: "#e9d8b9" },
    { name: "Sage Green", color: "#9eb69a" },
    { name: "Butter Yellow", color: "#f2d477" },
    { name: "Dusty Rose", color: "#bd7189" },
    { name: "Peach", color: "#efaa91" },
    { name: "White", color: "#f5f1ed" }
];

const wrappings = [
    { name: "Peach Blush", color: "#efb8a5" },
    { name: "Lavender Mist", color: "#bca9d8" },
    { name: "Sage Garden", color: "#a9b99d" },
    { name: "Rose Paper", color: "#e7a6b4" },
    { name: "Cream Linen", color: "#e7d8bd" },
    { name: "Baby Pink", color: "#f3c7d0" },
    { name: "Soft Blue", color: "#a9c9df" },
    { name: "Dusty Mauve", color: "#b999ae" }
];


/* =========================================================
   TEMPORARY SELECTIONS
   ========================================================= */

let currentFlower = null;
let currentFlowerQuantity = 1;

let currentGreenery = null;
let currentGreeneryQuantity = 1;


/* =========================================================
   ELEMENT HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll(".birthday-screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (target) {
        target.classList.add("active");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


/* =========================================================
   PERSONALIZATION
   ========================================================= */

$("personalize-next").addEventListener("click", () => {

    const name = $("name-input").value.trim();
    const age = parseInt($("age-input").value, 10);

    if (!name) {
        $("personalize-error").textContent =
            "Tell me your name first ♡";
        return;
    }

    if (!age || age < 1 || age > 120) {
        $("personalize-error").textContent =
            "Enter a valid age between 1 and 120.";
        return;
    }

    state.name = name;
    state.age = age;

    $("personalize-error").textContent = "";

    $("birthday-name-banner").textContent = name;
    $("letter-name").textContent = name;
    $("letter-name-inside").textContent = name;
    $("final-name").textContent = name;

    createCandles(age);

    showScreen("screen-dark-room");
});


/* =========================================================
   DARK ROOM → LIGHTS
   ========================================================= */

$("lights-button").addEventListener("click", () => {

    showScreen("screen-birthday-room");

    const room = $("screen-birthday-room");

    setTimeout(() => {
        room.classList.add("room-revealed");
    }, 100);

    setTimeout(() => {
        createAnimals();
    }, 400);
});


/* =========================================================
   FULL-BODY ANIMALS
   ========================================================= */

function animalSVG(type) {

    if (type === "rabbit") {
        return `
        <svg class="animal-svg" viewBox="0 0 120 150">
            <ellipse cx="60" cy="143" rx="34" ry="5" fill="#b99f9c" opacity=".25"/>

            <ellipse cx="43" cy="31" rx="10" ry="29"
                     fill="#f4eeee" stroke="#c9b8b7" stroke-width="3"/>
            <ellipse cx="77" cy="31" rx="10" ry="29"
                     fill="#f4eeee" stroke="#c9b8b7" stroke-width="3"/>

            <ellipse cx="43" cy="32" rx="4" ry="20" fill="#f0a5b4"/>
            <ellipse cx="77" cy="32" rx="4" ry="20" fill="#f0a5b4"/>

            <circle cx="60" cy="65" r="34" fill="#f8f4f0"/>

            <ellipse cx="47" cy="63" rx="4" ry="6" fill="#49383b"/>
            <ellipse cx="73" cy="63" rx="4" ry="6" fill="#49383b"/>

            <circle cx="60" cy="76" r="5" fill="#e49aa7"/>

            <path d="M60 78 Q55 87 49 84 M60 78 Q65 87 71 84"
                  fill="none" stroke="#49383b" stroke-width="2"
                  stroke-linecap="round"/>

            <ellipse cx="60" cy="112" rx="29" ry="31" fill="#f8f4f0"/>

            <ellipse cx="42" cy="113" rx="8" ry="23" fill="#f8f4f0"/>
            <ellipse cx="78" cy="113" rx="8" ry="23" fill="#f8f4f0"/>

            <ellipse cx="49" cy="141" rx="11" ry="6" fill="#f8f4f0"/>
            <ellipse cx="71" cy="141" rx="11" ry="6" fill="#f8f4f0"/>
        </svg>`;
    }

    if (type === "bear") {
        return `
        <svg class="animal-svg" viewBox="0 0 120 150">
            <ellipse cx="60" cy="143" rx="34" ry="5" fill="#80645b" opacity=".2"/>

            <circle cx="38" cy="39" r="16" fill="#775349"/>
            <circle cx="82" cy="39" r="16" fill="#775349"/>

            <circle cx="38" cy="39" r="8" fill="#a57868"/>
            <circle cx="82" cy="39" r="8" fill="#a57868"/>

            <circle cx="60" cy="66" r="35" fill="#775349"/>

            <ellipse cx="48" cy="63" rx="4" ry="6" fill="#302629"/>
            <ellipse cx="72" cy="63" rx="4" ry="6" fill="#302629"/>

            <ellipse cx="60" cy="77" rx="14" ry="11" fill="#a57868"/>
            <circle cx="60" cy="73" r="5" fill="#302629"/>

            <path d="M60 78 Q55 85 51 83 M60 78 Q65 85 69 83"
                  fill="none" stroke="#302629" stroke-width="2"/>

            <ellipse cx="60" cy="113" rx="29" ry="32" fill="#775349"/>

            <ellipse cx="40" cy="113" rx="8" ry="23" fill="#775349"/>
            <ellipse cx="80" cy="113" rx="8" ry="23" fill="#775349"/>

            <ellipse cx="48" cy="141" rx="11" ry="6" fill="#775349"/>
            <ellipse cx="72" cy="141" rx="11" ry="6" fill="#775349"/>
        </svg>`;
    }

    if (type === "cat") {
        return `
        <svg class="animal-svg" viewBox="0 0 120 150">
            <ellipse cx="60" cy="143" rx="34" ry="5" fill="#9b8334" opacity=".2"/>

            <path d="M31 47 L34 15 L53 34 Z"
                  fill="#f5c82e" stroke="#d7a91f" stroke-width="2"/>
            <path d="M89 47 L86 15 L67 34 Z"
                  fill="#f5c82e" stroke="#d7a91f" stroke-width="2"/>

            <path d="M39 35 L38 25 L48 36" fill="#f29a9e"/>
            <path d="M81 35 L82 25 L72 36" fill="#f29a9e"/>

            <circle cx="60" cy="65" r="34" fill="#f5c82e"/>

            <ellipse cx="48" cy="63" rx="4" ry="6" fill="#392d20"/>
            <ellipse cx="72" cy="63" rx="4" ry="6" fill="#392d20"/>

            <ellipse cx="60" cy="76" rx="5" ry="4" fill="#e88c98"/>

            <path d="M60 79 Q55 85 50 83 M60 79 Q65 85 70 83"
                  fill="none" stroke="#392d20" stroke-width="2"/>

            <path d="M38 76 L18 72 M38 82 L17 83
                     M82 76 L102 72 M82 82 L103 83"
                  stroke="#665043" stroke-width="2"/>

            <ellipse cx="60" cy="112" rx="28" ry="32" fill="#f5c82e"/>

            <ellipse cx="40" cy="112" rx="8" ry="23" fill="#f5c82e"/>
            <ellipse cx="80" cy="112" rx="8" ry="23" fill="#f5c82e"/>

            <ellipse cx="48" cy="141" rx="11" ry="6" fill="#f5c82e"/>
            <ellipse cx="72" cy="141" rx="11" ry="6" fill="#f5c82e"/>
        </svg>`;
    }

    return `
    <svg class="animal-svg" viewBox="0 0 120 150">
        <ellipse cx="60" cy="143" rx="34" ry="5" fill="#9c7e70" opacity=".2"/>

        <path d="M31 42 Q16 27 22 13 Q40 17 47 43"
              fill="#9a7668"/>
        <path d="M89 42 Q104 27 98 13 Q80 17 73 43"
              fill="#9a7668"/>

        <circle cx="60" cy="65" r="34" fill="#eee2d3"/>

        <ellipse cx="48" cy="63" rx="4" ry="6" fill="#3d302d"/>
        <ellipse cx="72" cy="63" rx="4" ry="6" fill="#3d302d"/>

        <ellipse cx="60" cy="77" rx="13" ry="11" fill="#b88876"/>
        <circle cx="60" cy="73" r="5" fill="#302629"/>

        <path d="M60 78 Q55 85 50 83 M60 78 Q65 85 70 83"
              fill="none" stroke="#302629" stroke-width="2"/>

        <ellipse cx="60" cy="112" rx="29" ry="32" fill="#eee2d3"/>

        <ellipse cx="40" cy="112" rx="8" ry="23" fill="#eee2d3"/>
        <ellipse cx="80" cy="112" rx="8" ry="23" fill="#eee2d3"/>

        <ellipse cx="48" cy="141" rx="11" ry="6" fill="#eee2d3"/>
        <ellipse cx="72" cy="141" rx="11" ry="6" fill="#eee2d3"/>
    </svg>`;
}


function createAnimals() {

    const container = document.querySelector(".birthday-animals");

    if (!container) return;

    container.innerHTML = "";

    const animals = [
        ["rabbit", "animal-1"],
        ["bear", "animal-2"],
        ["cat", "animal-3"],
        ["dog", "animal-4"]
    ];

    animals.forEach(([type, className]) => {

        const div = document.createElement("div");

        div.className = `animal ${className}`;

        div.innerHTML = animalSVG(type);

        container.appendChild(div);
    });
}


/* =========================================================
   NUMBER-SHAPED CANDLES
   ========================================================= */

function createCandles(age) {

    const container = $("cake-candles");

    container.innerHTML = "";

    const digits = String(age).split("");

    digits.forEach((digit, index) => {

        const candle = document.createElement("div");

        candle.className = "number-candle";

        candle.innerHTML = `
            <div class="number-flame"></div>
            <div class="number-candle-digit">${digit}</div>
        `;

        candle.style.setProperty(
            "--candle-delay",
            `${index * 0.15}s`
        );

        container.appendChild(candle);
    });
}


/* =========================================================
   BLOW CANDLES
   ========================================================= */

$("blow-candles-button").addEventListener("click", () => {

    document
        .querySelectorAll(".number-candle")
        .forEach((candle, index) => {

            setTimeout(() => {
                candle.classList.add("blown");
            }, index * 160);
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

    state.flowers = [];
    state.greenery = [];
    state.ribbon = null;
    state.wrapping = null;

    currentFlower = null;
    currentFlowerQuantity = 1;

    currentGreenery = null;
    currentGreeneryQuantity = 1;

    resetFlowerShop();

    showShopStep(1);
});


/* =========================================================
   SHOP SETUP
   ========================================================= */

function resetFlowerShop() {

    createFlowerCards("flower-grid-1");
    createFlowerCards("flower-grid-2");

    createGreeneryCards();
    createRibbonCards();
    createWrappingCards();

    $("selected-flower-1").textContent = "Nothing chosen yet";
    $("selected-flower-2").textContent = "Nothing chosen yet";
    $("selected-greenery").textContent = "None yet";

    $("flower-quantity").textContent = "1";
    $("flower-quantity-2").textContent = "1";
    $("greenery-quantity").textContent = "1";

    $("add-first-flower").disabled = true;
    $("add-second-flower").disabled = true;
    $("add-greenery").disabled = true;
    $("add-ribbon").disabled = true;
    $("add-wrapping").disabled = true;

    $("skip-second-flower").textContent = "Keep it simple";
    $("skip-greenery").textContent = "No greenery";

    $("basket-count").textContent = "0";

    $("bouquet-reveal").classList.add("hidden");
}


/* =========================================================
   SHOP STEP NAVIGATION
   ========================================================= */

const shopLabels = [
    "Choose your flowers",
    "Add another flower",
    "Choose your greenery",
    "Pick your ribbon",
    "Choose your wrapping"
];

function showShopStep(step) {

    document.querySelectorAll(".shop-step").forEach(el => {
        el.classList.remove("active");
    });

    const target = $(`shop-step-${step}`);

    if (target) {
        target.classList.add("active");
    }

    $("shop-step-label").textContent = shopLabels[step - 1];
    $("shop-step-number").textContent = `${step} / 5`;
    $("shop-progress-bar").style.width = `${step * 20}%`;

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   FLOWER CARDS
   ========================================================= */

function createFlowerCards(gridId) {

    const grid = $(gridId);

    grid.innerHTML = "";

    flowers.forEach((flower, index) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "flower-card";

        card.innerHTML = `
            <span class="flower-emoji">${flower.emoji}</span>
            <span class="flower-name">${flower.name}</span>
        `;

        card.dataset.flowerIndex = index;

        card.addEventListener("click", () => {

            currentFlower = flower;
            currentFlowerQuantity = 1;

            const quantityId =
                gridId === "flower-grid-1"
                    ? "flower-quantity"
                    : "flower-quantity-2";

            const selectedId =
                gridId === "flower-grid-1"
                    ? "selected-flower-1"
                    : "selected-flower-2";

            $(quantityId).textContent = "1";
            $(selectedId).textContent =
                `${flower.emoji} ${flower.name}`;

            grid.querySelectorAll(".flower-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            if (gridId === "flower-grid-1") {
                $("add-first-flower").disabled = false;
            } else {
                $("add-second-flower").disabled = false;
            }
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   FLOWER QUANTITY
   ========================================================= */

$("quantity-minus").addEventListener("click", () => {

    if (currentFlowerQuantity > 1) {
        currentFlowerQuantity--;
        $("flower-quantity").textContent =
            currentFlowerQuantity;
    }
});

$("quantity-plus").addEventListener("click", () => {

    if (currentFlowerQuantity < 20) {
        currentFlowerQuantity++;
        $("flower-quantity").textContent =
            currentFlowerQuantity;
    }
});


$("quantity-minus-2").addEventListener("click", () => {

    if (currentFlowerQuantity > 1) {
        currentFlowerQuantity--;
        $("flower-quantity-2").textContent =
            currentFlowerQuantity;
    }
});

$("quantity-plus-2").addEventListener("click", () => {

    if (currentFlowerQuantity < 20) {
        currentFlowerQuantity++;
        $("flower-quantity-2").textContent =
            currentFlowerQuantity;
    }
});


/* =========================================================
   ADD FLOWER
   ========================================================= */

function addFlowerToBouquet() {

    if (!currentFlower) return;

    const existing = state.flowers.find(
        item => item.name === currentFlower.name
    );

    if (existing) {
        existing.quantity += currentFlowerQuantity;
    } else {
        state.flowers.push({
            ...currentFlower,
            quantity: currentFlowerQuantity
        });
    }

    updateBasketCount();
}


/* First flower */

$("add-first-flower").addEventListener("click", () => {

    addFlowerToBouquet();

    currentFlower = null;

    $("add-first-flower").disabled = true;

    showShopStep(2);
});


/* Additional flowers */

$("add-second-flower").addEventListener("click", () => {

    addFlowerToBouquet();

    $("skip-second-flower").textContent =
        "Done adding flowers →";

    $("add-second-flower").disabled = true;

    currentFlower = null;
});


/* Continue from flower step */

$("skip-second-flower").addEventListener("click", () => {

    showShopStep(3);
});


/* =========================================================
   GREENERY
   ========================================================= */

function createGreeneryCards() {

    const grid = $("greenery-grid");

    grid.innerHTML = "";

    greenery.forEach((item, index) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "greenery-card";

        card.innerHTML = `
            <span class="greenery-emoji">${item.emoji}</span>
            <span>${item.name}</span>
        `;

        card.dataset.greeneryIndex = index;

        card.addEventListener("click", () => {

            currentGreenery = item;
            currentGreeneryQuantity = 1;

            $("greenery-quantity").textContent = "1";
            $("selected-greenery").textContent =
                `${item.emoji} ${item.name}`;

            grid.querySelectorAll(".greenery-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("add-greenery").disabled = false;
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   GREENERY QUANTITY
   ========================================================= */

$("greenery-minus").addEventListener("click", () => {

    if (currentGreeneryQuantity > 1) {
        currentGreeneryQuantity--;

        $("greenery-quantity").textContent =
            currentGreeneryQuantity;
    }
});

$("greenery-plus").addEventListener("click", () => {

    if (currentGreeneryQuantity < 20) {
        currentGreeneryQuantity++;

        $("greenery-quantity").textContent =
            currentGreeneryQuantity;
    }
});


/* =========================================================
   ADD GREENERY
   ========================================================= */

$("add-greenery").addEventListener("click", () => {

    if (!currentGreenery) return;

    const existing = state.greenery.find(
        item => item.name === currentGreenery.name
    );

    if (existing) {
        existing.quantity += currentGreeneryQuantity;
    } else {
        state.greenery.push({
            ...currentGreenery,
            quantity: currentGreeneryQuantity
        });
    }

    updateBasketCount();

    $("skip-greenery").textContent =
        "Done with greenery →";

    $("add-greenery").disabled = true;

    currentGreenery = null;
});


$("skip-greenery").addEventListener("click", () => {

    showShopStep(4);
});


/* =========================================================
   RIBBONS
   ========================================================= */

function createRibbonCards() {

    const grid = $("ribbon-grid");

    grid.innerHTML = "";

    ribbons.forEach((ribbon, index) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "ribbon-card";

        card.innerHTML = `
            <span
                class="ribbon-symbol"
                style="--ribbon-color:${ribbon.color}"
            >🎀</span>
            <span>${ribbon.name}</span>
        `;

        card.addEventListener("click", () => {

            state.ribbon = ribbon;

            grid.querySelectorAll(".ribbon-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("ribbon-preview-icon").textContent = "🎀";
            $("ribbon-preview-name").textContent =
                ribbon.name;

            $("add-ribbon").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("add-ribbon").addEventListener("click", () => {

    if (!state.ribbon) return;

    showShopStep(5);
});


/* =========================================================
   WRAPPING
   ========================================================= */

function createWrappingCards() {

    const grid = $("wrapping-grid");

    grid.innerHTML = "";

    wrappings.forEach(wrap => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "wrapping-card";

        card.innerHTML = `
            <span
                class="paper-preview"
                style="--wrap-color:${wrap.color}"
            ></span>
            <span>${wrap.name}</span>
        `;

        card.addEventListener("click", () => {

            state.wrapping = wrap;

            grid.querySelectorAll(".wrapping-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("wrapping-preview-name").textContent =
                wrap.name;

            $("add-wrapping").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("add-wrapping").addEventListener("click", () => {

    if (!state.wrapping) return;

    document.querySelectorAll(".shop-step")
        .forEach(step => step.classList.remove("active"));

    $("bouquet-reveal").classList.remove("hidden");

    buildBouquet();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================================================
   BASKET
   ========================================================= */

function updateBasketCount() {

    const flowersCount = state.flowers.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    const greeneryCount = state.greenery.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    $("basket-count").textContent =
        flowersCount + greeneryCount;
}


/* =========================================================
   BOUQUET
   ========================================================= */

function buildBouquet() {

    const container = $("bouquet-visual");

    container.innerHTML = "";

    const paper = document.createElement("div");

    paper.className = "bouquet-paper";

    paper.style.setProperty(
        "--wrap-color",
        state.wrapping.color
    );

    container.appendChild(paper);


    /* -------------------------------
       Stems
       ------------------------------- */

    const stemLayer = document.createElement("div");

    stemLayer.className = "bouquet-stems";

    container.appendChild(stemLayer);


    /* -------------------------------
       Flower positions
       ------------------------------- */

    const flowerPositions = [
        { x: 19, y: 115, r: -12 },
        { x: 29, y: 82, r: -8 },
        { x: 39, y: 105, r: 5 },
        { x: 49, y: 72, r: -4 },
        { x: 59, y: 100, r: 7 },
        { x: 69, y: 75, r: 4 },
        { x: 79, y: 110, r: 12 },
        { x: 34, y: 135, r: -7 },
        { x: 50, y: 125, r: 2 },
        { x: 66, y: 132, r: 9 },
        { x: 25, y: 150, r: -15 },
        { x: 75, y: 148, r: 14 }
    ];


    /* -------------------------------
       Flatten selected flowers
       ------------------------------- */

    const flowerInstances = [];

    state.flowers.forEach(item => {

        for (let i = 0; i < item.quantity; i++) {

            flowerInstances.push({
                ...item
            });
        }
    });


    /*
       Limit visual flowers so huge quantities
       don't destroy the bouquet.
    */

    const visibleFlowers =
        flowerInstances.slice(0, 12);


    /* -------------------------------
       Create stems first
       ------------------------------- */

    visibleFlowers.forEach((flower, index) => {

        const pos =
            flowerPositions[
                index % flowerPositions.length
            ];

        const stem = document.createElement("span");

        stem.className = "bouquet-stem";

        const stemAngle =
            ((50 - pos.x) * 0.22) + (pos.r * 0.25);

        const stemHeight =
            230 + Math.abs(pos.x - 50) * 0.6;

        stem.style.left = `${50 + (pos.x - 50) * .72}%`;

        stem.style.bottom =
            `${90 + Math.abs(pos.x - 50) * .25}px`;

        stem.style.height =
            `${stemHeight}px`;

        stem.style.transform =
            `rotate(${stemAngle}deg)`;

        stemLayer.appendChild(stem);
    });


    /* -------------------------------
       Greenery
       ------------------------------- */

    const greeneryLayer =
        document.createElement("div");

    greeneryLayer.className =
        "bouquet-greenery";

    container.appendChild(greeneryLayer);

    const greeneryPositions = [
        { x: 12, y: 175, r: -28 },
        { x: 20, y: 125, r: -18 },
        { x: 83, y: 120, r: 18 },
        { x: 91, y: 170, r: 28 },
        { x: 31, y: 165, r: -12 },
        { x: 72, y: 165, r: 14 }
    ];

    const greeneryInstances = [];

    state.greenery.forEach(item => {

        for (let i = 0; i < item.quantity; i++) {

            greeneryInstances.push({
                ...item
            });
        }
    });

    greeneryInstances
        .slice(0, 7)
        .forEach((item, index) => {

            const pos =
                greeneryPositions[
                    index % greeneryPositions.length
                ];

            const leaf = document.createElement("span");

            leaf.className =
                "bouquet-greenery-item";

            leaf.textContent =
                item.emoji;

            leaf.style.left =
                `${pos.x}%`;

            leaf.style.top =
                `${pos.y}px`;

            leaf.style.setProperty(
                "--rotation",
                `${pos.r}deg`
            );

            greeneryLayer.appendChild(leaf);
        });


    /* -------------------------------
       Flowers
       ------------------------------- */

    const flowerLayer =
        document.createElement("div");

    flowerLayer.className =
        "bouquet-flowers";

    container.appendChild(flowerLayer);


    visibleFlowers.forEach((flower, index) => {

        const pos =
            flowerPositions[
                index % flowerPositions.length
            ];

        const head = document.createElement("span");

        head.className =
            "bouquet-flower-head";

        head.textContent =
            flower.emoji;

        head.title =
            flower.name;

        head.style.left =
            `${pos.x}%`;

        head.style.top =
            `${pos.y}px`;

        head.style.setProperty(
            "--rotation",
            `${pos.r}deg`
        );

        head.style.animationDelay =
            `${index * .045}s`;

        flowerLayer.appendChild(head);
    });


    /* -------------------------------
       Ribbon
       ------------------------------- */

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.style.setProperty(
        "--bow-color",
        state.ribbon
            ? state.ribbon.color
            : "#9bc7e4"
    );

    bow.innerHTML = `
        <span class="bow-left"></span>
        <span class="bow-right"></span>
        <span class="bow-knot"></span>
        <span class="bow-tail-left"></span>
        <span class="bow-tail-right"></span>
    `;

    container.appendChild(bow);


    /* -------------------------------
       Mini bouquet for letter
       ------------------------------- */

    buildMiniBouquet();
}


/* =========================================================
   MINI BOUQUET
   ========================================================= */

function buildMiniBouquet() {

    const container =
        $("final-bouquet-mini");

    container.innerHTML = "";

    const flowersToShow =
        state.flowers.flatMap(item =>
            Array(item.quantity).fill(item)
        ).slice(0, 7);

    flowersToShow.forEach((flower, index) => {

        const span =
            document.createElement("span");

        span.className =
            "mini-flower";

        span.textContent =
            flower.emoji;

        span.style.transform =
            `rotate(${(index - 3) * 5}deg)`;

        container.appendChild(span);
    });

    if (state.ribbon) {

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
   LETTER
   ========================================================= */

$("open-letter").addEventListener("click", () => {

    showScreen("screen-letter");

    buildMiniBouquet();
});


/* =========================================================
   RESTART
   ========================================================= */

$("restart-birthday").addEventListener("click", () => {

    location.reload();
});


/* =========================================================
   INITIAL STATE
   ========================================================= */

createAnimals();
