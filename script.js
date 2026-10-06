/* =========================================================
   BIRTHDAY SURPRISE
   Complete replacement script.js
   ========================================================= */


/* =========================================================
   1. BIRTHDAY DATA
   ========================================================= */

const flowers = [
    { name: "Red Rose", emoji: "🌹", color: "#d83d5b" },
    { name: "Pink Rose", emoji: "🌹", color: "#ec8ba8" },
    { name: "White Rose", emoji: "🌹", color: "#fff4ef" },
    { name: "Yellow Rose", emoji: "🌹", color: "#f5c94a" },

    { name: "Tulip", emoji: "🌷", color: "#ef7fa2" },
    { name: "Sunflower", emoji: "🌻", color: "#f4bd24" },
    { name: "Daisy", emoji: "🌼", color: "#f5cf4e" },
    { name: "Hibiscus", emoji: "🌺", color: "#e75d86" },

    { name: "Cherry Blossom", emoji: "🌸", color: "#f4a9bd" },
    { name: "Lavender", emoji: "🪻", color: "#a982d1" },
    { name: "Peony", emoji: "🌸", color: "#ee91ad" },
    { name: "Lily", emoji: "🌷", color: "#f4dce8" },

    { name: "Lotus", emoji: "🪷", color: "#ef9eb9" },
    { name: "Daffodil", emoji: "🌼", color: "#f3ca32" },
    { name: "Poppy", emoji: "🌺", color: "#ed6a71" },
    { name: "Carnation", emoji: "🌸", color: "#ef829e" },

    { name: "Orchid", emoji: "🌸", color: "#bd76c9" },
    { name: "Marigold", emoji: "🌼", color: "#f3a52e" },
    { name: "Camellia", emoji: "🌺", color: "#e96f8f" },
    { name: "Bluebell", emoji: "💠", color: "#8fa9e8" }
];


const greenery = [
    { name: "Willow", emoji: "🌿", color: "#769b68" },
    { name: "Eucalyptus", emoji: "🍃", color: "#8cab82" },
    { name: "Fern", emoji: "🌿", color: "#60885d" },
    { name: "Olive Branch", emoji: "🌿", color: "#88966b" },
    { name: "Baby's Breath", emoji: "🌱", color: "#9fb49a" },
    { name: "Ivy", emoji: "🍃", color: "#668d63" },
    { name: "Ruscus", emoji: "🌿", color: "#718e61" },
    { name: "Mint Leaves", emoji: "🌱", color: "#77a978" },
    { name: "Palm Leaf", emoji: "🌴", color: "#65915f" },
    { name: "Dusty Miller", emoji: "🌿", color: "#a5ae99" }
];


const ribbons = [
    { name: "Baby Blue", emoji: "🎀", color: "#9ec9ec" },
    { name: "Blush Pink", emoji: "🎀", color: "#e7a0b4" },
    { name: "Rose Pink", emoji: "🎀", color: "#c96f87" },
    { name: "Ivory", emoji: "🎀", color: "#eadbc5" },
    { name: "Lavender", emoji: "🎀", color: "#b79ad5" },
    { name: "Sage", emoji: "🎀", color: "#9caf8c" },
    { name: "Burgundy", emoji: "🎀", color: "#913f56" },
    { name: "Peach", emoji: "🎀", color: "#efa68c" },
    { name: "Butter Yellow", emoji: "🎀", color: "#e9cd6e" },
    { name: "White", emoji: "🎀", color: "#f5eee7" }
];


const wrappings = [
    { name: "Sage Garden", emoji: "📜", color: "#a9b99f" },
    { name: "Blush Paper", emoji: "📜", color: "#e8b4bb" },
    { name: "Cream Classic", emoji: "📜", color: "#ead9c5" },
    { name: "Dusty Rose", emoji: "📜", color: "#c98e9d" },
    { name: "Lavender Mist", emoji: "📜", color: "#bca9ce" },
    { name: "Peach Bloom", emoji: "📜", color: "#e7b39a" },
    { name: "Baby Blue", emoji: "📜", color: "#a9c7d9" },
    { name: "Forest Green", emoji: "📜", color: "#789277" }
];


/* =========================================================
   2. PERSONAL BIRTHDAY STATE
   ========================================================= */

const birthday = {
    name: "",
    age: 0,

    /*
       Instead of selectedFlower1 / selectedFlower2,
       we now store ANY number of flowers.
    */
    flowers: [],

    /*
       Same for greenery.
    */
    greenery: [],

    ribbon: null,
    wrapping: null
};


/* Currently highlighted item in the shop */
let activeFlower = null;
let activeGreenery = null;


/* =========================================================
   3. DOM HELPERS
   ========================================================= */

const $ = (selector) => document.querySelector(selector);

const $$ = (selector) => document.querySelectorAll(selector);


function hide(element) {
    if (element) {
        element.classList.add("hidden");
    }
}


function show(element) {
    if (element) {
        element.classList.remove("hidden");
    }
}


/* =========================================================
   4. EXTRA STYLES
   These styles are injected here so the new animals,
   number candles and bouquet don't depend on old CSS.
   ========================================================= */

const dynamicStyles = document.createElement("style");

