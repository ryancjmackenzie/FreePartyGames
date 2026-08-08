console.log("Impostor Game Settings loaded");


/* ==========================
   ELEMENTS
========================== */

const playerList = document.getElementById("playerList");

const addPlayerButton =
    document.getElementById("addPlayerButton");

const imposterCount =
    document.getElementById("imposterCount");

const imposterInfo =
    document.getElementById("imposterInfo");

const timeLimit =
    document.getElementById("timeLimit");

const startGameButton =
    document.getElementById("startGameButton");

const playerError =
    document.getElementById("playerError");

const startError =
    document.getElementById("startError");


/* ==========================
   SETTINGS
========================== */

const MIN_PLAYERS = 2;
const MAX_PLAYERS = 20;


/* ==========================
   GET PLAYERS
========================== */

function getPlayers() {

    const inputs =
        document.querySelectorAll(".player-input");

    return Array.from(inputs).map(input =>
        input.value.trim()
    );
}


/* ==========================
   UPDATE PLAYER NUMBERS
========================== */

function updatePlayerNumbers() {

    const rows =
        document.querySelectorAll(".player-row");

    rows.forEach((row, index) => {

        const number =
            row.querySelector(".player-number");

        number.textContent = index + 1;

    });
}


/* ==========================
   UPDATE REMOVE BUTTONS
========================== */

function updateRemoveButtons() {

    const rows =
        document.querySelectorAll(".player-row");

    rows.forEach(row => {

        const button =
            row.querySelector(".remove-player");

        button.disabled =
            rows.length <= MIN_PLAYERS;

    });
}


/* ==========================
   UPDATE IMPOSTER OPTIONS
========================== */

function updateImposterOptions() {

    const playerCount =
        document.querySelectorAll(".player-row").length;


    /*
        Maximum imposters:

        Number of players - 2

        Example:

        3 players = 1 imposter
        4 players = 2 imposters
        5 players = 3 imposters
        6 players = 4 imposters
    */

    const maxImposters =
        Math.max(1, playerCount - 2);


    const currentValue =
        parseInt(imposterCount.value);


    // Remove existing options
    imposterCount.innerHTML = "";


    // Create new options
    for (
        let i = 1;
        i <= maxImposters;
        i++
    ) {

        const option =
            document.createElement("option");

        option.value = i;

        option.textContent =
            i === 1
                ? "1 Imposter"
                : `${i} Imposters`;

        imposterCount.appendChild(option);

    }


    /*
        Keep the current value if
        it is still valid.
    */

    if (currentValue <= maxImposters) {

        imposterCount.value =
            currentValue;

    } else {

        imposterCount.value =
            maxImposters;

    }


    // Update information text

    if (playerCount < 3) {

        imposterInfo.textContent =
            "You need at least 3 players for an imposter.";

    } else {

        imposterInfo.textContent =
            `With ${playerCount} players, you can have up to ${maxImposters} imposter${maxImposters === 1 ? "" : "s"}.`;

    }
}


/* ==========================
   ADD PLAYER
========================== */

function addPlayer() {

    const playerCount =
        document.querySelectorAll(".player-row").length;


    if (playerCount >= MAX_PLAYERS) {

        playerError.textContent =
            `You can have a maximum of ${MAX_PLAYERS} players.`;

        return;
    }


    playerError.textContent = "";


    const row =
        document.createElement("div");

    row.className =
        "player-row";


    row.innerHTML = `
        <span class="player-number">
            ${playerCount + 1}
        </span>

        <input
            type="text"
            class="player-input"
            placeholder="Player name"
            maxlength="20"
        >

        <button
            type="button"
            class="remove-player"
            aria-label="Remove player"
        >
            ×
        </button>
    `;


    playerList.appendChild(row);


    // Focus the new player input

    const input =
        row.querySelector(".player-input");

    input.focus();


    updatePlayerNumbers();
    updateRemoveButtons();
    updateImposterOptions();

}


/* ==========================
   REMOVE PLAYER
========================== */

function removePlayer(button) {

    const rows =
        document.querySelectorAll(".player-row");


    if (rows.length <= MIN_PLAYERS) {

        return;
    }


    const row =
        button.closest(".player-row");


    row.remove();


    updatePlayerNumbers();
    updateRemoveButtons();
    updateImposterOptions();

}


/* ==========================
   PLAYER BUTTON EVENTS
========================== */

addPlayerButton.addEventListener(
    "click",
    addPlayer
);


playerList.addEventListener(
    "click",
    function (event) {

        if (
            event.target.classList.contains(
                "remove-player"
            )
        ) {

            removePlayer(event.target);

        }

    }
);


/* ==========================
   VALIDATE PLAYERS
========================== */

function validatePlayers() {

    const inputs =
        document.querySelectorAll(".player-input");

    const names = [];

    for (const input of inputs) {

        const name =
            input.value.trim();


        if (name === "") {

            playerError.textContent =
                "Every player must have a name.";

            input.focus();

            return false;
        }


        if (names.includes(name.toLowerCase())) {

            playerError.textContent =
                "Player names must be unique.";

            input.focus();

            return false;
        }


        names.push(
            name.toLowerCase()
        );

    }


    playerError.textContent = "";

    return true;
}


/* ==========================
   START GAME
========================== */

startGameButton.addEventListener(
    "click",
    function () {

        startError.textContent = "";


        // Validate names

        if (!validatePlayers()) {

            return;
        }


        const players =
            getPlayers();


        const numberOfPlayers =
            players.length;


        const numberOfImposters =
            parseInt(imposterCount.value);


        const selectedTime =
            parseInt(timeLimit.value);


        /*
            Safety check:

            Imposters must be at least
            2 fewer than the number of players.
        */

        const maximumImposters =
            numberOfPlayers - 2;


        if (
            numberOfImposters >
            maximumImposters
        ) {

            startError.textContent =
                "There must be at least 2 non-imposters.";

            return;
        }


        /*
            Save game settings.

            The next game page can retrieve
            these using localStorage.
        */

        const gameSettings = {

            players: players,

            imposters: numberOfImposters,

            timeLimit: selectedTime

        };


        localStorage.setItem(
            "impostorGameSettings",
            JSON.stringify(gameSettings)
        );


        console.log(
            "Game settings:",
            gameSettings
        );


        /*
            Change this to the actual
            Imposter game page when ready.
        */

        window.location.href =
            "/HTML/Impostor/Impostor_Gameplay.html";

    }
);


/* ==========================
   INITIALISE
========================== */

updatePlayerNumbers();

updateRemoveButtons();

updateImposterOptions();