/* =========================================================
   A LITTLE BIRTHDAY SURPRISE
   FINAL SCRIPT
   ========================================================= */

"use strict";

/* =========================================================
   GLOBAL STATE
   ========================================================= */

const birthdayState = {
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
    { name: "Lavender", emoji: "💜" },
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
    { name: "Baby Blue", color: "#91cbed" },
    { name: "Blush Pink", color: "#e8a6b8" },
    { name: "Rose Pink", color: "#d87896" },
    { name: "Cream", color: "#e8d7b6" },
    { name: "Sage Green", color: "#9dbb9a" },
    { name: "Butter Yellow", color: "#f2d47a" },
    { name: "Dusty Rose", color: "#c98598" },
    { name: "Peach", color: "#efb08f" },
    { name: "White", color: "#ffffff" },
    { name: "Lavender", color: "#b99bd8" }
];


const wrappings = [
    { name: "Peach Blush", color: "#eeb7a1" },
    { name: "Lavender Mist", color: "#bba8dc" },
    { name: "Sage Garden", color: "#a9c4a1" },
    { name: "Rose Paper", color: "#e7a5b7" },
    { name: "Cream Linen", color: "#e8d9c5" },
    { name: "Baby Pink", color: "#f2c4cf" },
    { name: "Soft Blue", color: "#a9cde2" },
    { name: "Dusty Mauve", color: "#b998a8" }
];


/* =========================================================
   HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function safeText(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function showBirthdayScreen(id) {

    document.querySelectorAll(".birthday-screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = $(id);

    if (!target) return;

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   PERSONALIZATION
   ========================================================= */

$("personalize-next")?.addEventListener("click", () => {

    const nameInput = $("name-input");
    const ageInput = $("age-input");
    const error = $("personalize-error");

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    error.textContent = "";

    if (!name) {
        error.textContent = "Please tell me your name first. ♡";
        nameInput.focus();
        return;
    }

    if (!age || age < 1 || age > 120) {
        error.textContent = "Please enter a valid age.";
        ageInput.focus();
        return;
    }

    birthdayState.name = name;
    birthdayState.age = age;

    $("birthday-name-banner").textContent = name;

    showBirthdayScreen("screen-dark-room");
});


/* =========================================================
   DARK ROOM → LIGHTS
   ========================================================= */

$("lights-button")?.addEventListener("click", () => {

    const darkRoom = $("screen-dark-room");

    darkRoom.classList.add("lights-coming-on");

    setTimeout(() => {

        showBirthdayScreen("screen-birthday-room");

        const room = $("screen-birthday-room");

        room.classList.add("room-revealed");

        buildBirthdayAnimals();
        buildBirthdayCandles();

    }, 900);
});


/* =========================================================
   BIRTHDAY ANIMALS
   ========================================================= */

function buildBirthdayAnimals() {

    const animalsContainer =
        document.querySelector(".birthday-animals");

    if (!animalsContainer) return;

    /*
       We keep the original four animals from the HTML,
       but FORCE their sizing/positioning here so they
       cannot collapse into tiny emoji.
    */

    const animalData = [
        {
            selector: ".animal-1",
            emoji: "🐰",
            left: "5%"
        },
        {
            selector: ".animal-2",
            emoji: "🐻",
            left: "29%"
        },
        {
            selector: ".animal-3",
            emoji: "🐱",
            right: "29%"
        },
        {
            selector: ".animal-4",
            emoji: "🐶",
            right: "5%"
        }
    ];

    animalsContainer.style.position = "absolute";
    animalsContainer.style.left = "0";
    animalsContainer.style.right = "0";
    animalsContainer.style.top = "0";
    animalsContainer.style.width = "100%";
    animalsContainer.style.height = "100%";
    animalsContainer.style.zIndex = "40";
    animalsContainer.style.pointerEvents = "none";

    animalData.forEach((animal, index) => {

        const element =
            animalsContainer.querySelector(animal.selector);

        if (!element) return;

        const body = element.querySelector(".animal-body");

        if (!body) return;

        element.style.position = "absolute";
        element.style.bottom = "0";
        element.style.left =
            animal.left || "auto";
        element.style.right =
            animal.right || "auto";

        element.style.width = "70px";
        element.style.height = "82px";

        element.style.display = "flex";
        element.style.alignItems = "flex-end";
        element.style.justifyContent = "center";

        element.style.zIndex = "45";

        body.textContent = animal.emoji;

        /*
           IMPORTANT:
           Do NOT allow the emoji to inherit the tiny
           text size from the surrounding page.
        */

        body.style.display = "block";
        body.style.fontSize = "60px";
        body.style.lineHeight = "1";
        body.style.width = "auto";
        body.style.height = "auto";
        body.style.position = "relative";

        body.style.filter =
            "drop-shadow(0 5px 4px rgba(70,50,50,.15))";

        body.style.animation =
            `birthdayAnimalIdle 3s ease-in-out ${index * 0.3}s infinite`;
    });
}


