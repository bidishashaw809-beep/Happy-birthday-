/* =========================================================
   A LITTLE BIRTHDAY SURPRISE
   FINAL SCRIPT
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
    { name: "Lavender", emoji: "LAVENDER" },
    { name: "Peony", emoji: "🌸" },
    { name: "Lily", emoji: "🌷" },

    { name: "Lotus", emoji: "🪷" },
    { name: "Daffodil", emoji: "🌼" },
    { name: "Poppy", emoji: "🌺" },
    { name: "Carnation", emoji: "🌸" },

    { name: "Camellia", emoji: "🌺" },
    { name: "Marigold", emoji: "🌼" },
    { name: "Bluebell", emoji: "BLUEBELL" },
    { name: "Orchid", emoji: "🌺" }
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
    { name: "Baby Blue", color: "#8dc8ed" },
    { name: "Blush Pink", color: "#e7a8b9" },
    { name: "Rose Pink", color: "#d97f9e" },
    { name: "Cream", color: "#ead8b7" },
    { name: "Sage Green", color: "#9caf8b" },
    { name: "Butter Yellow", color: "#e9d477" },
    { name: "Dusty Rose", color: "#bd8294" },
    { name: "Peach", color: "#efad91" },
    { name: "White", color: "#f4eeee" }
];


const wrappings = [
    { name: "Peach Blush", color: "#efb39c" },
    { name: "Lavender Mist", color: "#c8b5df" },
    { name: "Sage Garden", color: "#b6c8a7" },
    { name: "Rose Paper", color: "#e5a5b5" },
    { name: "Cream Linen", color: "#e9d9bd" },
    { name: "Baby Pink", color: "#efc1ce" },
    { name: "Soft Blue", color: "#b7d2e8" },
    { name: "Dusty Mauve", color: "#b99eae" }
];


/* =========================================================
   GLOBAL STATE
   ========================================================= */

const birthday = {
    name: "",
    age: 0,

    flowers: [],

    greenery: [],

    ribbon: null,

    wrapping: null
};


/* =========================================================
   TEMPORARY SELECTION STATE
   ========================================================= */

let currentFlowerSelection = null;
let currentGreenerySelection = null;

let currentFlowerQuantity = 1;
let currentGreeneryQuantity = 1;


/* =========================================================
   DOM HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function showElement(element) {
    if (element) {
        element.classList.remove("hidden");
    }
}

function hideElement(element) {
    if (element) {
        element.classList.add("hidden");
    }
}


/* =========================================================
   SCREEN NAVIGATION
   ========================================================= */

