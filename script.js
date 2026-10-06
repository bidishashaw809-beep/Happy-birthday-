/* ==========================================
   BIRTHDAY SURPRISE
   MAIN JAVASCRIPT
   ========================================== */


/* ==========================================
   BIRTHDAY DATA
   ========================================== */

const birthdayData = {
    name: "",
    age: null,

    flowers: [],
    greenery: [],
    ribbon: null,
    wrapping: null
};


/* ==========================================
   FLOWER COLLECTION
   ========================================== */

const flowers = [
    { name: "Red Rose", emoji: "🌹", color: "#c94c63" },
    { name: "Pink Rose", emoji: "🌹", color: "#e889a2" },
    { name: "White Rose", emoji: "🌹", color: "#f4edf0" },
    { name: "Yellow Rose", emoji: "🌹", color: "#f2c94c" },
    { name: "Tulip", emoji: "🌷", color: "#e77b91" },
    { name: "Sunflower", emoji: "🌻", color: "#f2b632" },
    { name: "Daisy", emoji: "🌼", color: "#f4d35e" },
    { name: "Hibiscus", emoji: "🌺", color: "#df5c75" },
    { name: "Cherry Blossom", emoji: "🌸", color: "#f3a6bd" },
    { name: "Lavender", emoji: "🪻", color: "#9b83c9" },
    { name: "Peony", emoji: "🌸", color: "#e99ab2" },
    { name: "Lily", emoji: "🌺", color: "#f0d8e5" },
    { name: "Lotus", emoji: "🪷", color: "#e8a0b8" },
    { name: "Daffodil", emoji: "🌼", color: "#f4c542" },
    { name: "Poppy", emoji: "🌺", color: "#e65b4f" },
    { name: "Carnation", emoji: "🌸", color: "#df7897" },
    { name: "Hydrangea", emoji: "💠", color: "#8ca6d8" },
    { name: "Orchid", emoji: "🌺", color: "#b37bc5" },
    { name: "Iris", emoji: "💜", color: "#7770bd" },
    { name: "Forget-Me-Not", emoji: "💠", color: "#7da9d9" }
];


/* ==========================================
   GREENERY
   ========================================== */

const greenery = [
    { name: "Eucalyptus", emoji: "🌿" },
    { name: "Fern", emoji: "🌿" },
    { name: "Baby's Breath", emoji: "🌱" },
    { name: "Olive Branch", emoji: "🫒" },
    { name: "Ruscus", emoji: "🌿" },
    { name: "Pampas Grass", emoji: "🌾" },
    { name: "Mint Leaves", emoji: "🌱" },
    { name: "Ivy", emoji: "🍃" },
    { name: "Willow", emoji: "🌿" },
    { name: "Dried Wheat", emoji: "🌾" }
];


/* ==========================================
   RIBBONS
   ========================================== */

const ribbons = [
    { name: "Blush Pink", emoji: "🎀", color: "#e9a0b5" },
    { name: "Classic White", emoji: "🎀", color: "#f3eeee" },
    { name: "Midnight Black", emoji: "🎀", color: "#29252a" },
    { name: "Lavender", emoji: "🎀", color: "#aa91ce" },
    { name: "Baby Blue", emoji: "🎀", color: "#9dbbd8" },
    { name: "Cherry Red", emoji: "🎀", color: "#c95567" },
    { name: "Sage Green", emoji: "🎀", color: "#91a88d" },
    { name: "Butter Yellow", emoji: "🎀", color: "#e8ca73" },
    { name: "Dusty Rose", emoji: "🎀", color: "#b97d91" },
    { name: "Champagne Gold", emoji: "🎀", color: "#d5b46c" }
];


/* ==========================================
   WRAPPING
   ========================================== */

const wrappings = [
    {
        name: "Natural Kraft",
        color: "#c9a77a",
        pattern: "kraft"
    },
    {
        name: "Soft Blush",
        color: "#eab8c4",
        pattern: "blush"
    },
    {
        name: "Classic Ivory",
        color: "#eee8dc",
        pattern: "ivory"
    },
    {
        name: "Lavender Mist",
        color: "#c8b8d9",
        pattern: "lavender"
    },
    {
        name: "Sage Garden",
        color: "#aab9a0",
        pattern: "sage"
    },
    {
        name: "Midnight",
        color: "#3c3840",
        pattern: "black"
    },
    {
        name: "Powder Blue",
        color: "#b7cddd",
        pattern: "blue"
    },
    {
        name: "Pretty Peach",
        color: "#edb39b",
        pattern: "peach"
    }
];