dynamicStyles.textContent = `

/* =========================================
   FULL BODY ANIMALS
   ========================================= */

.real-animals {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 195px;
    z-index: 15;

    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    padding: 0 25px;

    pointer-events: none;
}

.real-animal {
    position: relative;

    width: 75px;
    height: 105px;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    animation: birthdayAnimalFloat 3.5s ease-in-out infinite;
}

.real-animal:nth-child(2) {
    animation-delay: .5s;
}

.real-animal:nth-child(3) {
    animation-delay: 1s;
}

.real-animal:nth-child(4) {
    animation-delay: 1.5s;
}

.animal-svg {
    width: 78px;
    height: 105px;

    overflow: visible;

    filter:
        drop-shadow(
            0 5px 4px rgba(70,40,40,.13)
        );
}

@keyframes birthdayAnimalFloat {
    0%,100% {
        transform: translateY(0) rotate(-1deg);
    }

    50% {
        transform: translateY(-8px) rotate(1deg);
    }
}


/* =========================================
   BETTER BIRTHDAY ROOM
   ========================================= */

.birthday-room.compact-room {
    min-height: calc(100vh - 55px) !important;
    height: calc(100vh - 55px) !important;
    overflow: hidden !important;
}

.birthday-room.compact-room .room-background {
    min-height: 0 !important;
    height: 100% !important;
}


/* =========================================
   REAL NUMBER CANDLES
   ========================================= */

.number-candles {
    position: absolute;

    left: 50%;
    bottom: 132px;

    z-index: 50;

    display: flex;
    justify-content: center;
    align-items: flex-end;

    gap: 9px;

    transform: translateX(-50%);
}

.number-candle {
    position: relative;

    width: 38px;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 8px;

    font-family:
        "DM Sans",
        sans-serif;

    font-size: 45px;
    font-weight: 700;

    color: #fff8ed;

    background:
        linear-gradient(
            90deg,
            #d77e91,
            #f0a7b5,
            #d77e91
        );

    border: 2px solid rgba(255,255,255,.55);

    box-shadow:
        0 5px 10px rgba(90,50,55,.16),
        inset 3px 0 rgba(255,255,255,.18),
        inset -3px 0 rgba(90,40,50,.08);
}

.number-candle::before {
    content: "";
    position: absolute;

    top: -12px;
    left: 50%;

    width: 3px;
    height: 13px;

    background: #5e493f;

    transform: translateX(-50%);
}

.number-flame {
    position: absolute;

    top: -31px;
    left: 50%;

    width: 17px;
    height: 25px;

    transform:
        translateX(-50%)
        rotate(45deg);

    border-radius:
        50% 50% 50% 0;

    background:
        linear-gradient(
            135deg,
            #fff3a3,
            #ffbd43
        );

    box-shadow:
        0 0 10px #ffd15d,
        0 0 22px rgba(255,188,60,.65);

    animation:
        numberFlame 0.7s ease-in-out infinite alternate;
}

.number-candle.blown .number-flame {
    animation: numberFlameOut .35s ease forwards;
}

.number-candle.blown::after {
    content: "";

    position: absolute;

    top: -32px;
    left: 50%;

    width: 13px;
    height: 24px;

    border-radius: 50%;

    background: rgba(150,150,150,.28);

    filter: blur(4px);

    animation: candleSmoke 1.1s ease forwards;
}

@keyframes numberFlame {
    from {
        transform:
            translateX(-50%)
            rotate(40deg)
            scale(.9);
    }

    to {
        transform:
            translateX(-50%)
            rotate(50deg)
            scale(1.1);
    }
}

@keyframes numberFlameOut {
    to {
        opacity: 0;
        transform:
            translateX(-50%)
            translateY(-10px)
            scale(.1);
    }
}

@keyframes candleSmoke {
    from {
        opacity: .5;
        transform:
            translateX(-50%)
            translateY(0)
            scale(.7);
    }

    to {
        opacity: 0;
        transform:
            translateX(-50%)
            translateY(-35px)
            scale(1.5);
    }
}


/* =========================================
   CAKE IMPROVEMENT
   ========================================= */

.better-cake {
    position: absolute;

    left: 50%;
    bottom: 105px;

    z-index: 30;

    width: 225px;
    height: 145px;

    transform: translateX(-50%);
}

.better-cake-bottom {
    position: absolute;

    left: 50%;
    bottom: 0;

    width: 215px;
    height: 70px;

    transform: translateX(-50%);

    border-radius:
        15px 15px 25px 25px;

    background:
        linear-gradient(
            180deg,
            #df899a,
            #c86f82
        );

    box-shadow:
        inset 0 -8px rgba(100,45,55,.08),
        0 10px 15px rgba(90,50,50,.12);
}

.better-cake-middle {
    position: absolute;

    left: 50%;
    bottom: 55px;

    width: 190px;
    height: 58px;

    transform: translateX(-50%);

    border-radius:
        15px 15px 10px 10px;

    background:
        linear-gradient(
            180deg,
            #fff0df,
            #f4c7c3
        );
}

.better-cake-top {
    position: absolute;

    left: 50%;
    bottom: 100px;

    width: 175px;
    height: 45px;

    transform: translateX(-50%);

    border-radius: 50%;

    background:
        linear-gradient(
            180deg,
            #fff9ed,
            #f5dcd0
        );

    box-shadow:
        0 5px 10px rgba(80,50,45,.1);
}

.cake-icing-dot {
    position: absolute;

    width: 13px;
    height: 13px;

    border-radius: 50%;

    background: #d78396;
}

.cake-icing-dot:nth-child(1) {
    left: 20px;
    top: 16px;
}

.cake-icing-dot:nth-child(2) {
    left: 58px;
    top: 23px;
}

.cake-icing-dot:nth-child(3) {
    right: 58px;
    top: 20px;
}

.cake-icing-dot:nth-child(4) {
    right: 20px;
    top: 15px;
}


/* =========================================
   MULTI SELECTION SUMMARY
   ========================================= */

.multi-selection-summary {
    width: 100%;

    margin-top: 13px;

    display: flex;
    flex-wrap: wrap;

    gap: 6px;
}

.selection-chip {
    padding: 5px 9px;

    border-radius: 20px;

    background: #f7e8ea;

    color: #76545c;

    font-size: 10px;
}

.selection-chip strong {
    font-weight: 700;
}


/* =========================================
   BETTER FINAL BOUQUET
   ========================================= */

.real-bouquet {
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;
}

.bouquet-stems {
    position: absolute;

    left: 50%;
    bottom: 58px;

    z-index: 5;

    width: 170px;
    height: 230px;

    transform: translateX(-50%);
}

.bouquet-stem {
    position: absolute;

    left: 50%;
    bottom: 0;

    width: 5px;
    height: 205px;

    transform-origin: bottom center;

    border-radius: 8px;

    background:
        linear-gradient(
            90deg,
            #3f6b4a,
            #739b65,
            #456c4d
        );

    box-shadow:
        1px 0 rgba(255,255,255,.2);
}

.bouquet-flower-head {
    position: absolute;

    z-index: 20;

    font-size: 48px;

    transform:
        translate(-50%,-50%)
        rotate(var(--rotation));

    filter:
        drop-shadow(
            0 5px 5px rgba(70,45,45,.12)
        );

    animation:
        bouquetFlowerPop .55s ease backwards;
}

.bouquet-greenery-item {
    position: absolute;

    z-index: 12;

    font-size: 48px;

    transform:
        translate(-50%,-50%)
        rotate(var(--rotation));

    filter:
        drop-shadow(
            0 4px 4px rgba(55,75,50,.1)
        );
}

.bouquet-paper {
    position: absolute;

    left: 50%;
    bottom: 18px;

    z-index: 25;

    width: 190px;
    height: 215px;

    transform:
        translateX(-50%);

    clip-path:
        polygon(
            8% 0,
            92% 0,
            100% 100%,
            0 100%
        );

    border-radius:
        8px 8px 18px 18px;

    box-shadow:
        inset 0 0 25px rgba(0,0,0,.07),
        0 10px 20px rgba(70,50,45,.12);
}

.bouquet-paper-fold {
    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            105deg,
            rgba(255,255,255,.25),
            transparent 30%,
            rgba(255,255,255,.15) 60%,
            transparent
        );

    clip-path:
        polygon(
            0 0,
            50% 18%,
            100% 0,
            100% 100%,
            0 100%
        );
}

.bouquet-bow {
    position: absolute;

    left: 50%;
    bottom: 76px;

    z-index: 40;

    width: 85px;
    height: 50px;

    transform: translateX(-50%);
}

.bow-left,
.bow-right {
    position: absolute;

    top: 5px;

    width: 45px;
    height: 35px;

    background: var(--bow-color);

    box-shadow:
        0 4px 8px rgba(60,40,40,.15);
}

.bow-left {
    left: 0;

    border-radius:
        50% 20% 50% 50%;

    transform: rotate(18deg);
}

.bow-right {
    right: 0;

    border-radius:
        20% 50% 50% 50%;

    transform: rotate(-18deg);
}

.bow-knot {
    position: absolute;

    left: 50%;
    top: 12px;

    width: 25px;
    height: 25px;

    transform: translateX(-50%);

    border-radius: 50%;

    background: var(--bow-color);

    box-shadow:
        0 3px 6px rgba(60,40,40,.15);
}

.bow-tail-left,
.bow-tail-right {
    position: absolute;

    top: 28px;

    width: 19px;
    height: 45px;

    background: var(--bow-color);

    clip-path:
        polygon(
            0 0,
            100% 0,
            80% 100%,
            50% 80%,
            20% 100%
        );
}

.bow-tail-left {
    left: 27px;

    transform: rotate(7deg);
}

.bow-tail-right {
    right: 27px;

    transform: rotate(-7deg);
}

@keyframes bouquetFlowerPop {
    from {
        opacity: 0;
        transform:
            translate(-50%,-50%)
            scale(.3)
            rotate(0deg);
    }

    to {
        opacity: 1;
        transform:
            translate(-50%,-50%)
            scale(1)
            rotate(var(--rotation));
    }
}


/* =========================================
   SMALL SCREEN BOUQUET
   ========================================= */

@media(max-width:600px) {

    .real-animals {
        bottom: 185px;
        padding: 0 10px;
    }

    .real-animal {
        width: 62px;
        height: 88px;
    }

    .animal-svg {
        width: 65px;
        height: 90px;
    }

    .better-cake {
        transform:
            translateX(-50%)
            scale(.82);

        transform-origin:
            bottom center;
    }

    .number-candles {
        bottom: 128px;

        transform:
            translateX(-50%)
            scale(.82);
    }

    .bouquet-paper {
        width: 165px;
        height: 200px;
    }

    .bouquet-flower-head {
        font-size: 41px;
    }

    .bouquet-greenery-item {
        font-size: 40px;
    }
}
`;