function showBirthdayScreen(id) {

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
   PERSONALIZE
   ========================================================= */

$("personalize-next").addEventListener("click", () => {

    const nameInput = $("name-input");
    const ageInput = $("age-input");
    const error = $("personalize-error");

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    if (!name) {
        error.textContent = "Tell me your name first ♡";
        nameInput.focus();
        return;
    }

    if (!age || age < 1 || age > 120) {
        error.textContent = "Enter a valid age.";
        ageInput.focus();
        return;
    }

    birthday.name = name;
    birthday.age = age;

    error.textContent = "";

    $("birthday-name-banner").textContent = birthday.name;

    $("letter-name").textContent = birthday.name;
    $("letter-name-inside").textContent = birthday.name;
    $("final-name").textContent = birthday.name;

    createCandles(birthday.age);

    showBirthdayScreen("screen-dark-room");
});


/* =========================================================
   DARK ROOM → LIGHTS
   ========================================================= */

$("lights-button").addEventListener("click", () => {

    showBirthdayScreen("screen-birthday-room");

    const room = $("screen-birthday-room");

    room.classList.remove("room-revealed");

    requestAnimationFrame(() => {

        setTimeout(() => {
            room.classList.add("room-revealed");
        }, 150);

    });
});


/* =========================================================
   CANDLES
   ========================================================= */

function createCandles(age) {

    const container = $("cake-candles");

    container.innerHTML = "";

    const ageString = String(age);

    [...ageString].forEach((digit, index) => {

        const candle = document.createElement("div");

        candle.className = "number-candle";

        candle.innerHTML = `
            <div class="number-flame"></div>
            <div class="number-candle-digit">${digit}</div>
        `;

        candle.style.animationDelay = `${index * 100}ms`;

        container.appendChild(candle);
    });
}


/* =========================================================
   BLOW OUT CANDLES
   ========================================================= */

$("blow-candles-button").addEventListener("click", () => {

    document.querySelectorAll(".number-candle").forEach((candle, index) => {

        setTimeout(() => {
            candle.classList.add("blown");
        }, index * 100);

    });

    $("cake-interaction").classList.add("hidden");

    setTimeout(() => {
        showElement($("after-cake"));
    }, 900);
});


/* =========================================================
   GO TO FLOWER SHOP
   ========================================================= */

$("to-flower-shop").addEventListener("click", () => {

    resetFlowerShop();

    showBirthdayScreen("screen-flower-shop");

    showShopStep(1);
});


/* =========================================================
   FLOWER SHOP STATE
   ========================================================= */

let currentShopStep = 1;


/* =========================================================
   SHOP STEP NAVIGATION
   ========================================================= */

function showShopStep(step) {

    currentShopStep = step;

    document.querySelectorAll(".shop-step").forEach(item => {
        item.classList.remove("active");
    });

    const target = $(`shop-step-${step}`);

    if (target) {
        target.classList.add("active");
    }

    const labels = [
        "Choose your flowers",
        "Add another flower",
        "Choose your greenery",
        "Pick your ribbon",
        "Choose your wrapping"
    ];

    $("shop-step-label").textContent = labels[step - 1];

    $("shop-step-number").textContent = `${step} / 5`;

    $("shop-progress-bar").style.width =
        `${step * 20}%`;

    updateBasketCount();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   BASKET COUNT
   ========================================================= */

function updateBasketCount() {

    let total = 0;

    birthday.flowers.forEach(item => {
        total += item.quantity;
    });

    birthday.greenery.forEach(item => {
        total += item.quantity;
    });

    $("basket-count").textContent = total;
}


/* =========================================================
   FLOWER CARDS
   ========================================================= */

function createFlowerCards(containerId) {

    const container = $(containerId);

    if (!container) return;

    container.innerHTML = "";

    flowers.forEach((flower, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "flower-card";

        card.dataset.index = index;

        const icon =
            flower.emoji === "LAVENDER"
                ? createLavenderIcon()
                : flower.emoji === "BLUEBELL"
                    ? createBluebellIcon()
                    : `<span class="emoji-flower">${flower.emoji}</span>`;

        card.innerHTML = `
            ${icon}
            <span class="flower-name">${flower.name}</span>
        `;

        card.addEventListener("click", () => {

            selectFlower(flower);

            updateFlowerCardStates(container);

        });

        container.appendChild(card);
    });
}


/* =========================================================
   LAVENDER ICON
   ========================================================= */

function createLavenderIcon() {

    return `
        <span class="custom-flower lavender-flower">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
        </span>
    `;
}


/* =========================================================
   BLUEBELL ICON
   ========================================================= */

function createBluebellIcon() {

    return `
        <span class="custom-flower bluebell-flower">
            <i></i>
            <i></i>
            <i></i>
        </span>
    `;
}


/* =========================================================
   SELECT FLOWER
   ========================================================= */

function selectFlower(flower) {

    currentFlowerSelection = flower;

    const existing = birthday.flowers.find(
        item => item.name === flower.name
    );

    if (existing) {

        currentFlowerQuantity = existing.quantity;

    } else {

        currentFlowerQuantity = 1;

        birthday.flowers.push({
            name: flower.name,
            emoji: flower.emoji,
            quantity: 1
        });
    }

    updateFlowerSelectionPanel();

    updateBasketCount();
}


/* =========================================================
   FLOWER CARD STATES
   ========================================================= */

function updateFlowerCardStates(container) {

    container.querySelectorAll(".flower-card").forEach(card => {

        const index = Number(card.dataset.index);

        const flower = flowers[index];

        const selected = birthday.flowers.some(
            item => item.name === flower.name
        );

        card.classList.toggle("selected", selected);
    });
}


/* =========================================================
   FLOWER SELECTION PANEL
   ========================================================= */

function updateFlowerSelectionPanel() {

    const firstPanel = $("selected-flower-1");
    const secondPanel = $("selected-flower-2");

    const html = birthday.flowers.length
        ? birthday.flowers.map(item => {

            const flower = flowers.find(
                f => f.name === item.name
            );

            return `
                <span class="selection-chip">
                    ${getFlowerVisual(flower)}
                    ${item.name} × ${item.quantity}
                </span>
            `;

        }).join("")
        : "Nothing chosen yet";

    if (firstPanel) {
        firstPanel.innerHTML = html;
    }

    if (secondPanel) {
        secondPanel.innerHTML = html;
    }

    $("add-first-flower").disabled =
        birthday.flowers.length === 0;

    $("add-second-flower").disabled =
        birthday.flowers.length === 0;
}


/* =========================================================
   FLOWER VISUAL HELPER
   ========================================================= */

function getFlowerVisual(flower) {

    if (!flower) return "";

    if (flower.emoji === "LAVENDER") {
        return `
            <span class="tiny-flower">
                <span class="custom-flower lavender-flower">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </span>
        `;
    }

    if (flower.emoji === "BLUEBELL") {
        return `
            <span class="tiny-flower">
                <span class="custom-flower bluebell-flower">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </span>
        `;
    }

    return `
        <span class="tiny-flower">
            ${flower.emoji}
        </span>
    `;
}


/* =========================================================
   QUANTITY
   ========================================================= */

function changeFlowerQuantity(amount) {

    if (!currentFlowerSelection) return;

    const item = birthday.flowers.find(
        flower => flower.name === currentFlowerSelection.name
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity < 1) {
        item.quantity = 1;
    }

    if (item.quantity > 12) {
        item.quantity = 12;
    }

    currentFlowerQuantity = item.quantity;

    $("flower-quantity").textContent =
        currentFlowerQuantity;

    $("flower-quantity-2").textContent =
        currentFlowerQuantity;

    updateFlowerSelectionPanel();

    updateBasketCount();
}


$("quantity-minus").addEventListener("click", () => {
    changeFlowerQuantity(-1);
});

$("quantity-plus").addEventListener("click", () => {
    changeFlowerQuantity(1);
});

$("quantity-minus-2").addEventListener("click", () => {
    changeFlowerQuantity(-1);
});

$("quantity-plus-2").addEventListener("click", () => {
    changeFlowerQuantity(1);
});


/* =========================================================
   FLOWER STEP 1
   ========================================================= */

$("add-first-flower").addEventListener("click", () => {

    if (!birthday.flowers.length) return;

    createFlowerCards("flower-grid-2");

    updateFlowerSelectionPanel();

    showShopStep(2);
});


/* =========================================================
   FLOWER STEP 2
   ========================================================= */

$("add-second-flower").addEventListener("click", () => {

    if (!birthday.flowers.length) return;

    createGreeneryCards();

    showShopStep(3);
});


$("skip-second-flower").addEventListener("click", () => {

    createGreeneryCards();

    showShopStep(3);
});


/* =========================================================
   GREENERY
   ========================================================= */

function createGreeneryCards() {

    const container = $("greenery-grid");

    container.innerHTML = "";

    greenery.forEach((item, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "greenery-card";

        card.dataset.index = index;

        card.innerHTML = `
            <span class="greenery-emoji">${item.emoji}</span>
            <span>${item.name}</span>
        `;

        card.addEventListener("click", () => {

            selectGreenery(item);

            container.querySelectorAll(".greenery-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

        });

        container.appendChild(card);
    });
}


function selectGreenery(item) {

    currentGreenerySelection = item;

    const existing = birthday.greenery.find(
        greeneryItem => greeneryItem.name === item.name
    );

    if (existing) {

        currentGreeneryQuantity =
            existing.quantity;

    } else {

        currentGreeneryQuantity = 1;

        birthday.greenery.push({
            name: item.name,
            emoji: item.emoji,
            quantity: 1
        });
    }

    $("selected-greenery").innerHTML = `
        <span class="selection-chip">
            ${item.emoji}
            ${item.name} × ${currentGreeneryQuantity}
        </span>
    `;

    $("add-greenery").disabled = false;

    updateBasketCount();
}


function changeGreeneryQuantity(amount) {

    if (!currentGreenerySelection) return;

    const item = birthday.greenery.find(
        greeneryItem =>
            greeneryItem.name === currentGreenerySelection.name
    );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity < 1) {
        item.quantity = 1;
    }

    if (item.quantity > 10) {
        item.quantity = 10;
    }

    currentGreeneryQuantity = item.quantity;

    $("greenery-quantity").textContent =
        currentGreeneryQuantity;

    $("selected-greenery").innerHTML = `
        <span class="selection-chip">
            ${currentGreenerySelection.emoji}
            ${currentGreenerySelection.name} × ${currentGreeneryQuantity}
        </span>
    `;

    updateBasketCount();
}


$("greenery-minus").addEventListener("click", () => {
    changeGreeneryQuantity(-1);
});

$("greenery-plus").addEventListener("click", () => {
    changeGreeneryQuantity(1);
});


/* =========================================================
   GREENERY CONTINUE
   ========================================================= */

$("skip-greenery").addEventListener("click", () => {

    birthday.greenery = [];

    createRibbonCards();

    showShopStep(4);
});


$("add-greenery").addEventListener("click", () => {

    createRibbonCards();

    showShopStep(4);
});


/* =========================================================
   RIBBONS
   ========================================================= */

function createRibbonCards() {

    const container = $("ribbon-grid");

    container.innerHTML = "";

    ribbons.forEach((ribbon, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "ribbon-card";

        card.dataset.index = index;

        card.innerHTML = `
            <span
                class="css-ribbon-icon"
                style="--ribbon-color:${ribbon.color}"
            >
                <i></i>
                <i></i>
                <b></b>
            </span>

            <span>${ribbon.name}</span>
        `;

        card.addEventListener("click", () => {

            birthday.ribbon = ribbon;

            container.querySelectorAll(".ribbon-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            updateRibbonPreview();

            $("add-ribbon").disabled = false;
        });

        container.appendChild(card);
    });
}


function updateRibbonPreview() {

    if (!birthday.ribbon) return;

    $("ribbon-preview-icon").innerHTML = `
        <span
            class="css-ribbon-icon"
            style="--ribbon-color:${birthday.ribbon.color}"
        >
            <i></i>
            <i></i>
            <b></b>
        </span>
    `;

    $("ribbon-preview-name").textContent =
        birthday.ribbon.name;
}


/* =========================================================
   RIBBON CONTINUE
   ========================================================= */

$("add-ribbon").addEventListener("click", () => {

    createWrappingCards();

    showShopStep(5);
});


/* =========================================================
   WRAPPING
   ========================================================= */

function createWrappingCards() {

    const container = $("wrapping-grid");

    container.innerHTML = "";

    wrappings.forEach((wrapping, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "wrapping-card";

        card.dataset.index = index;

        card.innerHTML = `
            <span
                class="paper-preview"
                style="--wrap-color:${wrapping.color}"
            ></span>

            <span>${wrapping.name}</span>
        `;

        card.addEventListener("click", () => {

            birthday.wrapping = wrapping;

            container.querySelectorAll(".wrapping-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            updateWrappingPreview();

            $("add-wrapping").disabled = false;
        });

        container.appendChild(card);
    });
}


function updateWrappingPreview() {

    if (!birthday.wrapping) return;

    $("wrapping-preview").style.background =
        `linear-gradient(
            135deg,
            ${birthday.wrapping.color}55,
            #fffaf8
        )`;

    $("wrapping-preview-name").textContent =
        birthday.wrapping.name;
}


/* =========================================================
   FINAL WRAP
   ========================================================= */

$("add-wrapping").addEventListener("click", () => {

    buildFinalBouquet();

    document.querySelectorAll(".shop-step").forEach(step => {
        step.classList.remove("active");
    });

    hideElement($("bouquet-reveal"));

    requestAnimationFrame(() => {

        showElement($("bouquet-reveal"));

        $("shop-step-label").textContent =
            "Your bouquet is ready";

        $("shop-step-number").textContent =
            "5 / 5";

        $("shop-progress-bar").style.width =
            "100%";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });
});


/* =========================================================
   FINAL BOUQUET
   ========================================================= */

function buildFinalBouquet() {

    const canvas = $("bouquet-visual");

    canvas.innerHTML = "";


    /* -----------------------------------------
       PAPER
       ----------------------------------------- */

    const paper = document.createElement("div");

    paper.className = "bouquet-paper";

    paper.style.setProperty(
        "--wrap-color",
        birthday.wrapping
            ? birthday.wrapping.color
            : "#c8b5df"
    );

    canvas.appendChild(paper);


    /* -----------------------------------------
       STEMS
       ----------------------------------------- */

    const stemsLayer = document.createElement("div");

    stemsLayer.className = "bouquet-stems";

    canvas.appendChild(stemsLayer);


    /* -----------------------------------------
       FLOWERS
       ----------------------------------------- */

    const flowerLayer = document.createElement("div");

    flowerLayer.className = "bouquet-flowers";

    canvas.appendChild(flowerLayer);


    /* -----------------------------------------
       GREENERY
       ----------------------------------------- */

    const greeneryLayer = document.createElement("div");

    greeneryLayer.className = "bouquet-greenery";

    canvas.appendChild(greeneryLayer);


    /* -----------------------------------------
       FLATTEN FLOWER QUANTITIES
       ----------------------------------------- */

    const flowerInstances = [];

    birthday.flowers.forEach(flower => {

        for (let i = 0; i < flower.quantity; i++) {

            flowerInstances.push({
                ...flower
            });

        }
    });


    /* -----------------------------------------
       LIMIT VISUAL OVERFLOW
       ----------------------------------------- */

    const visibleFlowers =
        flowerInstances.slice(0, 24);


    /*
       Carefully arranged positions.

       These positions are relative to the
       bouquet canvas and create the wide
       rounded bouquet shape from the inspiration.
    */

    const positions = [
        [24, 40],
        [33, 31],
        [43, 24],
        [53, 27],
        [63, 24],
        [73, 31],
        [82, 40],

        [29, 51],
        [39, 45],
        [50, 42],
        [61, 45],
        [71, 51],

        [35, 60],
        [47, 55],
        [58, 55],
        [67, 60],

        [42, 67],
        [55, 64],
        [62, 69],

        [50, 73]
    ];


    /* -----------------------------------------
       CREATE EACH FLOWER + STEM
       ----------------------------------------- */

    visibleFlowers.forEach((flower, index) => {

        const position =
            positions[index % positions.length];

        const x = position[0];
        const y = position[1];

        const rotation =
            ((index % 5) - 2) * 5;


        /* stem */

        const stem =
            document.createElement("div");

        stem.className =
            "bouquet-stem";

        stem.style.left =
            `${x}%`;

        stem.style.top =
            `${y + 3}%`;

        const stemLength =
            230 + ((index % 4) * 15);

        stem.style.height =
            `${stemLength}px`;

        stem.style.transform =
            `rotate(${rotation * .35}deg)`;

        stemsLayer.appendChild(stem);


        /* flower */

        const head =
            document.createElement("div");

        head.className =
            "bouquet-flower-head";

        head.style.left =
            `${x}%`;

        head.style.top =
            `${y}%`;

        head.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );

        head.style.animationDelay =
            `${index * 55}ms`;


        let flowerVisual = "";

        if (flower.emoji === "LAVENDER") {

            flowerVisual = `
                <span class="bouquet-flower-icon">
                    <span class="custom-flower lavender-flower">
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </span>
            `;

        } else if (flower.emoji === "BLUEBELL") {

            flowerVisual = `
                <span class="bouquet-flower-icon">
                    <span class="custom-flower bluebell-flower">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </span>
            `;

        } else {

            flowerVisual = `
                <span class="bouquet-flower-icon emoji-flower">
                    ${flower.emoji}
                </span>
            `;
        }


        head.innerHTML = flowerVisual;

        flowerLayer.appendChild(head);
    });


    /* -----------------------------------------
       GREENERY
       ----------------------------------------- */

    const greeneryInstances = [];

    birthday.greenery.forEach(item => {

        for (let i = 0; i < item.quantity; i++) {

            greeneryInstances.push({
                ...item
            });

        }
    });


    const greeneryPositions = [
        [15, 49, -25],
        [19, 39, -35],
        [23, 29, -20],
        [85, 48, 25],
        [82, 37, 32],
        [78, 27, 20],
        [27, 67, -18],
        [74, 67, 20]
    ];


    greeneryInstances
        .slice(0, 8)
        .forEach((item, index) => {

            const pos =
                greeneryPositions[
                    index % greeneryPositions.length
                ];

            const leaf =
                document.createElement("span");

            leaf.className =
                "bouquet-greenery-item";

            leaf.textContent =
                item.emoji;

            leaf.style.left =
                `${pos[0]}%`;

            leaf.style.top =
                `${pos[1]}%`;

            leaf.style.setProperty(
                "--rotation",
                `${pos[2]}deg`
            );

            greeneryLayer.appendChild(leaf);
        });


    /* -----------------------------------------
       BOW
       ----------------------------------------- */

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.style.setProperty(
        "--bow-color",
        birthday.ribbon
            ? birthday.ribbon.color
            : "#9bc9ed"
    );

    bow.innerHTML = `
        <span class="bow-loop left"></span>
        <span class="bow-loop right"></span>
        <span class="bow-knot"></span>
        <span class="bow-tail left"></span>
        <span class="bow-tail right"></span>
    `;

    canvas.appendChild(bow);


    /* -----------------------------------------
       MINI BOUQUET FOR LETTER
       ----------------------------------------- */

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
        birthday.flowers.slice(0, 5);

    flowersToShow.forEach((flower, index) => {

        const item =
            document.createElement("div");

        item.className =
            "mini-flower";

        let visual = "";

        if (flower.emoji === "LAVENDER") {

            visual = `
                <span class="custom-flower lavender-flower">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            `;

        } else if (flower.emoji === "BLUEBELL") {

            visual = `
                <span class="custom-flower bluebell-flower">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            `;

        } else {

            visual = `
                <span class="mini-flower-icon emoji-flower">
                    ${flower.emoji}
                </span>
            `;
        }

        item.innerHTML = visual;

        item.style.transform =
            `translateY(${Math.abs(index - 2) * 4}px)
             rotate(${(index - 2) * 7}deg)`;

        container.appendChild(item);
    });
}


/* =========================================================
   LETTER
   ========================================================= */

$("open-letter").addEventListener("click", () => {

    $("letter-name").textContent =
        birthday.name;

    $("letter-name-inside").textContent =
        birthday.name;

    $("final-name").textContent =
        birthday.name;

    showBirthdayScreen("screen-letter");
});


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

    currentFlowerSelection = null;
    currentGreenerySelection = null;

    currentFlowerQuantity = 1;
    currentGreeneryQuantity = 1;

    $("name-input").value = "";
    $("age-input").value = "";

    $("personalize-error").textContent = "";

    $("cake-interaction").classList.remove("hidden");

    hideElement($("after-cake"));

    $("screen-birthday-room")
        .classList.remove("room-revealed");

    createCandles(1);

    resetFlowerShop();

    showBirthdayScreen("screen-personalize");
});


/* =========================================================
   RESET FLOWER SHOP
   ========================================================= */

function resetFlowerShop() {

    birthday.flowers = [];
    birthday.greenery = [];

    birthday.ribbon = null;
    birthday.wrapping = null;

    currentFlowerSelection = null;
    currentGreenerySelection = null;

    currentFlowerQuantity = 1;
    currentGreeneryQuantity = 1;

    $("flower-quantity").textContent = "1";
    $("flower-quantity-2").textContent = "1";

    $("greenery-quantity").textContent = "1";

    $("selected-flower-1").textContent =
        "Nothing chosen yet";

    $("selected-flower-2").textContent =
        "Nothing chosen yet";

    $("selected-greenery").textContent =
        "None yet";

    $("add-first-flower").disabled = true;
    $("add-second-flower").disabled = true;
    $("add-greenery").disabled = true;
    $("add-ribbon").disabled = true;
    $("add-wrapping").disabled = true;

    $("ribbon-preview-icon").textContent = "🎀";
    $("ribbon-preview-name").textContent =
        "Choose your ribbon";

    $("wrapping-preview-name").textContent =
        "Choose your wrapping";

    $("wrapping-preview").style.background =
        "";

    createFlowerCards("flower-grid-1");
    createFlowerCards("flower-grid-2");
    createGreeneryCards();
    createRibbonCards();
    createWrappingCards();

    updateBasketCount();
}


/* =========================================================
   INITIALISE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    createFlowerCards("flower-grid-1");
    createFlowerCards("flower-grid-2");

    createGreeneryCards();

    createRibbonCards();

    createWrappingCards();

    updateFlowerSelectionPanel();

    updateBasketCount();

    $("add-first-flower").disabled = true;
    $("add-second-flower").disabled = true;
    $("add-greenery").disabled = true;
    $("add-ribbon").disabled = true;
    $("add-wrapping").disabled = true;
});