/* =========================================================
   BIRTHDAY CANDLES
   ========================================================= */

function buildBirthdayCandles() {

    const container = $("cake-candles");

    if (!container) return;

    container.innerHTML = "";

    const age = Math.max(
        1,
        Math.min(
            120,
            Number(birthdayState.age) || 1
        )
    );

    /*
       EXACTLY ONE CANDLE PER YEAR.

       18 years = 18 candles
       20 years = 20 candles
       25 years = 25 candles

       They are automatically arranged in rows so
       large ages don't become an impossible single line.
    */

    const candleCount = age;

    container.className = "cake-candles age-candles";

    const columns =
        age <= 8 ? age :
        age <= 18 ? 9 :
        age <= 30 ? 10 :
        12;

    const rows = Math.ceil(candleCount / columns);

    container.style.display = "grid";
    container.style.gridTemplateColumns =
        `repeat(${columns}, 1fr)`;

    container.style.columnGap = "3px";
    container.style.rowGap = "3px";

    container.style.width =
        age <= 10 ? "150px" : "205px";

    container.style.height =
        `${Math.max(55, rows * 29)}px`;

    container.style.position = "absolute";
    container.style.left = "50%";
    container.style.top =
        age <= 10 ? "-48px" : "-78px";

    container.style.transform =
        "translateX(-50%)";

    container.style.zIndex = "100";

    for (let i = 0; i < candleCount; i++) {

        const candle = document.createElement("div");

        candle.className = "birthday-single-candle";

        candle.innerHTML = `
            <span class="birthday-flame"></span>
            <span class="birthday-wick"></span>
            <span class="birthday-candle-stick"></span>
        `;

        container.appendChild(candle);
    }
}


/* =========================================================
   BLOW OUT CANDLES
   ========================================================= */

$("blow-candles-button")?.addEventListener("click", () => {

    const candles =
        document.querySelectorAll(
            ".birthday-single-candle"
        );

    candles.forEach((candle, index) => {

        setTimeout(() => {
            candle.classList.add("blown");
        }, index * 22);

    });

    const interaction = $("cake-interaction");
    const afterCake = $("after-cake");

    setTimeout(() => {

        if (interaction) {
            interaction.classList.add("hidden");
        }

        if (afterCake) {
            afterCake.classList.remove("hidden");
        }

    }, Math.min(1000, candles.length * 22 + 300));
});


/* =========================================================
   GO TO FLOWER SHOP
   ========================================================= */

$("to-flower-shop")?.addEventListener("click", () => {

    showBirthdayScreen("screen-flower-shop");

    $("bouquet-reveal")?.classList.add("hidden");

    $("shop-step-1")?.classList.add("active");

    [
        "shop-step-2",
        "shop-step-3",
        "shop-step-4",
        "shop-step-5"
    ].forEach(id => {
        $(id)?.classList.remove("active");
    });

    updateShopProgress(1);
});


/* =========================================================
   FLOWER CARDS
   ========================================================= */