/* ==========================================
   TEMPORARY FLOWER SELECTIONS
   ========================================== */

let selectedFlower1 = null;
let selectedFlower2 = null;

let quantity1 = 1;
let quantity2 = 1;

let selectedGreenery = null;
let greeneryQuantity = 1;


/* ==========================================
   CURRENT SHOP STEP
   ========================================== */

let currentShopStep = 1;


/* ==========================================
   GENERAL SCREEN NAVIGATION
   ========================================== */

const birthdayScreens = document.querySelectorAll(".birthday-screen");


function showScreen(screenId) {

    birthdayScreens.forEach((screen) => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(screenId);

    if (!target) {
        console.error(`Screen not found: ${screenId}`);
        return;
    }

    target.classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* ==========================================
   SCREEN 1
   PERSONALIZATION
   ========================================== */

const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");

const personalizeNext =
    document.getElementById("personalize-next");

const personalizeError =
    document.getElementById("personalize-error");


personalizeNext.addEventListener("click", () => {

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    personalizeError.textContent = "";


    /* Validate name */

    if (!name) {

        personalizeError.textContent =
            "Please tell me your name first. ♡";

        nameInput.focus();

        return;
    }


    /* Validate age */

    if (!age || age < 1 || age > 120) {

        personalizeError.textContent =
            "Please enter an age between 1 and 120.";

        ageInput.focus();

        return;
    }


    /* Save birthday information */

    birthdayData.name = name;
    birthdayData.age = age;


    /* Prepare birthday room */

    prepareBirthdayRoom();


    /* Move to dark room */

    showScreen("screen-dark-room");

});


/* ==========================================
   SCREEN 2
   TURNING ON THE LIGHTS
   ========================================== */

const lightsButton =
    document.getElementById("lights-button");


lightsButton.addEventListener("click", () => {

    const darkRoom =
        document.getElementById("screen-dark-room");

    darkRoom.classList.add("lights-coming-on");


    /*
       Give the CSS lighting animation time
       before changing the screen.
    */

    setTimeout(() => {

        showScreen("screen-birthday-room");

        startBirthdayRoom();

    }, 1200);

});


/* ==========================================
   PREPARE BIRTHDAY ROOM
   ========================================== */

function prepareBirthdayRoom() {

    const bannerName =
        document.getElementById("birthday-name-banner");

    bannerName.textContent =
        birthdayData.name;


    createAgeCandles();

}


/* ==========================================
   CREATE AGE CANDLES
   ========================================== */

function createAgeCandles() {

    const candleContainer =
        document.getElementById("cake-candles");

    candleContainer.innerHTML = "";


    const age = birthdayData.age;


    /*
       For normal ages, create one candle
       for every year.
    */

    for (let i = 0; i < age; i++) {

        const candle =
            document.createElement("div");

        candle.className = "age-candle";

        candle.innerHTML = `
            <span class="candle-flame"></span>
            <span class="candle-stick"></span>
        `;

        candle.style.setProperty(
            "--candle-index",
            i
        );

        candleContainer.appendChild(candle);
    }


    /*
       If there are many candles,
       the CSS can shrink/reposition them.
    */

    candleContainer.dataset.age = age;

}


/* ==========================================
   BIRTHDAY ROOM START
   ========================================== */

function startBirthdayRoom() {

    const room =
        document.getElementById("screen-birthday-room");

    room.classList.add("room-awake");

}


/* ==========================================
   BLOW OUT CANDLES
   ========================================== */

const blowCandlesButton =
    document.getElementById("blow-candles-button");


const cakeInteraction =
    document.getElementById("cake-interaction");


const afterCake =
    document.getElementById("after-cake");


blowCandlesButton.addEventListener("click", () => {

    const candles =
        document.querySelectorAll(".age-candle");


    candles.forEach((candle, index) => {

        setTimeout(() => {

            candle.classList.add("blown-out");

        }, index * 25);

    });


    blowCandlesButton.disabled = true;


    cakeInteraction.classList.add(
        "candles-blown"
    );


    setTimeout(() => {

        cakeInteraction.classList.add("hidden");

        afterCake.classList.remove("hidden");

    }, Math.min(candles.length * 25 + 700, 1800));

});


/* ==========================================
   GO TO FLOWER SHOP
   ========================================== */

const toFlowerShop =
    document.getElementById("to-flower-shop");


toFlowerShop.addEventListener("click", () => {

    resetFlowerShop();

    showScreen("screen-flower-shop");

    showShopStep(1);

});


/* ==========================================
   FLOWER SHOP NAVIGATION
   ========================================== */

const shopSteps =
    document.querySelectorAll(".shop-step");

const shopProgressBar =
    document.getElementById("shop-progress-bar");

const shopStepLabel =
    document.getElementById("shop-step-label");

const shopStepNumber =
    document.getElementById("shop-step-number");


const shopStepLabels = [
    "Choose your flowers",
    "Add another flower",
    "Add greenery",
    "Choose your ribbon",
    "Choose your wrapping"
];


function showShopStep(stepNumber) {

    currentShopStep = stepNumber;


    shopSteps.forEach((step) => {
        step.classList.remove("active");
    });


    const target =
        document.getElementById(
            `shop-step-${stepNumber}`
        );


    if (target) {
        target.classList.add("active");
    }


    shopStepLabel.textContent =
        shopStepLabels[stepNumber - 1];


    shopStepNumber.textContent =
        `${stepNumber} / 5`;


    shopProgressBar.style.width =
        `${(stepNumber / 5) * 100}%`;


    updateBasketCount();

}


/* ==========================================
   BASKET COUNT
   ========================================== */

function updateBasketCount() {

    let total = 0;


    birthdayData.flowers.forEach((flower) => {

        total += flower.quantity;

    });


    birthdayData.greenery.forEach((item) => {

        total += item.quantity;

    });


    const basket =
        document.getElementById("basket-count");


    basket.textContent = total;

}


/* ==========================================
   CREATE FLOWER CARDS
   ========================================== */

function createFlowerCards(
    containerId,
    callback
) {

    const container =
        document.getElementById(containerId);


    container.innerHTML = "";


    flowers.forEach((flower) => {

        const card =
            document.createElement("button");


        card.type = "button";

        card.className = "flower-card";


        card.innerHTML = `
            <span class="flower-emoji">
                ${flower.emoji}
            </span>

            <span class="flower-name">
                ${flower.name}
            </span>
        `;


        card.addEventListener("click", () => {

            container
                .querySelectorAll(".flower-card")
                .forEach((item) => {

                    item.classList.remove(
                        "selected"
                    );

                });


            card.classList.add("selected");


            callback(flower);

        });


        container.appendChild(card);

    });

}


/* ==========================================
   FIRST FLOWER
   ========================================== */

createFlowerCards(
    "flower-grid-1",
    (flower) => {

        selectedFlower1 = flower;

        quantity1 = 1;


        document.getElementById(
            "selected-flower-1"
        ).textContent = flower.name;


        document.getElementById(
            "flower-quantity"
        ).textContent = quantity1;


        document.getElementById(
            "add-first-flower"
        ).disabled = false;

    }
);


/* ==========================================
   SECOND FLOWER
   ========================================== */

createFlowerCards(
    "flower-grid-2",
    (flower) => {

        selectedFlower2 = flower;

        quantity2 = 1;


        document.getElementById(
            "selected-flower-2"
        ).textContent = flower.name;


        document.getElementById(
            "flower-quantity-2"
        ).textContent = quantity2;


        document.getElementById(
            "add-second-flower"
        ).disabled = false;

    }
);


/* ==========================================
   FIRST FLOWER QUANTITY
   ========================================== */

document
    .getElementById("quantity-minus")
    .addEventListener("click", () => {

        if (quantity1 > 1) {
            quantity1--;
        }


        document.getElementById(
            "flower-quantity"
        ).textContent = quantity1;

    });


document
    .getElementById("quantity-plus")
    .addEventListener("click", () => {

        if (quantity1 < 20) {
            quantity1++;
        }


        document.getElementById(
            "flower-quantity"
        ).textContent = quantity1;

    });


/* ==========================================
   ADD FIRST FLOWER
   ========================================== */

document
    .getElementById("add-first-flower")
    .addEventListener("click", () => {

        if (!selectedFlower1) {
            return;
        }


        birthdayData.flowers.push({

            name: selectedFlower1.name,

            emoji: selectedFlower1.emoji,

            color: selectedFlower1.color,

            quantity: quantity1

        });


        showShopStep(2);

    });


/* ==========================================
   SECOND FLOWER QUANTITY
   ========================================== */

document
    .getElementById("quantity-minus-2")
    .addEventListener("click", () => {

        if (quantity2 > 1) {
            quantity2--;
        }


        document.getElementById(
            "flower-quantity-2"
        ).textContent = quantity2;

    });


document
    .getElementById("quantity-plus-2")
    .addEventListener("click", () => {

        if (quantity2 < 20) {
            quantity2++;
        }


        document.getElementById(
            "flower-quantity-2"
        ).textContent = quantity2;

    });


/* ==========================================
   ADD SECOND FLOWER
   ========================================== */

document
    .getElementById("add-second-flower")
    .addEventListener("click", () => {

        if (!selectedFlower2) {
            return;
        }


        birthdayData.flowers.push({

            name: selectedFlower2.name,

            emoji: selectedFlower2.emoji,

            color: selectedFlower2.color,

            quantity: quantity2

        });


        showShopStep(3);

    });


/* ==========================================
   SKIP SECOND FLOWER
   ========================================== */

document
    .getElementById("skip-second-flower")
    .addEventListener("click", () => {

        showShopStep(3);

    });


/* ==========================================
   GREENERY
   ========================================== */

const greeneryGrid =
    document.getElementById("greenery-grid");


greenery.forEach((item) => {

    const card =
        document.createElement("button");


    card.type = "button";

    card.className = "greenery-card";


    card.innerHTML = `
        <span class="greenery-emoji">
            ${item.emoji}
        </span>

        <span>
            ${item.name}
        </span>
    `;


    card.addEventListener("click", () => {

        greeneryGrid
            .querySelectorAll(".greenery-card")
            .forEach((other) => {

                other.classList.remove(
                    "selected"
                );

            });


        card.classList.add("selected");


        selectedGreenery = item;

        greeneryQuantity = 1;


        document.getElementById(
            "selected-greenery"
        ).textContent = item.name;


        document.getElementById(
            "greenery-quantity"
        ).textContent = greeneryQuantity;


        document.getElementById(
            "add-greenery"
        ).disabled = false;

    });


    greeneryGrid.appendChild(card);

});


/* ==========================================
   GREENERY QUANTITY
   ========================================== */

document
    .getElementById("greenery-minus")
    .addEventListener("click", () => {

        if (greeneryQuantity > 1) {
            greeneryQuantity--;
        }


        document.getElementById(
            "greenery-quantity"
        ).textContent = greeneryQuantity;

    });


document
    .getElementById("greenery-plus")
    .addEventListener("click", () => {

        if (greeneryQuantity < 15) {
            greeneryQuantity++;
        }


        document.getElementById(
            "greenery-quantity"
        ).textContent = greeneryQuantity;

    });


/* ==========================================
   ADD GREENERY
   ========================================== */

document
    .getElementById("add-greenery")
    .addEventListener("click", () => {

        if (!selectedGreenery) {
            return;
        }


        birthdayData.greenery.push({

            name: selectedGreenery.name,

            emoji: selectedGreenery.emoji,

            quantity: greeneryQuantity

        });


        showShopStep(4);

    });


/* ==========================================
   SKIP GREENERY
   ========================================== */

document
    .getElementById("skip-greenery")
    .addEventListener("click", () => {

        birthdayData.greenery = [];

        showShopStep(4);

    });


/* ==========================================
   RIBBONS
   ========================================== */

const ribbonGrid =
    document.getElementById("ribbon-grid");


ribbons.forEach((ribbon) => {

    const card =
        document.createElement("button");


    card.type = "button";

    card.className = "ribbon-card";


    card.style.setProperty(
        "--ribbon-color",
        ribbon.color
    );


    card.innerHTML = `
        <span class="ribbon-symbol">
            ${ribbon.emoji}
        </span>

        <span>
            ${ribbon.name}
        </span>
    `;


    card.addEventListener("click", () => {

        ribbonGrid
            .querySelectorAll(".ribbon-card")
            .forEach((other) => {

                other.classList.remove(
                    "selected"
                );

            });


        card.classList.add("selected");


        birthdayData.ribbon = ribbon;


        document.getElementById(
            "ribbon-preview-name"
        ).textContent = ribbon.name;


        document.getElementById(
            "ribbon-preview-icon"
        ).style.color = ribbon.color;


        document.getElementById(
            "add-ribbon"
        ).disabled = false;

    });


    ribbonGrid.appendChild(card);

});


/* ==========================================
   RIBBON CONTINUE
   ========================================== */

document
    .getElementById("add-ribbon")
    .addEventListener("click", () => {

        showShopStep(5);

    });


/* ==========================================
   WRAPPING
   ========================================== */

const wrappingGrid =
    document.getElementById("wrapping-grid");


wrappings.forEach((wrap) => {

    const card =
        document.createElement("button");


    card.type = "button";

    card.className = "wrapping-card";


    card.style.setProperty(
        "--wrap-color",
        wrap.color
    );


    card.innerHTML = `
        <span class="paper-preview"></span>

        <span>
            ${wrap.name}
        </span>
    `;


    card.addEventListener("click", () => {

        wrappingGrid
            .querySelectorAll(".wrapping-card")
            .forEach((other) => {

                other.classList.remove(
                    "selected"
                );

            });


        card.classList.add("selected");


        birthdayData.wrapping = wrap;


        const preview =
            document.getElementById(
                "wrapping-preview"
            );


        preview.style.setProperty(
            "--preview-wrap",
            wrap.color
        );


        document.getElementById(
            "wrapping-preview-name"
        ).textContent = wrap.name;


        document.getElementById(
            "add-wrapping"
        ).disabled = false;

    });


    wrappingGrid.appendChild(card);

});


/* ==========================================
   BUILD BOUQUET VISUAL
   ========================================== */

function buildBouquetVisual() {

    const visual =
        document.getElementById(
            "bouquet-visual"
        );


    visual.innerHTML = "";


    /* ------------------------------
       FLOWERS
       ------------------------------ */

    const flowerLayer =
        document.createElement("div");


    flowerLayer.className =
        "final-flowers";


    let flowerIndex = 0;


    birthdayData.flowers.forEach((flower) => {

        for (
            let i = 0;
            i < flower.quantity;
            i++
        ) {

            const flowerElement =
                document.createElement("span");


            flowerElement.className =
                "final-flower";


            flowerElement.textContent =
                flower.emoji;


            flowerElement.style.setProperty(
                "--flower-color",
                flower.color
            );


            flowerElement.style.setProperty(
                "--flower-angle",
                `${Math.random() * 28 - 14}deg`
            );


            flowerElement.style.setProperty(
                "--flower-index",
                flowerIndex
            );


            flowerLayer.appendChild(
                flowerElement
            );


            flowerIndex++;

        }

    });


    visual.appendChild(
        flowerLayer
    );


    /* ------------------------------
       GREENERY
       ------------------------------ */

    const greeneryLayer =
        document.createElement("div");


    greeneryLayer.className =
        "final-greenery";


    let greeneryIndex = 0;


    birthdayData.greenery.forEach((item) => {

        for (
            let i = 0;
            i < item.quantity;
            i++
        ) {

            const greeneryElement =
                document.createElement("span");


            greeneryElement.className =
                "final-greenery-item";


            greeneryElement.textContent =
                item.emoji;


            greeneryElement.style.setProperty(
                "--greenery-index",
                greeneryIndex
            );


            greeneryLayer.appendChild(
                greeneryElement
            );


            greeneryIndex++;

        }

    });


    visual.appendChild(
        greeneryLayer
    );


    /* ------------------------------
       WRAPPING
       ------------------------------ */

    const wrappingElement =
        document.createElement("div");


    wrappingElement.className =
        "final-wrapping";


    if (birthdayData.wrapping) {

        wrappingElement.style.background =
            birthdayData.wrapping.color;

    }


    visual.appendChild(
        wrappingElement
    );


    /* ------------------------------
       RIBBON
       ------------------------------ */

    const ribbonElement =
        document.createElement("div");


    ribbonElement.className =
        "final-ribbon";


    if (birthdayData.ribbon) {

        ribbonElement.style.background =
            birthdayData.ribbon.color;

    }


    ribbonElement.textContent = "🎀";


    visual.appendChild(
        ribbonElement
    );

}


/* ==========================================
   BUILD BOUQUET DETAILS
   ========================================== */

function buildBouquetDetails() {

    const details =
        document.getElementById(
            "bouquet-details"
        );


    details.innerHTML = "";


    /* Flowers */

    const flowerTitle =
        document.createElement("h3");


    flowerTitle.textContent =
        "Your flowers";


    details.appendChild(
        flowerTitle
    );


    birthdayData.flowers.forEach((flower) => {

        const row =
            document.createElement("p");


        row.textContent =
            `${flower.emoji} ${flower.name} × ${flower.quantity}`;


        details.appendChild(
            row
        );

    });


    /* Greenery */

    if (birthdayData.greenery.length > 0) {

        const greeneryTitle =
            document.createElement("h3");


        greeneryTitle.textContent =
            "Greenery";


        details.appendChild(
            greeneryTitle
        );


        birthdayData.greenery.forEach((item) => {

            const row =
                document.createElement("p");


            row.textContent =
                `${item.emoji} ${item.name} × ${item.quantity}`;


            details.appendChild(
                row
            );

        });

    }


    /* Ribbon */

    if (birthdayData.ribbon) {

        const ribbonTitle =
            document.createElement("h3");


        ribbonTitle.textContent =
            "Ribbon";


        details.appendChild(
            ribbonTitle
        );


        const ribbonRow =
            document.createElement("p");


        ribbonRow.textContent =
            `${birthdayData.ribbon.emoji} ${birthdayData.ribbon.name}`;


        details.appendChild(
            ribbonRow
        );

    }


    /* Wrapping */

    if (birthdayData.wrapping) {

        const wrappingTitle =
            document.createElement("h3");


        wrappingTitle.textContent =
            "Wrapping";


        details.appendChild(
            wrappingTitle
        );


        const wrappingRow =
            document.createElement("p");


        wrappingRow.textContent =
            `📜 ${birthdayData.wrapping.name}`;


        details.appendChild(
            wrappingRow
        );

    }

}


/* ==========================================
   FINISH FLOWER SHOP
   ========================================== */

document
    .getElementById("add-wrapping")
    .addEventListener("click", () => {

        buildBouquetVisual();

        buildBouquetDetails();

        updateBasketCount();


        const shopStepsContainer =
            document.getElementById(
                "screen-flower-shop"
            );


        shopStepsContainer
            .querySelectorAll(".shop-step")
            .forEach((step) => {

                step.classList.remove("active");

            });


        document
            .getElementById("bouquet-reveal")
            .classList.remove("hidden");


        document.getElementById(
            "shop-step-label"
        ).textContent =
            "Your bouquet";


        document.getElementById(
            "shop-step-number"
        ).textContent =
            "5 / 5";


        document.getElementById(
            "shop-progress-bar"
        ).style.width =
            "100%";

    });


/* ==========================================
   OPEN FINAL LETTER
   ========================================== */

document
    .getElementById("open-letter")
    .addEventListener("click", () => {

        prepareFinalLetter();

        showScreen("screen-letter");

    });


/* ==========================================
   PREPARE FINAL LETTER
   ========================================== */

function prepareFinalLetter() {

    const name =
        birthdayData.name;


    document.getElementById(
        "letter-name"
    ).textContent = name;


    document.getElementById(
        "letter-name-inside"
    ).textContent = name;


    document.getElementById(
        "final-name"
    ).textContent = name;


    buildMiniBouquet();

}


/* ==========================================
   MINI FINAL BOUQUET
   ========================================== */

function buildMiniBouquet() {

    const container =
        document.getElementById(
            "final-bouquet-mini"
        );


    container.innerHTML = "";


    birthdayData.flowers.forEach((flower) => {

        const flowerElement =
            document.createElement("span");


        flowerElement.className =
            "mini-flower";


        flowerElement.textContent =
            flower.emoji;


        flowerElement.style.setProperty(
            "--flower-color",
            flower.color
        );


        container.appendChild(
            flowerElement
        );

    });


    if (birthdayData.ribbon) {

        const ribbon =
            document.createElement("span");


        ribbon.className =
            "mini-ribbon";


        ribbon.textContent = "🎀";


        ribbon.style.color =
            birthdayData.ribbon.color;


        container.appendChild(
            ribbon
        );

    }

}


/* ==========================================
   RESET EVERYTHING
   ========================================== */

function resetFlowerShop() {

    birthdayData.flowers = [];

    birthdayData.greenery = [];

    birthdayData.ribbon = null;

    birthdayData.wrapping = null;


    selectedFlower1 = null;

    selectedFlower2 = null;

    selectedGreenery = null;


    quantity1 = 1;

    quantity2 = 1;

    greeneryQuantity = 1;


    document.getElementById(
        "selected-flower-1"
    ).textContent =
        "Nothing chosen yet";


    document.getElementById(
        "selected-flower-2"
    ).textContent =
        "Nothing chosen yet";


    document.getElementById(
        "selected-greenery"
    ).textContent =
        "None yet";


    document.getElementById(
        "flower-quantity"
    ).textContent = "1";


    document.getElementById(
        "flower-quantity-2"
    ).textContent = "1";


    document.getElementById(
        "greenery-quantity"
    ).textContent = "1";


    document.getElementById(
        "add-first-flower"
    ).disabled = true;


    document.getElementById(
        "add-second-flower"
    ).disabled = true;


    document.getElementById(
        "add-greenery"
    ).disabled = true;


    document.getElementById(
        "add-ribbon"
    ).disabled = true;


    document.getElementById(
        "add-wrapping"
    ).disabled = true;


    document.querySelectorAll(
        ".flower-card.selected"
    ).forEach((card) => {

        card.classList.remove("selected");

    });


    document.querySelectorAll(
        ".greenery-card.selected"
    ).forEach((card) => {

        card.classList.remove("selected");

    });


    document.querySelectorAll(
        ".ribbon-card.selected"
    ).forEach((card) => {

        card.classList.remove("selected");

    });


    document.querySelectorAll(
        ".wrapping-card.selected"
    ).forEach((card) => {

        card.classList.remove("selected");

    });


    document.getElementById(
        "ribbon-preview-name"
    ).textContent =
        "Choose your ribbon";


    document.getElementById(
        "ribbon-preview-icon"
    ).style.color = "";


    document.getElementById(
        "wrapping-preview-name"
    ).textContent =
        "Choose your wrapping";


    document
        .getElementById("wrapping-preview")
        .style.removeProperty(
            "--preview-wrap"
        );


    document.getElementById(
        "bouquet-reveal"
    ).classList.add("hidden");


    updateBasketCount();

}


/* ==========================================
   RESTART ENTIRE EXPERIENCE
   ========================================== */

document
    .getElementById("restart-birthday")
    .addEventListener("click", () => {

        birthdayData.name = "";

        birthdayData.age = null;

        resetFlowerShop();


        nameInput.value = "";

        ageInput.value = "";


        const candles =
            document.getElementById(
                "cake-candles"
            );

        candles.innerHTML = "";


        document
            .getElementById("after-cake")
            .classList.add("hidden");


        document
            .getElementById("cake-interaction")
            .classList.remove("hidden");


        document
            .getElementById("blow-candles-button")
            .disabled = false;


        document
            .getElementById("screen-dark-room")
            .classList.remove(
                "lights-coming-on"
            );


        showScreen(
            "screen-personalize"
        );

    });


/* ==========================================
   INITIAL STATE
   ========================================== */

showScreen("screen-personalize");