document.head.appendChild(dynamicStyles);


/* =========================================================
   5. SCREEN SWITCHING
   ========================================================= */

function showScreen(id) {

    $$(".birthday-screen").forEach(screen => {
        screen.classList.remove("active");
    });

    const target = document.getElementById(id);

    if (target) {
        target.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================================================
   6. PERSONALIZATION
   ========================================================= */

$("#personalize-next").addEventListener("click", () => {

    const nameInput = $("#name-input");
    const ageInput = $("#age-input");
    const error = $("#personalize-error");

    const name = nameInput.value.trim();
    const age = Number(ageInput.value);

    error.textContent = "";

    if (!name) {
        error.textContent = "Tell me your name first ♡";
        nameInput.focus();
        return;
    }

    if (!age || age < 1 || age > 120) {
        error.textContent = "Please enter a valid age.";
        ageInput.focus();
        return;
    }

    birthday.name = name;
    birthday.age = age;

    $("#birthday-name-banner").textContent = name;

    $("#letter-name").textContent = name;
    $("#letter-name-inside").textContent = name;
    $("#final-name").textContent = name;

    showScreen("screen-dark-room");
});


/* =========================================================
   7. DARK ROOM → BIRTHDAY ROOM
   ========================================================= */

$("#lights-button").addEventListener("click", () => {

    const darkRoom = $("#screen-dark-room");

    darkRoom.classList.add("lights-coming-on");

    setTimeout(() => {

        showScreen("screen-birthday-room");

        prepareBirthdayRoom();

        setTimeout(() => {
            revealBirthdayElements();
        }, 150);

    }, 1000);
});


/* =========================================================
   8. PREPARE BIRTHDAY ROOM
   ========================================================= */

function prepareBirthdayRoom() {

    const room = $("#screen-birthday-room");
    const background = room.querySelector(".room-background");

    room.classList.add("compact-room");

    background.style.minHeight = "0";
    background.style.height = "100%";

    /*
       Replace the original emoji animals.
    */

    const oldAnimals = room.querySelector(".birthday-animals");

    if (oldAnimals) {
        oldAnimals.remove();
    }

    const animals = document.createElement("div");

    animals.className = "real-animals";

    animals.innerHTML = `
        <div class="real-animal">
            ${rabbitSVG()}
        </div>

        <div class="real-animal">
            ${bearSVG()}
        </div>

        <div class="real-animal">
            ${catSVG()}
        </div>

        <div class="real-animal">
            ${dogSVG()}
        </div>
    `;

    background.appendChild(animals);


    /*
       Replace cake with better cake.
    */

    const oldCake = room.querySelector(".birthday-cake");

    if (oldCake) {
        oldCake.remove();
    }

    const cake = document.createElement("div");

    cake.className = "better-cake";

    cake.innerHTML = `
        <div class="better-cake-bottom"></div>
        <div class="better-cake-middle"></div>

        <div class="better-cake-top">
            <span class="cake-icing-dot"></span>
            <span class="cake-icing-dot"></span>
            <span class="cake-icing-dot"></span>
            <span class="cake-icing-dot"></span>
        </div>
    `;

    background.appendChild(cake);


    createNumberCandles();


    /*
       Move cake controls into a better position.
    */

    const interaction = $("#cake-interaction");

    interaction.style.bottom = "22px";

    const message = interaction.querySelector(".cake-message");

    if (message) {
        message.textContent =
            `Make a wish, ${birthday.name}...`;
    }
}


/* =========================================================
   9. FULL BODY SVG ANIMALS
   ========================================================= */

function rabbitSVG() {

    return `
    <svg class="animal-svg" viewBox="0 0 100 130">

        <!-- ears -->
        <ellipse cx="36" cy="25" rx="10" ry="25"
            fill="#f2e6df"
            stroke="#9eafb0"
            stroke-width="3"/>

        <ellipse cx="64" cy="25" rx="10" ry="25"
            fill="#f2e6df"
            stroke="#9eafb0"
            stroke-width="3"/>

        <!-- inner ears -->
        <ellipse cx="36" cy="25" rx="4" ry="17"
            fill="#eaa8b9"/>

        <ellipse cx="64" cy="25" rx="4" ry="17"
            fill="#eaa8b9"/>

        <!-- body -->
        <ellipse cx="50" cy="88" rx="28" ry="31"
            fill="#f5eee8"
            stroke="#9eafb0"
            stroke-width="3"/>

        <!-- head -->
        <circle cx="50" cy="57" r="25"
            fill="#f7f0ea"
            stroke="#9eafb0"
            stroke-width="3"/>

        <!-- eyes -->
        <circle cx="41" cy="55" r="3" fill="#43383b"/>
        <circle cx="59" cy="55" r="3" fill="#43383b"/>

        <!-- nose -->
        <path d="M47 62 Q50 65 53 62"
            fill="#d88a9c"/>

        <!-- arms -->
        <ellipse cx="25" cy="86" rx="8" ry="18"
            fill="#f5eee8"
            transform="rotate(18 25 86)"/>

        <ellipse cx="75" cy="86" rx="8" ry="18"
            fill="#f5eee8"
            transform="rotate(-18 75 86)"/>

        <!-- feet -->
        <ellipse cx="39" cy="116" rx="12" ry="7"
            fill="#eee3dd"/>

        <ellipse cx="61" cy="116" rx="12" ry="7"
            fill="#eee3dd"/>

    </svg>
    `;
}


function bearSVG() {

    return `
    <svg class="animal-svg" viewBox="0 0 100 130">

        <!-- ears -->
        <circle cx="30" cy="40" r="12"
            fill="#9a6b4c"/>

        <circle cx="70" cy="40" r="12"
            fill="#9a6b4c"/>

        <!-- body -->
        <ellipse cx="50" cy="90" rx="30" ry="32"
            fill="#9a6b4c"/>

        <!-- head -->
        <circle cx="50" cy="58" r="28"
            fill="#9a6b4c"/>

        <!-- muzzle -->
        <ellipse cx="50" cy="66" rx="14" ry="11"
            fill="#d39b72"/>

        <!-- eyes -->
        <circle cx="40" cy="55" r="3" fill="#2d2524"/>
        <circle cx="60" cy="55" r="3" fill="#2d2524"/>

        <!-- nose -->
        <ellipse cx="50" cy="63" rx="5" ry="4"
            fill="#3d2925"/>

        <!-- smile -->
        <path d="M50 67 Q50 72 45 72"
            fill="none"
            stroke="#4b302c"
            stroke-width="2"/>

        <path d="M50 67 Q50 72 55 72"
            fill="none"
            stroke="#4b302c"
            stroke-width="2"/>

        <!-- arms -->
        <ellipse cx="24" cy="88" rx="9" ry="20"
            fill="#8b6046"
            transform="rotate(15 24 88)"/>

        <ellipse cx="76" cy="88" rx="9" ry="20"
            fill="#8b6046"
            transform="rotate(-15 76 88)"/>

        <!-- feet -->
        <ellipse cx="38" cy="117" rx="14" ry="8"
            fill="#855b44"/>

        <ellipse cx="62" cy="117" rx="14" ry="8"
            fill="#855b44"/>

    </svg>
    `;
}


function catSVG() {

    return `
    <svg class="animal-svg" viewBox="0 0 100 130">

        <!-- ears -->
        <path d="M27 45 L30 20 L46 39 Z"
            fill="#f0ad26"/>

        <path d="M73 45 L70 20 L54 39 Z"
            fill="#f0ad26"/>

        <!-- body -->
        <ellipse cx="50" cy="92" rx="28" ry="31"
            fill="#f5a91f"/>

        <!-- head -->
        <path d="
            M28 53
            Q30 28 50 27
            Q70 28 72 53
            Q73 76 50 82
            Q27 76 28 53
        "
        fill="#f5a91f"/>

        <!-- eyes -->
        <ellipse cx="40" cy="53" rx="4" ry="6"
            fill="#30251d"/>

        <ellipse cx="60" cy="53" rx="4" ry="6"
            fill="#30251d"/>

        <!-- nose -->
        <path d="M46 62 L50 65 L54 62 Z"
            fill="#d46e77"/>

        <!-- whiskers -->
        <path d="M38 64 L18 60"
            stroke="#76564c"
            stroke-width="2"/>

        <path d="M38 68 L18 70"
            stroke="#76564c"
            stroke-width="2"/>

        <path d="M62 64 L82 60"
            stroke="#76564c"
            stroke-width="2"/>

        <path d="M62 68 L82 70"
            stroke="#76564c"
            stroke-width="2"/>

        <!-- tail -->
        <path d="
            M75 100
            Q95 95 88 76
        "
        fill="none"
        stroke="#f5a91f"
        stroke-width="9"
        stroke-linecap="round"/>

        <!-- feet -->
        <ellipse cx="38" cy="119" rx="13" ry="7"
            fill="#e99b1d"/>

        <ellipse cx="62" cy="119" rx="13" ry="7"
            fill="#e99b1d"/>

    </svg>
    `;
}


function dogSVG() {

    return `
    <svg class="animal-svg" viewBox="0 0 100 130">

        <!-- floppy ears -->
        <ellipse cx="26" cy="53" rx="13" ry="25"
            fill="#9a6550"
            transform="rotate(-18 26 53)"/>

        <ellipse cx="74" cy="53" rx="13" ry="25"
            fill="#9a6550"
            transform="rotate(18 74 53)"/>

        <!-- body -->
        <ellipse cx="50" cy="91" rx="29" ry="32"
            fill="#f1e1ce"/>

        <!-- head -->
        <circle cx="50" cy="57" r="28"
            fill="#f1e1ce"/>

        <!-- brown face patch -->
        <ellipse cx="35" cy="51" rx="8" ry="12"
            fill="#9a6550"/>

        <!-- eyes -->
        <circle cx="40" cy="55" r="3"
            fill="#302622"/>

        <circle cx="60" cy="55" r="3"
            fill="#302622"/>

        <!-- muzzle -->
        <ellipse cx="50" cy="67" rx="15" ry="11"
            fill="#fff4e7"/>

        <!-- nose -->
        <ellipse cx="50" cy="64" rx="6" ry="4"
            fill="#342523"/>

        <!-- tongue -->
        <path d="
            M46 70
            Q50 84 54 70
        "
        fill="#e9889a"/>

        <!-- arms -->
        <ellipse cx="24" cy="91" rx="8" ry="19"
            fill="#f1e1ce"
            transform="rotate(15 24 91)"/>

        <ellipse cx="76" cy="91" rx="8" ry="19"
            fill="#f1e1ce"
            transform="rotate(-15 76 91)"/>

        <!-- feet -->
        <ellipse cx="38" cy="119" rx="13" ry="7"
            fill="#e8d5c0"/>

        <ellipse cx="62" cy="119" rx="13" ry="7"
            fill="#e8d5c0"/>

    </svg>
    `;
}


/* =========================================================
   10. BIRTHDAY ELEMENT REVEAL
   ========================================================= */

function revealBirthdayElements() {

    const room = $("#screen-birthday-room");

    room.querySelector(".birthday-banner").style.animation =
        "bannerDrop .9s ease both";

    room.querySelectorAll(".room-lights span").forEach(
        (light, index) => {

            light.style.animationDelay =
                `${index * 0.12}s`;
        }
    );
}


/* =========================================================
   11. NUMBER CANDLES
   ========================================================= */

function createNumberCandles() {

    const old = $("#cake-candles");

    if (old) {
        old.remove();
    }

    const candleContainer = document.createElement("div");

    candleContainer.id = "cake-candles";

    candleContainer.className = "number-candles";

    const ageString = String(birthday.age);

    [...ageString].forEach((digit, index) => {

        const candle = document.createElement("div");

        candle.className = "number-candle";

        candle.dataset.digit = digit;

        candle.innerHTML = `
            ${digit}
            <span class="number-flame"></span>
        `;

        candle.style.animationDelay =
            `${index * 0.15}s`;

        candleContainer.appendChild(candle);
    });

    $("#screen-birthday-room .room-background")
        .appendChild(candleContainer);
}


/* =========================================================
   12. BLOW CANDLES
   ========================================================= */

$("#blow-candles-button").addEventListener("click", () => {

    const candles = $$(".number-candle");

    candles.forEach((candle, index) => {

        setTimeout(() => {

            candle.classList.add("blown");

        }, index * 120);
    });


    const button = $("#blow-candles-button");

    button.disabled = true;

    button.textContent = "Wish sent into the universe ✨";


    setTimeout(() => {

        hide($("#cake-interaction"));

        show($("#after-cake"));

    }, 1000);
});


/* =========================================================
   13. GO TO FLOWER SHOP
   ========================================================= */

$("#to-flower-shop").addEventListener("click", () => {

    showScreen("screen-flower-shop");

    initializeFlowerShop();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* =========================================================
   14. FLOWER SHOP INITIALIZATION
   ========================================================= */

function initializeFlowerShop() {

    birthday.flowers = [];
    birthday.greenery = [];
    birthday.ribbon = null;
    birthday.wrapping = null;

    activeFlower = null;
    activeGreenery = null;

    createFlowerCards("#flower-grid-1");
    createFlowerCards("#flower-grid-2");

    createGreeneryCards();

    createRibbonCards();

    createWrappingCards();

    updateBasketCount();

    updateShopProgress(1);

    hide($("#bouquet-reveal"));

    show($("#shop-step-1"));

    $$(".shop-step").forEach(step => {
        if (step.id !== "shop-step-1") {
            step.classList.remove("active");
        }
    });

    resetFlowerSelectionUI();

    resetGreeneryUI();

    $("#add-ribbon").disabled = true;
    $("#add-wrapping").disabled = true;

    $("#ribbon-preview-name").textContent =
        "Choose your ribbon";

    $("#wrapping-preview-name").textContent =
        "Choose your wrapping";
}


/* =========================================================
   15. CREATE FLOWER CARDS
   ========================================================= */

function createFlowerCards(gridSelector) {

    const grid = $(gridSelector);

    if (!grid) return;

    grid.innerHTML = "";

    flowers.forEach((flower, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "flower-card";

        card.dataset.index = index;

        card.innerHTML = `
            <span class="flower-emoji">
                ${flower.emoji}
            </span>

            <span class="flower-name">
                ${flower.name}
            </span>
        `;

        card.addEventListener("click", () => {

            selectFlower(index);

        });

        grid.appendChild(card);
    });
}


/* =========================================================
   16. SELECT FLOWER
   ========================================================= */

function selectFlower(index) {

    activeFlower = index;

    const flower = flowers[index];

    /*
       If the flower isn't already in the bouquet,
       create it with quantity 1.
    */

    let existing =
        birthday.flowers.find(
            item => item.index === index
        );

    if (!existing) {

        existing = {
            index,
            name: flower.name,
            emoji: flower.emoji,
            color: flower.color,
            quantity: 1
        };

        birthday.flowers.push(existing);
    }

    updateFlowerCards();

    updateFlowerSelectionPanel();

    updateBasketCount();

    updateFlowerSummary();
}


/* =========================================================
   17. UPDATE FLOWER CARDS
   ========================================================= */

function updateFlowerCards() {

    $$(".flower-card").forEach(card => {

        const index = Number(card.dataset.index);

        const exists =
            birthday.flowers.some(
                flower => flower.index === index
            );

        card.classList.toggle(
            "selected",
            exists
        );
    });
}


/* =========================================================
   18. FLOWER QUANTITY
   ========================================================= */

function changeFlowerQuantity(amount) {

    if (activeFlower === null) return;

    const flower =
        birthday.flowers.find(
            item => item.index === activeFlower
        );

    if (!flower) return;

    flower.quantity += amount;

    if (flower.quantity < 1) {

        birthday.flowers =
            birthday.flowers.filter(
                item => item.index !== activeFlower
            );

        activeFlower = null;
    }

    updateFlowerSelectionPanel();

    updateFlowerCards();

    updateFlowerSummary();

    updateBasketCount();
}


$("#quantity-minus").addEventListener(
    "click",
    () => changeFlowerQuantity(-1)
);


$("#quantity-plus").addEventListener(
    "click",
    () => changeFlowerQuantity(1)
);


$("#quantity-minus-2").addEventListener(
    "click",
    () => changeFlowerQuantity(-1)
);


$("#quantity-plus-2").addEventListener(
    "click",
    () => changeFlowerQuantity(1)
);


/* =========================================================
   19. FLOWER SELECTION PANEL
   ========================================================= */

function updateFlowerSelectionPanel() {

    const selected1 = $("#selected-flower-1");
    const selected2 = $("#selected-flower-2");

    const quantity1 = $("#flower-quantity");
    const quantity2 = $("#flower-quantity-2");

    if (activeFlower === null) {

        if (selected1) {
            selected1.textContent =
                "Nothing chosen yet";
        }

        if (selected2) {
            selected2.textContent =
                "Nothing chosen yet";
        }

        if (quantity1) quantity1.textContent = "1";
        if (quantity2) quantity2.textContent = "1";

        return;
    }

    const flower =
        birthday.flowers.find(
            item => item.index === activeFlower
        );

    if (!flower) return;

    if (selected1) {
        selected1.textContent =
            `${flower.emoji} ${flower.name}`;
    }

    if (selected2) {
        selected2.textContent =
            `${flower.emoji} ${flower.name}`;
    }

    if (quantity1) {
        quantity1.textContent =
            flower.quantity;
    }

    if (quantity2) {
        quantity2.textContent =
            flower.quantity;
    }
}


/* =========================================================
   20. FLOWER SUMMARY CHIPS
   ========================================================= */

function updateFlowerSummary() {

    let panel =
        document.querySelector(
            ".flower-selection-summary"
        );

    if (!panel) {

        panel = document.createElement("div");

        panel.className =
            "multi-selection-summary flower-selection-summary";

        const step1 =
            $("#shop-step-1 .selection-panel");

        if (step1) {
            step1.after(panel);
        }
    }

    panel.innerHTML = "";

    birthday.flowers.forEach(flower => {

        const chip =
            document.createElement("span");

        chip.className = "selection-chip";

        chip.innerHTML =
            `${flower.emoji} ${flower.name} <strong>×${flower.quantity}</strong>`;

        panel.appendChild(chip);
    });
}


/* =========================================================
   21. STEP 1 → STEP 2
   ========================================================= */

$("#add-first-flower").addEventListener(
    "click",
    () => {

        if (birthday.flowers.length === 0) {
            return;
        }

        goToShopStep(2);
    }
);


/* =========================================================
   22. STEP 2
   ========================================================= */

$("#add-second-flower").addEventListener(
    "click",
    () => {

        if (birthday.flowers.length === 0) {
            return;
        }

        goToShopStep(3);
    }
);


$("#skip-second-flower").addEventListener(
    "click",
    () => {

        if (birthday.flowers.length === 0) {
            return;
        }

        goToShopStep(3);
    }
);


/* =========================================================
   23. GREENERY CARDS
   ========================================================= */

function createGreeneryCards() {

    const grid = $("#greenery-grid");

    if (!grid) return;

    grid.innerHTML = "";

    greenery.forEach((item, index) => {

        const card = document.createElement("button");

        card.type = "button";

        card.className = "greenery-card";

        card.dataset.index = index;

        card.innerHTML = `
            <span class="greenery-emoji">
                ${item.emoji}
            </span>

            <span>
                ${item.name}
            </span>
        `;

        card.addEventListener(
            "click",
            () => selectGreenery(index)
        );

        grid.appendChild(card);
    });
}


/* =========================================================
   24. SELECT GREENERY
   ========================================================= */

function selectGreenery(index) {

    activeGreenery = index;

    const item = greenery[index];

    let existing =
        birthday.greenery.find(
            green => green.index === index
        );

    if (!existing) {

        existing = {
            index,
            name: item.name,
            emoji: item.emoji,
            color: item.color,
            quantity: 1
        };

        birthday.greenery.push(existing);
    }

    updateGreeneryCards();

    updateGreeneryPanel();

    updateGreenerySummary();

    updateBasketCount();
}


/* =========================================================
   25. GREENERY QUANTITY
   ========================================================= */

function changeGreeneryQuantity(amount) {

    if (activeGreenery === null) return;

    const item =
        birthday.greenery.find(
            green => green.index === activeGreenery
        );

    if (!item) return;

    item.quantity += amount;

    if (item.quantity < 1) {

        birthday.greenery =
            birthday.greenery.filter(
                green => green.index !== activeGreenery
            );

        activeGreenery = null;
    }

    updateGreeneryCards();

    updateGreeneryPanel();

    updateGreenerySummary();

    updateBasketCount();
}


$("#greenery-minus").addEventListener(
    "click",
    () => changeGreeneryQuantity(-1)
);


$("#greenery-plus").addEventListener(
    "click",
    () => changeGreeneryQuantity(1)
);


/* =========================================================
   26. GREENERY UI
   ========================================================= */

function updateGreeneryCards() {

    $$(".greenery-card").forEach(card => {

        const index =
            Number(card.dataset.index);

        const exists =
            birthday.greenery.some(
                item => item.index === index
            );

        card.classList.toggle(
            "selected",
            exists
        );
    });
}


function updateGreeneryPanel() {

    const selected =
        $("#selected-greenery");

    const quantity =
        $("#greenery-quantity");

    if (
        activeGreenery === null
    ) {

        selected.textContent =
            "None yet";

        quantity.textContent =
            "1";

        return;
    }

    const item =
        birthday.greenery.find(
            green => green.index === activeGreenery
        );

    if (!item) return;

    selected.textContent =
        `${item.emoji} ${item.name}`;

    quantity.textContent =
        item.quantity;
}


function updateGreenerySummary() {

    let panel =
        document.querySelector(
            ".greenery-selection-summary"
        );

    if (!panel) {

        panel = document.createElement("div");

        panel.className =
            "multi-selection-summary greenery-selection-summary";

        const step3 =
            $("#shop-step-3 .selection-panel");

        if (step3) {
            step3.after(panel);
        }
    }

    panel.innerHTML = "";

    birthday.greenery.forEach(item => {

        const chip =
            document.createElement("span");

        chip.className =
            "selection-chip";

        chip.innerHTML =
            `${item.emoji} ${item.name} <strong>×${item.quantity}</strong>`;

        panel.appendChild(chip);
    });
}


/* =========================================================
   27. GREENERY NEXT
   ========================================================= */

$("#add-greenery").addEventListener(
    "click",
    () => {

        goToShopStep(4);

    }
);


$("#skip-greenery").addEventListener(
    "click",
    () => {

        birthday.greenery = [];

        activeGreenery = null;

        updateBasketCount();

        goToShopStep(4);

    }
);


/* =========================================================
   28. RIBBONS
   ========================================================= */

function createRibbonCards() {

    const grid = $("#ribbon-grid");

    if (!grid) return;

    grid.innerHTML = "";

    ribbons.forEach((ribbon, index) => {

        const card =
            document.createElement("button");

        card.type = "button";

        card.className =
            "ribbon-card";

        card.dataset.index = index;

        card.style.setProperty(
            "--ribbon-color",
            ribbon.color
        );

        card.innerHTML = `
            <span
                class="ribbon-symbol"
                style="--ribbon-color:${ribbon.color}"
            >
                ${ribbon.emoji}
            </span>

            <span>
                ${ribbon.name}
            </span>
        `;

        card.addEventListener(
            "click",
            () => selectRibbon(index)
        );

        grid.appendChild(card);
    });
}


function selectRibbon(index) {

    birthday.ribbon =
        ribbons[index];

    $$(".ribbon-card").forEach(card => {

        card.classList.toggle(
            "selected",
            Number(card.dataset.index) === index
        );

    });

    $("#ribbon-preview-icon").textContent =
        birthday.ribbon.emoji;

    $("#ribbon-preview-name").textContent =
        birthday.ribbon.name;

    $("#add-ribbon").disabled = false;
}


$("#add-ribbon").addEventListener(
    "click",
    () => {

        if (!birthday.ribbon) return;

        goToShopStep(5);

    }
);


/* =========================================================
   29. WRAPPING
   ========================================================= */

function createWrappingCards() {

    const grid = $("#wrapping-grid");

    if (!grid) return;

    grid.innerHTML = "";

    wrappings.forEach((wrap, index) => {

        const card =
            document.createElement("button");

        card.type = "button";

        card.className =
            "wrapping-card";

        card.dataset.index = index;

        card.style.setProperty(
            "--wrap-color",
            wrap.color
        );

        card.innerHTML = `
            <span
                class="paper-preview"
                style="--wrap-color:${wrap.color}"
            ></span>

            <span>
                ${wrap.name}
            </span>
        `;

        card.addEventListener(
            "click",
            () => selectWrapping(index)
        );

        grid.appendChild(card);
    });
}


function selectWrapping(index) {

    birthday.wrapping =
        wrappings[index];

    $$(".wrapping-card").forEach(card => {

        card.classList.toggle(
            "selected",
            Number(card.dataset.index) === index
        );

    });

    $("#wrapping-preview-name").textContent =
        birthday.wrapping.name;

    $("#wrapping-preview")
        .style.setProperty(
            "--preview-wrap",
            birthday.wrapping.color
        );

    $("#add-wrapping").disabled = false;
}


$("#add-wrapping").addEventListener(
    "click",
    () => {

        if (!birthday.wrapping) return;

        buildFinalBouquet();

    }
);


/* =========================================================
   30. SHOP STEP NAVIGATION
   ========================================================= */

function goToShopStep(number) {

    $$(".shop-step").forEach(step => {
        step.classList.remove("active");
    });

    const target =
        $(`#shop-step-${number}`);

    if (target) {
        target.classList.add("active");
    }

    updateShopProgress(number);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    updateBasketCount();
}


function updateShopProgress(number) {

    const labels = [
        "Choose your flowers",
        "Add another flower",
        "Choose your greenery",
        "Pick your ribbon",
        "Choose your wrapping"
    ];

    $("#shop-step-label").textContent =
        labels[number - 1];

    $("#shop-step-number").textContent =
        `${number} / 5`;

    $("#shop-progress-bar").style.width =
        `${number * 20}%`;
}


/* =========================================================
   31. BASKET COUNT
   ========================================================= */

function updateBasketCount() {

    const flowerCount =
        birthday.flowers.reduce(
            (total, flower) =>
                total + flower.quantity,
            0
        );

    const greeneryCount =
        birthday.greenery.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );

    $("#basket-count").textContent =
        flowerCount + greeneryCount;
}


/* =========================================================
   32. FINAL BOUQUET
   ========================================================= */

function buildFinalBouquet() {

    $$(".shop-step").forEach(step => {
        step.classList.remove("active");
    });

    const reveal =
        $("#bouquet-reveal");

    reveal.classList.remove("hidden");

    updateShopProgress(5);

    const visual =
        $("#bouquet-visual");

    visual.innerHTML = "";

    const bouquet =
        document.createElement("div");

    bouquet.className =
        "real-bouquet";


    /*
       WRAPPING
    */

    const paper =
        document.createElement("div");

    paper.className =
        "bouquet-paper";

    paper.style.background =
        birthday.wrapping.color;

    paper.innerHTML = `
        <div class="bouquet-paper-fold"></div>
    `;

    bouquet.appendChild(paper);


    /*
       STEMS
    */

    const stems =
        document.createElement("div");

    stems.className =
        "bouquet-stems";

    bouquet.appendChild(stems);


    /*
       ALL FLOWERS
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
       Shuffle flowers so same types aren't
       always sitting beside one another.
    */

    shuffleArray(flowerInstances);


    const positions =
        createBouquetPositions(
            flowerInstances.length
        );


    flowerInstances.forEach(
        (flower, index) => {

            const stem =
                document.createElement("span");

            stem.className =
                "bouquet-stem";

            const position =
                positions[index];

            stem.style.height =
                `${position.stemHeight}px`;

            stem.style.transform =
                `translateX(-50%) rotate(${position.angle}deg)`;

            stems.appendChild(stem);


            const head =
                document.createElement("span");

            head.className =
                "bouquet-flower-head";

            head.textContent =
                flower.emoji;

            head.style.left =
                `${position.x}%`;

            head.style.top =
                `${position.y}%`;

            head.style.setProperty(
                "--rotation",
                `${position.flowerRotation}deg`
            );

            head.style.animationDelay =
                `${index * 0.06}s`;

            head.title =
                flower.name;

            bouquet.appendChild(head);
        }
    );


    /*
       GREENERY
    */

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


    const greeneryPositions =
        createGreeneryPositions(
            greeneryInstances.length
        );


    greeneryInstances.forEach(
        (item, index) => {

            const leaf =
                document.createElement("span");

            leaf.className =
                "bouquet-greenery-item";

            leaf.textContent =
                item.emoji;

            const pos =
                greeneryPositions[index];

            leaf.style.left =
                `${pos.x}%`;

            leaf.style.top =
                `${pos.y}%`;

            leaf.style.setProperty(
                "--rotation",
                `${pos.rotation}deg`
            );

            bouquet.appendChild(leaf);
        }
    );


    /*
       RIBBON
    */

    const bow =
        document.createElement("div");

    bow.className =
        "bouquet-bow";

    bow.style.setProperty(
        "--bow-color",
        birthday.ribbon.color
    );

    bow.innerHTML = `
        <div class="bow-left"></div>
        <div class="bow-right"></div>
        <div class="bow-knot"></div>
        <div class="bow-tail-left"></div>
        <div class="bow-tail-right"></div>
    `;

    bouquet.appendChild(bow);


    visual.appendChild(bouquet);

    buildBouquetDetails();

    /*
       Small delay makes the final reveal feel intentional.
    */

    reveal.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}


/* =========================================================
   33. BOUQUET POSITIONS
   ========================================================= */

function createBouquetPositions(count) {

    const positions = [];

    const centerX = 50;
    const centerY = 34;

    for (let i = 0; i < count; i++) {

        /*
           Spread flowers in layers.

           The first flowers are higher,
           later flowers fill the sides.
        */

        const layer =
            Math.floor(i / 7);

        const angle =
            -24 +
            Math.random() * 48;

        const x =
            centerX +
            (
                (i % 7) - 3
            ) * 9 +
            (Math.random() * 6 - 3);

        const y =
            centerY +
            layer * 9 +
            Math.random() * 7;

        positions.push({

            x: Math.max(13, Math.min(87, x)),

            y: Math.max(12, Math.min(52, y)),

            angle,

            flowerRotation:
                Math.random() * 20 - 10,

            stemHeight:
                160 +
                Math.random() * 55
        });
    }

    return positions;
}


function createGreeneryPositions(count) {

    const positions = [];

    for (let i = 0; i < count; i++) {

        const side =
            i % 2 === 0 ? -1 : 1;

        positions.push({

            x:
                50 +
                side *
                (
                    25 +
                    Math.random() * 22
                ),

            y:
                30 +
                Math.random() * 30,

            rotation:
                side *
                (
                    20 +
                    Math.random() * 25
                )
        });
    }

    return positions;
}


/* =========================================================
   34. SHUFFLE
   ========================================================= */

function shuffleArray(array) {

    for (
        let i = array.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [
            array[i],
            array[j]
        ] = [
            array[j],
            array[i]
        ];
    }

    return array;
}


/* =========================================================
   35. BOUQUET DETAILS
   ========================================================= */

function buildBouquetDetails() {

    const details =
        $("#bouquet-details");

    details.innerHTML = "";


    /*
       FLOWERS
    */

    const flowerHeading =
        document.createElement("h3");

    flowerHeading.textContent =
        "Your flowers";

    details.appendChild(
        flowerHeading
    );


    birthday.flowers.forEach(
        flower => {

            const p =
                document.createElement("p");

            p.textContent =
                `${flower.emoji} ${flower.name} × ${flower.quantity}`;

            details.appendChild(p);
        }
    );


    /*
       GREENERY
    */

    if (birthday.greenery.length > 0) {

        const heading =
            document.createElement("h3");

        heading.textContent =
            "Greenery";

        details.appendChild(
            heading
        );


        birthday.greenery.forEach(
            item => {

                const p =
                    document.createElement("p");

                p.textContent =
                    `${item.emoji} ${item.name} × ${item.quantity}`;

                details.appendChild(p);

            }
        );
    }


    /*
       RIBBON
    */

    const ribbonHeading =
        document.createElement("h3");

    ribbonHeading.textContent =
        "Ribbon";

    details.appendChild(
        ribbonHeading
    );


    const ribbonText =
        document.createElement("p");

    ribbonText.textContent =
        `${birthday.ribbon.emoji} ${birthday.ribbon.name}`;

    details.appendChild(
        ribbonText
    );


    /*
       WRAPPING
    */

    const wrappingHeading =
        document.createElement("h3");

    wrappingHeading.textContent =
        "Wrapping";

    details.appendChild(
        wrappingHeading
    );


    const wrappingText =
        document.createElement("p");

    wrappingText.textContent =
        `${birthday.wrapping.emoji} ${birthday.wrapping.name}`;

    details.appendChild(
        wrappingText
    );
}


/* =========================================================
   36. OPEN LETTER
   ========================================================= */

$("#open-letter").addEventListener(
    "click",
    () => {

        showScreen("screen-letter");

        buildMiniBouquet();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
);


/* =========================================================
   37. MINI BOUQUET FOR LETTER
   ========================================================= */

function buildMiniBouquet() {

    const container =
        $("#final-bouquet-mini");

    container.innerHTML = "";

    let flowerCount = 0;

    birthday.flowers.forEach(
        flower => {

            const amount =
                Math.min(
                    flower.quantity,
                    3
                );

            for (
                let i = 0;
                i < amount;
                i++
            ) {

                const span =
                    document.createElement("span");

                span.className =
                    "mini-flower";

                span.textContent =
                    flower.emoji;

                span.style.animationDelay =
                    `${flowerCount * 0.12}s`;

                container.appendChild(
                    span
                );

                flowerCount++;
            }
        }
    );


    const ribbon =
        document.createElement("span");

    ribbon.className =
        "mini-ribbon";

    ribbon.textContent =
        "🎀";

    container.appendChild(
        ribbon
    );
}


/* =========================================================
   38. RESTART
   ========================================================= */

$("#restart-birthday").addEventListener(
    "click",
    () => {

        birthday.name = "";
        birthday.age = 0;

        birthday.flowers = [];
        birthday.greenery = [];

        birthday.ribbon = null;
        birthday.wrapping = null;

        activeFlower = null;
        activeGreenery = null;

        $("#name-input").value = "";
        $("#age-input").value = "";

        $("#personalize-error").textContent = "";

        hide($("#after-cake"));

        show($("#cake-interaction"));

        const blowButton =
            $("#blow-candles-button");

        blowButton.disabled = false;

        blowButton.textContent =
            "💨 Blow out the candles";

        showScreen("screen-personalize");
    }
);


/* =========================================================
   39. RESET FLOWER UI
   ========================================================= */

function resetFlowerSelectionUI() {

    $("#selected-flower-1").textContent =
        "Nothing chosen yet";

    $("#selected-flower-2").textContent =
        "Nothing chosen yet";

    $("#flower-quantity").textContent =
        "1";

    $("#flower-quantity-2").textContent =
        "1";

    $("#add-first-flower").disabled = false;

    $("#add-second-flower").disabled = false;

    const oldSummary =
        document.querySelector(
            ".flower-selection-summary"
        );

    if (oldSummary) {
        oldSummary.remove();
    }
}


function resetGreeneryUI() {

    $("#selected-greenery").textContent =
        "None yet";

    $("#greenery-quantity").textContent =
        "1";

    $("#add-greenery").disabled = false;

    const oldSummary =
        document.querySelector(
            ".greenery-selection-summary"
        );

    if (oldSummary) {
        oldSummary.remove();
    }
}


/* =========================================================
   40. ACCESSIBILITY / ENTER KEY
   ========================================================= */

$("#age-input").addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            $("#personalize-next").click();
        }
    }
);


$("#name-input").addEventListener(
    "keydown",
    event => {

        if (event.key === "Enter") {
            $("#age-input").focus();
        }
    }
);


/* =========================================================
   41. INITIAL STATE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateBasketCount();

        updateShopProgress(1);

    }
);