function createFlowerCard(flower, container, selectionMode) {

    const card = document.createElement("button");

    card.type = "button";
    card.className = "flower-card";

    card.dataset.flower = flower.name;

    /*
       Lavender gets an actual visible flower drawing
       instead of relying on the purple emoji.
    */

    if (flower.name === "Lavender") {

        card.innerHTML = `
            <span class="custom-flower lavender-flower">
                <i></i><i></i><i></i><i></i><i></i>
            </span>
            <span class="flower-name">Lavender</span>
        `;

    } else {

        card.innerHTML = `
            <span class="emoji-flower">${flower.emoji}</span>
            <span class="flower-name">${safeText(flower.name)}</span>
        `;
    }

    card.addEventListener("click", () => {

        /*
           Each step still has its own current selection,
           but selected flowers are stored in the actual
           bouquet state.
        */

        if (selectionMode === 1) {

            selectedFlower1 = flower;
            quantity1 = 1;

            document
                .querySelectorAll("#flower-grid-1 .flower-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("selected-flower-1").innerHTML =
                renderSmallFlower(flower);

            $("add-first-flower").disabled = false;

        } else {

            selectedFlower2 = flower;
            quantity2 = 1;

            document
                .querySelectorAll("#flower-grid-2 .flower-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("selected-flower-2").innerHTML =
                renderSmallFlower(flower);

            $("add-second-flower").disabled = false;
        }
    });

    container.appendChild(card);
}


function renderSmallFlower(flower) {

    if (flower.name === "Lavender") {

        return `
            <span class="selection-chip">
                <span class="tiny-flower lavender-flower">
                    <i></i><i></i><i></i><i></i><i></i>
                </span>
                Lavender
            </span>
        `;

    }

    return `
        <span class="selection-chip">
            <span class="tiny-flower">
                ${flower.emoji}
            </span>
            ${safeText(flower.name)}
        </span>
    `;
}


/* =========================================================
   FLOWER SELECTION STATE
   ========================================================= */

let selectedFlower1 = null;
let selectedFlower2 = null;

let quantity1 = 1;
let quantity2 = 1;


/* =========================================================
   CREATE FLOWER GRIDS
   ========================================================= */

function createFlowerGrids() {

    const grid1 = $("flower-grid-1");
    const grid2 = $("flower-grid-2");

    if (!grid1 || !grid2) return;

    grid1.innerHTML = "";
    grid2.innerHTML = "";

    flowers.forEach(flower => {
        createFlowerCard(flower, grid1, 1);
    });

    flowers.forEach(flower => {
        createFlowerCard(flower, grid2, 2);
    });
}


/* =========================================================
   QUANTITY CONTROLS
   ========================================================= */

$("quantity-minus")?.addEventListener("click", () => {

    if (quantity1 > 1) quantity1--;

    $("flower-quantity").textContent = quantity1;
});


$("quantity-plus")?.addEventListener("click", () => {

    if (quantity1 < 20) quantity1++;

    $("flower-quantity").textContent = quantity1;
});


$("quantity-minus-2")?.addEventListener("click", () => {

    if (quantity2 > 1) quantity2--;

    $("flower-quantity-2").textContent = quantity2;
});


$("quantity-plus-2")?.addEventListener("click", () => {

    if (quantity2 < 20) quantity2++;

    $("flower-quantity-2").textContent = quantity2;
});


/* =========================================================
   ADD FIRST FLOWER
   ========================================================= */

$("add-first-flower")?.addEventListener("click", () => {

    if (!selectedFlower1) return;

    addFlowerToBouquet(
        selectedFlower1,
        quantity1
    );

    showShopStep(2);
});


/* =========================================================
   ADD SECOND FLOWER
   ========================================================= */

$("add-second-flower")?.addEventListener("click", () => {

    if (!selectedFlower2) return;

    addFlowerToBouquet(
        selectedFlower2,
        quantity2
    );

    showShopStep(3);
});


/* =========================================================
   SKIP SECOND FLOWER
   ========================================================= */

$("skip-second-flower")?.addEventListener("click", () => {
    showShopStep(3);
});


/* =========================================================
   ADD FLOWER TO STATE
   ========================================================= */

function addFlowerToBouquet(flower, quantity) {

    const existing =
        birthdayState.flowers.find(
            item => item.name === flower.name
        );

    if (existing) {
        existing.quantity += quantity;
    } else {
        birthdayState.flowers.push({
            name: flower.name,
            emoji: flower.emoji,
            quantity: quantity
        });
    }

    updateBasketCount();
}


/* =========================================================
   GREENERY
   ========================================================= */

let selectedGreenery = null;
let greeneryQuantity = 1;


function createGreeneryCards() {

    const grid = $("greenery-grid");

    if (!grid) return;

    grid.innerHTML = "";

    greenery.forEach(item => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "greenery-card";

        card.innerHTML = `
            <span class="greenery-emoji">${item.emoji}</span>
            <span>${safeText(item.name)}</span>
        `;

        card.addEventListener("click", () => {

            selectedGreenery = item;

            document
                .querySelectorAll(".greenery-card")
                .forEach(c =>
                    c.classList.remove("selected")
                );

            card.classList.add("selected");

            $("selected-greenery").innerHTML = `
                ${item.emoji} ${safeText(item.name)}
            `;

            $("add-greenery").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("greenery-minus")?.addEventListener("click", () => {

    if (greeneryQuantity > 1) greeneryQuantity--;

    $("greenery-quantity").textContent =
        greeneryQuantity;
});


$("greenery-plus")?.addEventListener("click", () => {

    if (greeneryQuantity < 10) greeneryQuantity++;

    $("greenery-quantity").textContent =
        greeneryQuantity;
});


$("add-greenery")?.addEventListener("click", () => {

    if (!selectedGreenery) return;

    birthdayState.greenery.push({
        name: selectedGreenery.name,
        emoji: selectedGreenery.emoji,
        quantity: greeneryQuantity
    });

    updateBasketCount();

    showShopStep(4);
});


$("skip-greenery")?.addEventListener("click", () => {
    showShopStep(4);
});


/* =========================================================
   RIBBONS
   ========================================================= */

function createRibbonCards() {

    const grid = $("ribbon-grid");

    if (!grid) return;

    grid.innerHTML = "";

    ribbons.forEach(ribbon => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "ribbon-card";

        card.innerHTML = `
            <span
                class="css-ribbon-icon"
                style="--ribbon-color:${ribbon.color}"
            >
                <i></i>
                <i></i>
                <b></b>
            </span>
            <span>${safeText(ribbon.name)}</span>
        `;

        card.addEventListener("click", () => {

            birthdayState.ribbon = ribbon;

            document
                .querySelectorAll(".ribbon-card")
                .forEach(c =>
                    c.classList.remove("selected")
                );

            card.classList.add("selected");

            $("ribbon-preview-name").textContent =
                ribbon.name;

            $("ribbon-preview-icon").innerHTML = `
                <span
                    class="css-ribbon-icon"
                    style="--ribbon-color:${ribbon.color}"
                >
                    <i></i>
                    <i></i>
                    <b></b>
                </span>
            `;

            $("add-ribbon").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("add-ribbon")?.addEventListener("click", () => {

    if (!birthdayState.ribbon) return;

    showShopStep(5);
});


/* =========================================================
   WRAPPING
   ========================================================= */

function createWrappingCards() {

    const grid = $("wrapping-grid");

    if (!grid) return;

    grid.innerHTML = "";

    wrappings.forEach(wrapping => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "wrapping-card";

        card.innerHTML = `
            <span
                class="paper-preview"
                style="--wrap-color:${wrapping.color}"
            ></span>
            <span>${safeText(wrapping.name)}</span>
        `;

        card.addEventListener("click", () => {

            birthdayState.wrapping = wrapping;

            document
                .querySelectorAll(".wrapping-card")
                .forEach(c =>
                    c.classList.remove("selected")
                );

            card.classList.add("selected");

            $("wrapping-preview-name").textContent =
                wrapping.name;

            const preview =
                $("wrapping-preview");

            preview.style.background =
                `linear-gradient(
                    135deg,
                    ${wrapping.color},
                    #fff8f5
                )`;

            $("add-wrapping").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("add-wrapping")?.addEventListener("click", () => {

    if (!birthdayState.wrapping) return;

    buildBouquetVisual();
    showBouquetReveal();
});


/* =========================================================
   SHOP NAVIGATION
   ========================================================= */

function showShopStep(number) {

    for (let i = 1; i <= 5; i++) {

        const step = $(`shop-step-${i}`);

        if (!step) continue;

        step.classList.toggle(
            "active",
            i === number
        );
    }

    updateShopProgress(number);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function updateShopProgress(number) {

    const labels = [
        "Choose your flowers",
        "Add another flower",
        "Choose your greenery",
        "Pick your ribbon",
        "Choose your wrapping"
    ];

    if ($("shop-step-label")) {
        $("shop-step-label").textContent =
            labels[number - 1];
    }

    if ($("shop-step-number")) {
        $("shop-step-number").textContent =
            `${number} / 5`;
    }

    if ($("shop-progress-bar")) {
        $("shop-progress-bar").style.width =
            `${(number / 5) * 100}%`;
    }
}


/* =========================================================
   BASKET
   ========================================================= */

function updateBasketCount() {

    let total = 0;

    birthdayState.flowers.forEach(item => {
        total += item.quantity;
    });

    birthdayState.greenery.forEach(item => {
        total += item.quantity;
    });

    if ($("basket-count")) {
        $("basket-count").textContent = total;
    }
}


/* =========================================================
   FINAL BOUQUET
   ========================================================= */

function buildBouquetVisual() {

    const container = $("bouquet-visual");

    if (!container) return;

    container.innerHTML = "";

    container.style.setProperty(
        "--wrap-color",
        birthdayState.wrapping?.color || "#c9b7df"
    );

    container.style.setProperty(
        "--bow-color",
        birthdayState.ribbon?.color || "#9ed1ee"
    );


    /*
       -----------------------------------------------------
       WRAPPING
       -----------------------------------------------------
    */

    const paper = document.createElement("div");

    paper.className = "bouquet-paper";

    container.appendChild(paper);


    /*
       -----------------------------------------------------
       STEMS
       -----------------------------------------------------
    */

    const stems = document.createElement("div");

    stems.className = "bouquet-stems";

    container.appendChild(stems);


    /*
       -----------------------------------------------------
       GREENERY
       -----------------------------------------------------
    */

    const greeneryLayer = document.createElement("div");

    greeneryLayer.className =
        "bouquet-greenery";

    container.appendChild(greeneryLayer);


    /*
       -----------------------------------------------------
       FLOWER HEADS
       -----------------------------------------------------
    */

    const flowerLayer = document.createElement("div");

    flowerLayer.className =
        "bouquet-flowers";

    container.appendChild(flowerLayer);


    const selectedFlowers = [];

    birthdayState.flowers.forEach(item => {

        for (let i = 0; i < item.quantity; i++) {

            selectedFlowers.push({
                name: item.name,
                emoji: item.emoji
            });
        }
    });


    /*
       Fallback only if absolutely nothing was selected.
       Normally this will never be used.
    */

    if (!selectedFlowers.length) {

        selectedFlowers.push({
            name: "Pink Rose",
            emoji: "🌹"
        });
    }


    /*
       Flower arrangement:
       wide fan shape like a real hand-tied bouquet.
    */

    const positions = createBouquetPositions(
        selectedFlowers.length
    );


    selectedFlowers.forEach((flower, index) => {

        const position =
            positions[index];

        /*
           STEM
        */

        const stem = document.createElement("div");

        stem.className =
            "bouquet-stem";

        stem.style.left =
            `${position.stemX}%`;

        stem.style.bottom =
            "112px";

        stem.style.height =
            `${position.stemHeight}px`;

        stem.style.transform =
            `rotate(${position.stemRotation}deg)`;

        stems.appendChild(stem);


        /*
           FLOWER HEAD
        */

        const head =
            document.createElement("div");

        head.className =
            "bouquet-flower-head";

        head.style.left =
            `${position.x}%`;

        head.style.top =
            `${position.y}%`;

        head.style.setProperty(
            "--rotation",
            `${position.rotation}deg`
        );


        if (flower.name === "Lavender") {

            head.innerHTML = `
                <span class="custom-flower lavender-flower">
                    <i></i><i></i><i></i><i></i><i></i>
                </span>
            `;

        } else {

            head.innerHTML = `
                <span class="bouquet-flower-icon">
                    ${flower.emoji}
                </span>
            `;
        }

        flowerLayer.appendChild(head);
    });


    /*
       -----------------------------------------------------
       GREENERY
       -----------------------------------------------------
    */

    const greeneryEntries = [];

    birthdayState.greenery.forEach(item => {

        for (let i = 0; i < item.quantity; i++) {

            greeneryEntries.push(item);
        }
    });


    greeneryEntries.forEach((item, index) => {

        const leaf =
            document.createElement("div");

        leaf.className =
            "bouquet-greenery-item";

        leaf.textContent =
            item.emoji;

        const side =
            index % 2 === 0 ? -1 : 1;

        leaf.style.left =
            `${50 + side * (28 + (index * 5))}%`;

        leaf.style.top =
            `${28 + (index * 8)}%`;

        leaf.style.setProperty(
            "--rotation",
            `${side * (18 + index * 5)}deg`
        );

        greeneryLayer.appendChild(leaf);
    });


    /*
       -----------------------------------------------------
       RIBBON BOW
       -----------------------------------------------------
    */

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.innerHTML = `
        <span class="bow-loop left"></span>
        <span class="bow-loop right"></span>
        <span class="bow-knot"></span>
        <span class="bow-tail left"></span>
        <span class="bow-tail right"></span>
    `;

    container.appendChild(bow);


    /*
       Hide the old flower-summary/details area.
       The final reveal should LOOK like a gift, not
       like an order receipt.
    */

    const details =
        $("bouquet-details");

    if (details) {
        details.innerHTML = "";
        details.style.display = "none";
    }
}


/* =========================================================
   BOUQUET POSITION GENERATOR
   ========================================================= */

function createBouquetPositions(count) {

    const positions = [];

    /*
       A hand-tied bouquet has:
       - taller flowers at the back
       - medium flowers in the middle
       - shorter flowers at the front
       - stems converging toward the bottom
    */

    const center = 50;

    for (let i = 0; i < count; i++) {

        const normalized =
            count === 1
                ? .5
                : i / (count - 1);

        const spread =
            (normalized - .5) * 66;

        const x =
            center + spread;

        const y =
            23 +
            Math.abs(normalized - .5) * 18 +
            (i % 3) * 4;

        const stemX =
            center +
            spread * .42;

        const stemHeight =
            160 +
            (i % 4) * 18;

        const stemRotation =
            spread * .18;

        const rotation =
            ((i % 5) - 2) * 5;

        positions.push({
            x,
            y,
            stemX,
            stemHeight,
            stemRotation,
            rotation
        });
    }

    return positions;
}


/* =========================================================
   SHOW BOUQUET REVEAL
   ========================================================= */

function showBouquetReveal() {

    [
        "shop-step-1",
        "shop-step-2",
        "shop-step-3",
        "shop-step-4",
        "shop-step-5"
    ].forEach(id => {
        $(id)?.classList.remove("active");
    });

    $("bouquet-reveal")?.classList.remove("hidden");

    /*
       Keep the progress at the final stage.
    */

    updateShopProgress(5);

    setTimeout(() => {

        $("bouquet-reveal")?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 100);
}


/* =========================================================
   LETTER
   ========================================================= */

$("open-letter")?.addEventListener("click", () => {

    $("letter-name").textContent =
        birthdayState.name;

    $("letter-name-inside").textContent =
        birthdayState.name;

    $("final-name").textContent =
        birthdayState.name;

    buildMiniBouquet();

    showBirthdayScreen("screen-letter");
});


/* =========================================================
   MINI BOUQUET
   ========================================================= */

function buildMiniBouquet() {

    const container =
        $("final-bouquet-mini");

    if (!container) return;

    container.innerHTML = "";

    const selected = [];

    birthdayState.flowers.forEach(item => {

        for (
            let i = 0;
            i < Math.min(item.quantity, 8);
            i++
        ) {
            selected.push(item);
        }
    });

    selected.forEach((flower, index) => {

        const item =
            document.createElement("span");

        item.className =
            "mini-flower";

        item.textContent =
            flower.emoji;

        item.style.left =
            `${25 + (index * 50) / Math.max(selected.length - 1, 1)}%`;

        item.style.top =
            `${45 - (index % 3) * 10}%`;

        item.style.transform =
            `translate(-50%, -50%) rotate(${(index % 5 - 2) * 5}deg)`;

        container.appendChild(item);
    });
}


/* =========================================================
   RESTART
   ========================================================= */

$("restart-birthday")?.addEventListener(
    "click",
    () => {

        birthdayState.name = "";
        birthdayState.age = 0;

        birthdayState.flowers = [];
        birthdayState.greenery = [];
        birthdayState.ribbon = null;
        birthdayState.wrapping = null;

        selectedFlower1 = null;
        selectedFlower2 = null;

        quantity1 = 1;
        quantity2 = 1;

        greeneryQuantity = 1;
        selectedGreenery = null;

        if ($("name-input")) {
            $("name-input").value = "";
        }

        if ($("age-input")) {
            $("age-input").value = "";
        }

        $("personalize-error").textContent = "";

        showBirthdayScreen("screen-personalize");

        updateBasketCount();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   INITIALIZE SHOP
   ========================================================= */

createFlowerGrids();
createGreeneryCards();
createRibbonCards();
createWrappingCards();

updateBasketCount();

updateShopProgress(1);


/* =========================================================
   EXTRA BIRTHDAY-ROOM SAFETY
   ========================================================= */

/*
   These rules are deliberately applied through JS too.
   That means even if a CSS rule accidentally makes the
   animals tiny, the birthday scene restores their intended
   dimensions when it opens.
*/

const animalStyleSheet =
    document.createElement("style");

animalStyleSheet.textContent = `

@keyframes birthdayAnimalIdle {

    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }

    50% {
        transform: translateY(-5px) rotate(1deg);
    }
}


/* REAL CANDLE */

.birthday-single-candle {
    position: relative;

    width: 13px;
    height: 27px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    margin: 0 auto;
}


.birthday-candle-stick {
    width: 8px;
    height: 20px;

    border-radius: 3px 3px 2px 2px;

    background:
        repeating-linear-gradient(
            135deg,
            #f3b3c0 0 3px,
            #fff0ed 3px 6px
        );

    box-shadow:
        0 1px 2px rgba(90,50,60,.18);
}


.birthday-wick {
    position: absolute;

    width: 2px;
    height: 4px;

    top: 2px;

    background: #574046;

    border-radius: 2px;

    z-index: 2;
}


.birthday-flame {
    position: absolute;

    top: -13px;

    width: 9px;
    height: 14px;

    border-radius:
        50% 50% 50% 50%;

    background:
        radial-gradient(
            circle at 50% 70%,
            #fff9a7 0 25%,
            #ffc857 35%,
            #ff8a3d 65%,
            transparent 70%
        );

    filter:
        drop-shadow(0 0 5px #ffbf5b);

    animation:
        candleFlame .55s ease-in-out infinite alternate;
}


.birthday-single-candle.blown
.birthday-flame {
    opacity: 0;
    transform: scale(.1);
    transition: .25s ease;
}


@keyframes candleFlame {

    from {
        transform:
            rotate(-4deg)
            scale(.9);
    }

    to {
        transform:
            rotate(4deg)
            scale(1.08);
    }
}


/* Make the animals impossible to accidentally collapse */

.birthday-animals {
    position: absolute !important;
    left: 0 !important;
    right: 0 !important;
    width: 100% !important;
    z-index: 40 !important;
}


.birthday-animals .animal {
    z-index: 45 !important;
}


.birthday-animals .animal-body {
    display: block !important;
    width: auto !important;
    height: auto !important;
    line-height: 1 !important;
    font-size: 60px !important;
}


/* Keep birthday cake above the table */

.birthday-cake {
    z-index: 60 !important;
}


#cake-candles {
    z-index: 100 !important;
}


/* Actual flower stems */

.bouquet-stems {
    z-index: 8 !important;
    pointer-events: none;
}


.bouquet-stem {
    position: absolute;

    width: 5px;

    background:
        linear-gradient(
            90deg,
            #315f3b,
            #71a060,
            #315f3b
        );

    border-radius: 8px;

    transform-origin:
        bottom center;

    z-index: 8;
}


.bouquet-paper {
    z-index: 5 !important;
}


.bouquet-greenery {
    z-index: 12 !important;
}


.bouquet-flowers {
    z-index: 20 !important;
}


.bouquet-bow {
    z-index: 40 !important;
}

`;

document.head.appendChild(animalStyleSheet);


/* =========================================================
   FINISHED
   ========================================================= */

console.log(
    "A Little Birthday Surprise initialized successfully ♡"
);
