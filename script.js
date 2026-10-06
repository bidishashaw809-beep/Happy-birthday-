/* =========================================================
   A LITTLE BIRTHDAY SURPRISE
   FINAL SCRIPT — MULTI FLOWER + PROPER BOUQUET
   ========================================================= */

const state = {
    name: "",
    age: 0,
    flowers: [],
    greenery: [],
    ribbon: null,
    wrapping: null
};

const flowers = [
    { name:"Red Rose", emoji:"🌹", type:"rose-red" },
    { name:"Pink Rose", emoji:"🌹", type:"rose-pink" },
    { name:"White Rose", emoji:"🌹", type:"rose-white" },
    { name:"Yellow Rose", emoji:"🌹", type:"rose-yellow" },
    { name:"Tulip", emoji:"🌷", type:"tulip" },
    { name:"Sunflower", emoji:"🌻", type:"sunflower" },
    { name:"Daisy", emoji:"🌼", type:"daisy" },
    { name:"Hibiscus", emoji:"🌺", type:"hibiscus" },
    { name:"Cherry Blossom", emoji:"🌸", type:"cherry" },
    { name:"Lavender", emoji:"", type:"lavender" },
    { name:"Peony", emoji:"🌸", type:"peony" },
    { name:"Lily", emoji:"🌷", type:"lily" },
    { name:"Lotus", emoji:"🪷", type:"lotus" },
    { name:"Daffodil", emoji:"🌼", type:"daffodil" },
    { name:"Poppy", emoji:"🌺", type:"poppy" },
    { name:"Carnation", emoji:"🌸", type:"carnation" },
    { name:"Camellia", emoji:"🌺", type:"camellia" },
    { name:"Marigold", emoji:"🌼", type:"marigold" },
    { name:"Bluebell", emoji:"", type:"bluebell" },
    { name:"Orchid", emoji:"🌸", type:"orchid" }
];

const greenery = [
    {name:"Willow",emoji:"🌿"},
    {name:"Mint Leaves",emoji:"🌱"},
    {name:"Eucalyptus",emoji:"🌿"},
    {name:"Ruscus",emoji:"🌿"},
    {name:"Fern",emoji:"🌿"},
    {name:"Olive Branch",emoji:"🌿"},
    {name:"Baby's Breath",emoji:"🌿"},
    {name:"Ivy",emoji:"🍃"},
    {name:"Silver Dollar",emoji:"🌿"},
    {name:"Lemon Leaves",emoji:"🍃"}
];

const ribbons = [
    {name:"Baby Blue",color:"#91c7e8"},
    {name:"Blush Pink",color:"#e6a1b4"},
    {name:"Rose Pink",color:"#d47c9b"},
    {name:"Cream",color:"#e9d8b9"},
    {name:"Sage Green",color:"#9eb69a"},
    {name:"Butter Yellow",color:"#f2d477"},
    {name:"Dusty Rose",color:"#bd7189"},
    {name:"Peach",color:"#efaa91"},
    {name:"White",color:"#f5f1ed"}
];

const wrappings = [
    {name:"Peach Blush",color:"#efb8a5"},
    {name:"Lavender Mist",color:"#bca9d8"},
    {name:"Sage Garden",color:"#a9b99d"},
    {name:"Rose Paper",color:"#e7a6b4"},
    {name:"Cream Linen",color:"#e7d8bd"},
    {name:"Baby Pink",color:"#f3c7d0"},
    {name:"Soft Blue",color:"#a9c9df"},
    {name:"Dusty Mauve",color:"#b999ae"}
];


/* =========================================================
   TEMPORARY SELECTIONS
   ========================================================= */

let selectedFlowers1 = [];
let selectedFlowers2 = [];

let currentFlower1 = null;
let currentFlower2 = null;

let currentFlowerQuantity1 = 1;
let currentFlowerQuantity2 = 1;

let currentGreenery = null;
let currentGreeneryQuantity = 1;


/* =========================================================
   HELPERS
   ========================================================= */

const $ = id => document.getElementById(id);

function showScreen(id) {
    document.querySelectorAll(".birthday-screen")
        .forEach(screen => screen.classList.remove("active"));

    const screen = $(id);

    if (screen) {
        screen.classList.add("active");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
    }
}


/* =========================================================
   FLOWER VISUAL
   ========================================================= */

function flowerVisual(flower, sizeClass = "") {

    if (flower.type === "lavender") {
        return `
            <span class="custom-flower lavender-flower ${sizeClass}">
                <i></i><i></i><i></i><i></i><i></i>
            </span>
        `;
    }

    if (flower.type === "bluebell") {
        return `
            <span class="custom-flower bluebell-flower ${sizeClass}">
                <i></i><i></i><i></i>
            </span>
        `;
    }

    return `
        <span class="emoji-flower ${sizeClass}">
            ${flower.emoji}
        </span>
    `;
}


/* =========================================================
   PERSONALIZATION
   ========================================================= */

$("personalize-next").addEventListener("click", () => {

    const name = $("name-input").value.trim();
    const age = parseInt($("age-input").value,10);

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
   LIGHTS
   ========================================================= */

$("lights-button").addEventListener("click", () => {

    showScreen("screen-birthday-room");

    setTimeout(() => {
        $("screen-birthday-room").classList.add("room-revealed");
    },100);

    setTimeout(() => {
        createAnimals();
    },400);
});


/* =========================================================
   ANIMALS
   ========================================================= */

function animalSVG(type) {

    if (type === "rabbit") {
        return `
        <svg class="animal-svg" viewBox="0 0 120 150">
            <ellipse cx="60" cy="143" rx="34" ry="5" fill="#b99f9c" opacity=".25"/>
            <ellipse cx="43" cy="31" rx="10" ry="29" fill="#f4eeee" stroke="#c9b8b7" stroke-width="3"/>
            <ellipse cx="77" cy="31" rx="10" ry="29" fill="#f4eeee" stroke="#c9b8b7" stroke-width="3"/>
            <ellipse cx="43" cy="32" rx="4" ry="20" fill="#f0a5b4"/>
            <ellipse cx="77" cy="32" rx="4" ry="20" fill="#f0a5b4"/>
            <circle cx="60" cy="65" r="34" fill="#f8f4f0"/>
            <ellipse cx="47" cy="63" rx="4" ry="6" fill="#49383b"/>
            <ellipse cx="73" cy="63" rx="4" ry="6" fill="#49383b"/>
            <circle cx="60" cy="76" r="5" fill="#e49aa7"/>
            <path d="M60 78Q55 87 49 84M60 78Q65 87 71 84" fill="none" stroke="#49383b" stroke-width="2"/>
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
            <path d="M60 78Q55 85 51 83M60 78Q65 85 69 83" fill="none" stroke="#302629" stroke-width="2"/>
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
            <path d="M31 47L34 15L53 34Z" fill="#f5c82e"/>
            <path d="M89 47L86 15L67 34Z" fill="#f5c82e"/>
            <path d="M39 35L38 25L48 36M81 35L82 25L72 36" fill="#f29a9e"/>
            <circle cx="60" cy="65" r="34" fill="#f5c82e"/>
            <ellipse cx="48" cy="63" rx="4" ry="6" fill="#392d20"/>
            <ellipse cx="72" cy="63" rx="4" ry="6" fill="#392d20"/>
            <ellipse cx="60" cy="76" rx="5" ry="4" fill="#e88c98"/>
            <path d="M60 79Q55 85 50 83M60 79Q65 85 70 83" fill="none" stroke="#392d20" stroke-width="2"/>
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
        <path d="M31 42Q16 27 22 13Q40 17 47 43" fill="#9a7668"/>
        <path d="M89 42Q104 27 98 13Q80 17 73 43" fill="#9a7668"/>
        <circle cx="60" cy="65" r="34" fill="#eee2d3"/>
        <ellipse cx="48" cy="63" rx="4" ry="6" fill="#3d302d"/>
        <ellipse cx="72" cy="63" rx="4" ry="6" fill="#3d302d"/>
        <ellipse cx="60" cy="77" rx="13" ry="11" fill="#b88876"/>
        <circle cx="60" cy="73" r="5" fill="#302629"/>
        <path d="M60 78Q55 85 50 83M60 78Q65 85 70 83" fill="none" stroke="#302629" stroke-width="2"/>
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

    [
        ["rabbit","animal-1"],
        ["bear","animal-2"],
        ["cat","animal-3"],
        ["dog","animal-4"]
    ].forEach(([type,className]) => {

        const div = document.createElement("div");

        div.className = `animal ${className}`;

        div.innerHTML = animalSVG(type);

        container.appendChild(div);
    });
}


/* =========================================================
   CANDLES
   ========================================================= */

function createCandles(age) {

    const container = $("cake-candles");

    container.innerHTML = "";

    String(age).split("").forEach((digit,index) => {

        const candle = document.createElement("div");

        candle.className = "number-candle";

        candle.innerHTML = `
            <div class="number-flame"></div>
            <div class="number-candle-digit">${digit}</div>
        `;

        candle.style.setProperty(
            "--candle-delay",
            `${index * .15}s`
        );

        container.appendChild(candle);
    });
}


$("blow-candles-button").addEventListener("click", () => {

    document.querySelectorAll(".number-candle")
        .forEach((candle,index) => {

            setTimeout(() => {
                candle.classList.add("blown");
            },index * 160);
        });

    $("cake-interaction").classList.add("hidden");

    setTimeout(() => {
        $("after-cake").classList.remove("hidden");
    },900);
});


$("to-flower-shop").addEventListener("click", () => {

    showScreen("screen-flower-shop");

    resetFlowerShop();

    showShopStep(1);
});


/* =========================================================
   SHOP
   ========================================================= */

function resetFlowerShop() {

    state.flowers = [];
    state.greenery = [];
    state.ribbon = null;
    state.wrapping = null;

    selectedFlowers1 = [];
    selectedFlowers2 = [];

    currentFlower1 = null;
    currentFlower2 = null;

    currentFlowerQuantity1 = 1;
    currentFlowerQuantity2 = 1;

    currentGreenery = null;
    currentGreeneryQuantity = 1;

    createFlowerCards("flower-grid-1",1);
    createFlowerCards("flower-grid-2",2);

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

    $("basket-count").textContent = "0";

    $("bouquet-reveal").classList.add("hidden");
}


const shopLabels = [
    "Choose your flowers",
    "Add another flower",
    "Choose your greenery",
    "Pick your ribbon",
    "Choose your wrapping"
];

function showShopStep(step) {

    document.querySelectorAll(".shop-step")
        .forEach(el => el.classList.remove("active"));

    const target = $(`shop-step-${step}`);

    if (target) {
        target.classList.add("active");
    }

    $("shop-step-label").textContent =
        shopLabels[step-1];

    $("shop-step-number").textContent =
        `${step} / 5`;

    $("shop-progress-bar").style.width =
        `${step * 20}%`;

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


/* =========================================================
   MULTI FLOWER SELECTION
   ========================================================= */

function createFlowerCards(gridId,group) {

    const grid = $(gridId);

    grid.innerHTML = "";

    flowers.forEach((flower,index) => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "flower-card";

        card.innerHTML = `
            ${flowerVisual(flower)}
            <span class="flower-name">${flower.name}</span>
        `;

        card.dataset.flowerIndex = index;

        card.addEventListener("click",() => {

            const list =
                group === 1
                    ? selectedFlowers1
                    : selectedFlowers2;

            const already =
                list.find(item => item.name === flower.name);

            if (already) {

                const position =
                    list.findIndex(
                        item => item.name === flower.name
                    );

                list.splice(position,1);

                card.classList.remove("selected");

                if (
                    group === 1 &&
                    currentFlower1 &&
                    currentFlower1.name === flower.name
                ) {
                    currentFlower1 = null;
                }

                if (
                    group === 2 &&
                    currentFlower2 &&
                    currentFlower2.name === flower.name
                ) {
                    currentFlower2 = null;
                }

            } else {

                list.push({
                    ...flower,
                    quantity:1
                });

                card.classList.add("selected");

                if (group === 1) {
                    currentFlower1 = flower;
                    currentFlowerQuantity1 = 1;
                } else {
                    currentFlower2 = flower;
                    currentFlowerQuantity2 = 1;
                }
            }

            updateFlowerSelectionDisplay(group);
        });

        grid.appendChild(card);
    });
}


/* =========================================================
   FLOWER SELECTION DISPLAY
   ========================================================= */

function updateFlowerSelectionDisplay(group) {

    const list =
        group === 1
            ? selectedFlowers1
            : selectedFlowers2;

    const selectedId =
        group === 1
            ? "selected-flower-1"
            : "selected-flower-2";

    const addButton =
        group === 1
            ? $("add-first-flower")
            : $("add-second-flower");

    const quantity =
        group === 1
            ? currentFlowerQuantity1
            : currentFlowerQuantity2;

    if (!list.length) {

        $(selectedId).textContent =
            "Nothing chosen yet";

        addButton.disabled = true;

        return;
    }

    $(selectedId).innerHTML =
        list.map(item => `
            <span class="selection-chip">
                ${flowerVisual(item,"tiny-flower")}
                ${item.name} × ${item.quantity}
            </span>
        `).join("");

    addButton.disabled = false;

    if (group === 1) {
        $("flower-quantity").textContent = quantity;
    } else {
        $("flower-quantity-2").textContent = quantity;
    }
}


/* =========================================================
   QUANTITY — FIRST GROUP
   ========================================================= */

$("quantity-minus").addEventListener("click",() => {

    if (!currentFlower1) return;

    if (currentFlowerQuantity1 > 1) {
        currentFlowerQuantity1--;

        const item =
            selectedFlowers1.find(
                x => x.name === currentFlower1.name
            );

        if (item) {
            item.quantity = currentFlowerQuantity1;
        }

        updateFlowerSelectionDisplay(1);
    }
});


$("quantity-plus").addEventListener("click",() => {

    if (!currentFlower1) return;

    if (currentFlowerQuantity1 < 20) {
        currentFlowerQuantity1++;

        const item =
            selectedFlowers1.find(
                x => x.name === currentFlower1.name
            );

        if (item) {
            item.quantity = currentFlowerQuantity1;
        }

        updateFlowerSelectionDisplay(1);
    }
});


/* =========================================================
   QUANTITY — SECOND GROUP
   ========================================================= */

$("quantity-minus-2").addEventListener("click",() => {

    if (!currentFlower2) return;

    if (currentFlowerQuantity2 > 1) {
        currentFlowerQuantity2--;

        const item =
            selectedFlowers2.find(
                x => x.name === currentFlower2.name
            );

        if (item) {
            item.quantity = currentFlowerQuantity2;
        }

        updateFlowerSelectionDisplay(2);
    }
});


$("quantity-plus-2").addEventListener("click",() => {

    if (!currentFlower2) return;

    if (currentFlowerQuantity2 < 20) {
        currentFlowerQuantity2++;

        const item =
            selectedFlowers2.find(
                x => x.name === currentFlower2.name
            );

        if (item) {
            item.quantity = currentFlowerQuantity2;
        }

        updateFlowerSelectionDisplay(2);
    }
});


/* =========================================================
   ADD FIRST GROUP
   ========================================================= */

$("add-first-flower").addEventListener("click",() => {

    selectedFlowers1.forEach(item => {

        const existing =
            state.flowers.find(
                flower => flower.name === item.name
            );

        if (existing) {
            existing.quantity += item.quantity;
        } else {
            state.flowers.push({...item});
        }
    });

    updateBasketCount();

    showShopStep(2);
});


/* =========================================================
   ADD SECOND GROUP
   ========================================================= */

$("add-second-flower").addEventListener("click",() => {

    selectedFlowers2.forEach(item => {

        const existing =
            state.flowers.find(
                flower => flower.name === item.name
            );

        if (existing) {
            existing.quantity += item.quantity;
        } else {
            state.flowers.push({...item});
        }
    });

    updateBasketCount();

    showShopStep(3);
});


$("skip-second-flower").addEventListener("click",() => {

    showShopStep(3);
});


/* =========================================================
   GREENERY
   ========================================================= */

function createGreeneryCards() {

    const grid = $("greenery-grid");

    grid.innerHTML = "";

    greenery.forEach(item => {

        const card = document.createElement("button");

        card.type = "button";
        card.className = "greenery-card";

        card.innerHTML = `
            <span class="greenery-emoji">${item.emoji}</span>
            <span>${item.name}</span>
        `;

        card.addEventListener("click",() => {

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


$("greenery-minus").addEventListener("click",() => {

    if (!currentGreenery) return;

    if (currentGreeneryQuantity > 1) {
        currentGreeneryQuantity--;

        $("greenery-quantity").textContent =
            currentGreeneryQuantity;
    }
});


$("greenery-plus").addEventListener("click",() => {

    if (!currentGreenery) return;

    if (currentGreeneryQuantity < 20) {
        currentGreeneryQuantity++;

        $("greenery-quantity").textContent =
            currentGreeneryQuantity;
    }
});


$("add-greenery").addEventListener("click",() => {

    if (!currentGreenery) return;

    const existing =
        state.greenery.find(
            x => x.name === currentGreenery.name
        );

    if (existing) {
        existing.quantity += currentGreeneryQuantity;
    } else {
        state.greenery.push({
            ...currentGreenery,
            quantity:currentGreeneryQuantity
        });
    }

    updateBasketCount();

    showShopStep(4);
});


$("skip-greenery").addEventListener("click",() => {

    showShopStep(4);
});


/* =========================================================
   RIBBONS
   ========================================================= */

function createRibbonCards() {

    const grid = $("ribbon-grid");

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

            <span>${ribbon.name}</span>
        `;

        card.addEventListener("click",() => {

            state.ribbon = ribbon;

            grid.querySelectorAll(".ribbon-card")
                .forEach(c => c.classList.remove("selected"));

            card.classList.add("selected");

            $("ribbon-preview-icon").innerHTML = `
                <span
                    class="css-ribbon-icon"
                    style="--ribbon-color:${ribbon.color}"
                >
                    <i></i><i></i><b></b>
                </span>
            `;

            $("ribbon-preview-name").textContent =
                ribbon.name;

            $("add-ribbon").disabled = false;
        });

        grid.appendChild(card);
    });
}


$("add-ribbon").addEventListener("click",() => {

    if (state.ribbon) {
        showShopStep(5);
    }
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

        card.addEventListener("click",() => {

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


$("add-wrapping").addEventListener("click",() => {

    if (!state.wrapping) return;

    document.querySelectorAll(".shop-step")
        .forEach(step => step.classList.remove("active"));

    $("bouquet-reveal").classList.remove("hidden");

    buildBouquet();

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
});


/* =========================================================
   BASKET
   ========================================================= */

function updateBasketCount() {

    const flowerCount =
        state.flowers.reduce(
            (sum,item) => sum + item.quantity,
            0
        );

    const greeneryCount =
        state.greenery.reduce(
            (sum,item) => sum + item.quantity,
            0
        );

    $("basket-count").textContent =
        flowerCount + greeneryCount;
}


/* =========================================================
   FINAL BOUQUET
   ========================================================= */

function buildBouquet() {

    const container = $("bouquet-visual");

    container.innerHTML = "";

    /*
       BACK → FRONT
       1. wrapping
       2. greenery
       3. stems
       4. flowers
       5. ribbon
    */

    const paper = document.createElement("div");

    paper.className = "bouquet-paper";

    paper.style.setProperty(
        "--wrap-color",
        state.wrapping.color
    );

    container.appendChild(paper);


    const greeneryLayer =
        document.createElement("div");

    greeneryLayer.className =
        "bouquet-greenery";

    container.appendChild(greeneryLayer);


    const stemLayer =
        document.createElement("div");

    stemLayer.className =
        "bouquet-stems";

    container.appendChild(stemLayer);


    const flowerLayer =
        document.createElement("div");

    flowerLayer.className =
        "bouquet-flowers";

    container.appendChild(flowerLayer);


    /*
       Natural bouquet fan.
       The stems all meet at the lower centre.
    */

    const positions = [
        {x:20,y:120,angle:-25},
        {x:29,y:92,angle:-18},
        {x:39,y:73,angle:-10},
        {x:50,y:62,angle:0},
        {x:61,y:73,angle:10},
        {x:71,y:92,angle:18},
        {x:80,y:120,angle:25},
        {x:34,y:123,angle:-8},
        {x:66,y:123,angle:8},
        {x:45,y:105,angle:-3},
        {x:55,y:105,angle:3},
        {x:25,y:145,angle:-20},
        {x:75,y:145,angle:20}
    ];


    const instances = [];

    state.flowers.forEach(item => {

        for (let i=0; i<item.quantity; i++) {
            instances.push({...item});
        }
    });


    const visible =
        instances.slice(0,13);


    /* -------------------------
       STEMS
       ------------------------- */

    visible.forEach((flower,index) => {

        const pos =
            positions[index % positions.length];

        const stem =
            document.createElement("span");

        stem.className =
            "bouquet-stem";

        /*
           Position at flower head,
           then angle toward centre.
        */

        stem.style.left =
            `${pos.x}%`;

        stem.style.top =
            `${pos.y + 15}px`;

        stem.style.height =
            `${285 - pos.y}px`;

        stem.style.transform =
            `rotate(${pos.angle}deg)`;

        stemLayer.appendChild(stem);
    });


    /* -------------------------
       GREENERY
       ------------------------- */

    const greeneryPositions = [
        {x:13,y:150,r:-28},
        {x:18,y:112,r:-20},
        {x:25,y:82,r:-15},
        {x:87,y:112,r:20},
        {x:93,y:150,r:28},
        {x:78,y:82,r:15},
        {x:30,y:153,r:-8},
        {x:70,y:153,r:8}
    ];

    const greeneryInstances = [];

    state.greenery.forEach(item => {

        for (let i=0; i<item.quantity; i++) {
            greeneryInstances.push({...item});
        }
    });

    greeneryInstances
        .slice(0,8)
        .forEach((item,index) => {

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
                `${pos.x}%`;

            leaf.style.top =
                `${pos.y}px`;

            leaf.style.setProperty(
                "--rotation",
                `${pos.r}deg`
            );

            greeneryLayer.appendChild(leaf);
        });


    /* -------------------------
       FLOWERS
       ------------------------- */

    visible.forEach((flower,index) => {

        const pos =
            positions[index % positions.length];

        const head =
            document.createElement("span");

        head.className =
            "bouquet-flower-head";

        head.innerHTML =
            flowerVisual(
                flower,
                "bouquet-flower-icon"
            );

        head.style.left =
            `${pos.x}%`;

        head.style.top =
            `${pos.y}px`;

        head.style.setProperty(
            "--rotation",
            `${pos.angle}deg`
        );

        head.style.animationDelay =
            `${index * .05}s`;

        flowerLayer.appendChild(head);
    });


    /* -------------------------
       RIBBON
       ------------------------- */

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.style.setProperty(
        "--bow-color",
        state.ribbon
            ? state.ribbon.color
            : "#91c7e8"
    );

    bow.innerHTML = `
        <span class="bow-loop left"></span>
        <span class="bow-loop right"></span>
        <span class="bow-knot"></span>
        <span class="bow-tail left"></span>
        <span class="bow-tail right"></span>
    `;

    container.appendChild(bow);

    buildMiniBouquet();
}


/* =========================================================
   MINI BOUQUET
   ========================================================= */

function buildMiniBouquet() {

    const container =
        $("final-bouquet-mini");

    container.innerHTML = "";

    const items =
        state.flowers.flatMap(item =>
            Array(item.quantity).fill(item)
        ).slice(0,7);

    items.forEach((flower,index) => {

        const span =
            document.createElement("span");

        span.className =
            "mini-flower";

        span.innerHTML =
            flowerVisual(
                flower,
                "mini-flower-icon"
            );

        span.style.transform =
            `translateY(${Math.abs(index-3)*-2}px)
             rotate(${(index-3)*5}deg)`;

        container.appendChild(span);
    });
}


/* =========================================================
   LETTER
   ========================================================= */

$("open-letter").addEventListener("click",() => {

    showScreen("screen-letter");

    buildMiniBouquet();
});


/* =========================================================
   RESTART
   ========================================================= */

$("restart-birthday").addEventListener("click",() => {
    location.reload();
});


/* =========================================================
   INITIAL
   ========================================================= */

createAnimals();
