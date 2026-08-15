/* ==========================
   IMPOSTOR GAMEPLAY
========================== */

console.log("Impostor Gameplay loaded");


/* ==========================
   LOAD GAME SETTINGS
========================== */

const savedSettings =
    localStorage.getItem("impostorGameSettings");


if (!savedSettings) {

    alert("No game settings found.");

    window.location.href =
        "/HTML/Impostor/Impostor_Game_Settings.html";
}


const gameSettings =
    JSON.parse(savedSettings);


/* ==========================
   GAME DATA
========================== */

const players =
    gameSettings.players;

const numberOfImposters =
    gameSettings.imposters;


/*
    These can later be replaced with
    a random word/theme generator.
*/

const wordCategories = {
    FOOD: [
        "PIZZA",
        "BURGER",
        "PASTA",
        "CHIPS",
        "TACO",
        "SUSHI",
        "HOTDOG",
        "POPCORN",
        "DONUT",
        "ICE CREAM",
        "CHOCOLATE",
        "CAKE",
        "COOKIE",
        "PANCAKES",
        "WAFFLES",
        "FRIES",
        "SANDWICH",
        "CHEESE",
        "BACON",
        "STEAK"
    ],

    ANIMALS: [
        "DOG",
        "CAT",
        "LION",
        "TIGER",
        "ELEPHANT",
        "GIRAFFE",
        "MONKEY",
        "ZEBRA",
        "HORSE",
        "DOLPHIN",
        "SHARK",
        "PENGUIN",
        "KOALA",
        "KANGAROO",
        "CROCODILE",
        "SNAKE",
        "TURTLE",
        "RABBIT",
        "BEAR",
        "WOLF"
    ],

    SPORTS: [
        "FOOTBALL",
        "BASKETBALL",
        "TENNIS",
        "GOLF",
        "BOXING",
        "RUGBY",
        "CRICKET",
        "SWIMMING",
        "CYCLING",
        "HOCKEY",
        "BASEBALL",
        "VOLLEYBALL",
        "BADMINTON",
        "SKIING",
        "SURFING",
        "WRESTLING",
        "DARTS",
        "SNOOKER",
        "ATHLETICS",
        "FENCING"
    ],

    PLACES: [
        "BEACH",
        "AIRPORT",
        "SCHOOL",
        "HOSPITAL",
        "RESTAURANT",
        "CINEMA",
        "SUPERMARKET",
        "LIBRARY",
        "GYM",
        "HOTEL",
        "CASTLE",
        "MUSEUM",
        "ZOO",
        "THEME PARK",
        "STADIUM",
        "TRAIN STATION",
        "PARK",
        "NIGHTCLUB",
        "SHOPPING CENTRE",
        "CAMPSITE"
    ],

    JOBS: [
        "DOCTOR",
        "TEACHER",
        "POLICE OFFICER",
        "FIREFIGHTER",
        "CHEF",
        "PILOT",
        "LAWYER",
        "DENTIST",
        "ENGINEER",
        "PROGRAMMER",
        "BARBER",
        "MECHANIC",
        "BUILDER",
        "FARMER",
        "PHOTOGRAPHER",
        "ACTOR",
        "MUSICIAN",
        "JOURNALIST",
        "SCIENTIST",
        "VET"
    ],

    BELONGINGS: [
        "PHONE",
        "LAPTOP",
        "TELEVISION",
        "CHAIR",
        "TABLE",
        "BACKPACK",
        "UMBRELLA",
        "CLOCK",
        "CAMERA",
        "GUITAR",
        "HEADPHONES",
        "KEYBOARD",
        "BICYCLE",
        "WALLET",
        "WATCH",
        "MIRROR",
        "LAMP",
        "PILLOW",
        "SUITCASE",
        "REMOTE"
    ],

    VEHICLES: [
        "CAR",
        "BUS",
        "TRAIN",
        "AEROPLANE",
        "HELICOPTER",
        "BOAT",
        "MOTORBIKE",
        "BICYCLE",
        "TAXI",
        "AMBULANCE",
        "FIRE ENGINE",
        "TRACTOR",
        "TRUCK",
        "SUBMARINE",
        "ROCKET",
        "LIMOUSINE",
        "VAN",
        "TRAM",
        "SCOOTER",
        "KART"
    ],

    TECHNOLOGY: [
        "COMPUTER",
        "PHONE",
        "ROBOT",
        "DRONE",
        "KEYBOARD",
        "MOUSE",
        "PRINTER",
        "SERVER",
        "WEBCAM",
        "CONSOLE",
        "CONTROLLER",
        "SMARTWATCH",
        "TABLET",
        "HEADPHONES",
        "MICROPHONE",
        "CAMERA",
        "ROUTER",
        "USB",
        "MONITOR",
        "VR HEADSET"
    ],

    HOUSEHOLD: [
        "FRIDGE",
        "OVEN",
        "MICROWAVE",
        "WASHING MACHINE",
        "TOASTER",
        "KETTLE",
        "SOFA",
        "BED",
        "SHOWER",
        "TOILET",
        "VACUUM",
        "IRON",
        "DISHWASHER",
        "WARDROBE",
        "DESK",
        "CURTAINS",
        "CARPET",
        "FAN",
        "BLENDER",
        "RADIATOR"
    ],

    ENTERTAINMENT: [
        "MOVIE",
        "VIDEO GAME",
        "CONCERT",
        "BOOK",
        "MAGIC SHOW",
        "CIRCUS",
        "THEATRE",
        "KARAOKE",
        "BOARD GAME",
        "CARD GAME",
        "COMEDY",
        "DANCE",
        "MUSIC",
        "PODCAST",
        "TV SHOW",
        "PUZZLE",
        "ESCAPE ROOM",
        "FESTIVAL",
        "QUIZ",
        "DISCO"
    ]
};

function generateGameWord() {

    const categories =
        Object.keys(wordCategories);

    const randomCategory =
        categories[
            Math.floor(
                Math.random() * categories.length
            )
        ];

    const words =
        wordCategories[randomCategory];

    const randomWord =
        words[
            Math.floor(
                Math.random() * words.length
            )
        ];

    return {
        category: randomCategory,
        word: randomWord
    };
}

let gameWord = generateGameWord();

let secretWord = gameWord.word;
let generalTheme = gameWord.category;


/* ==========================
   ELEMENTS
========================== */

const playerNumber =
    document.getElementById("playerNumber");

const playerName =
    document.getElementById("playerName");

const swipeArea =
    document.getElementById("swipeArea");

const instructionContainer =
    document.getElementById("instructionContainer");

const roleReveal =
    document.getElementById("roleReveal");

const role =
    document.getElementById("role");

const secretLabel =
    document.getElementById("secretLabel");

const secretWordElement =
    document.getElementById("secretWord");

const nextSection =
    document.getElementById("nextSection");

const nextPlayerButton =
    document.getElementById("nextPlayerButton");

const timerSection =
    document.getElementById("timerSection");

const timerElement =
    document.getElementById("timer");

const votingSection =
    document.getElementById("votingSection");

const voteList =
    document.getElementById("voteList");

const skipVoteButton =
    document.getElementById("skipVoteButton");

const successSection =
    document.getElementById("successSection");

const successTitle =
    document.getElementById("successTitle");

const successMessage =
    document.getElementById("successMessage");

const playAgainButton =
    document.getElementById("playAgainButton");

const settingsButton =
    document.getElementById("settingsButton");


/* ==========================
   CURRENT PLAYER
========================== */

let currentPlayer = 0;

let revealed = false;


/* ==========================
   SWIPE VARIABLES
========================== */

let startY = 0;

let endY = 0;

let isDragging = false;


/* ==========================
   TIMER
========================== */

let timerInterval = null;

let remainingTime = 0;


/* ==========================
   ACTIVE PLAYERS
========================== */

/*
    This contains everyone who has
    not been voted out.
*/

let activePlayers = [...players];


/* ==========================
   CREATE IMPOSTERS
========================== */

/*
    This function randomly chooses
    the imposters.

    IMPORTANT:
    It is only called once when a
    game starts/restarts.

    Therefore the same players remain
    imposters throughout the round.
*/

function createImposterList() {

    // Create an array of all player indexes
    const indexes = players.map(
        (_, index) => index
    );

    // Fisher-Yates shuffle
    for (let i = indexes.length - 1; i > 0; i--) {

        const randomIndex =
            Math.floor(
                Math.random() * (i + 1)
            );

        [indexes[i], indexes[randomIndex]] =
            [indexes[randomIndex], indexes[i]];
    }

    // Take the required number of imposters
    return indexes.slice(
        0,
        numberOfImposters
    );
}

/*
    Create the roles for this game.

    THIS ARRAY DOES NOT CHANGE
    DURING THE GAME.
*/

let imposterPlayers =
    createImposterList();

console.log(
    "Current imposters:",
    imposterPlayers.map(
        index => players[index]
    )
);


/* ==========================
   CHECK IMPOSTER
========================== */

function isCurrentPlayerImposter() {

    return imposterPlayers.includes(
        currentPlayer
    );

}


/* ==========================
   CHECK IF VOTED PLAYER
   IS AN IMPOSTER
========================== */

function isPlayerImposter(player) {

    const playerIndex =
        players.indexOf(player);


    return imposterPlayers.includes(
        playerIndex
    );

}

/* ==========================
   CHECK RYAN IMPOSTER ADVANTAGE
========================== */

function isRyanImposter() {

    return (
        players[currentPlayer] === "Ryan" &&
        isCurrentPlayerImposter()
    );

}


/* ==========================
   LOAD PLAYER
========================== */

function loadPlayer() {

    revealed = false;


    /*
        Player information
    */

    playerNumber.textContent =
        `PLAYER ${currentPlayer + 1} OF ${players.length}`;

    playerName.textContent =
        players[currentPlayer];


    /*
        Reset reveal screen
    */

    instructionContainer.style.opacity =
        "1";

    instructionContainer.style.transform =
        "translateY(0)";


    roleReveal.classList.remove(
        "visible"
    );


    nextSection.classList.remove(
        "visible"
    );


    /*
        Reset role styling
    */

    role.classList.remove(
        "imposter",
        "civilian"
    );

}


/* ==========================
   REVEAL PLAYER
========================== */

function revealPlayer() {

    if (revealed) {
        return;
    }


    revealed = true;


    const imposter =
        isCurrentPlayerImposter();


    /*
        Hide instruction
    */

    instructionContainer.style.opacity =
        "0";

    instructionContainer.style.transform =
        "translateY(-80px)";


    /*
        Show role
    */

    roleReveal.classList.add(
        "visible"
    );


    /*
        IMPOSTER
    */

    if (imposter) {

        role.textContent =
            "IMPOSTER";

        role.classList.add(
            "imposter"
        );


        /*
            RYAN SPECIAL CASE

            If Ryan is the imposter,
            he gets to see the secret word
            instead of just the general theme.
        */

        if (isRyanImposter()) {

            secretLabel.textContent = "SECRET WORD";

            secretWordElement.textContent = generalTheme + ": " + secretWord;

        }

        /*
            NORMAL IMPOSTER
        */

        else {
            secretLabel.textContent = "GENERAL THEME";

            secretWordElement.textContent = generalTheme;
        }

    }

    /*
        CIVILIAN
    */

    else {
        role.textContent = "CIVILIAN";

        role.classList.add("civilian");

        secretLabel.textContent = "SECRET WORD";

        secretWordElement.textContent = secretWord;
    }

}

/* ==========================
   HIDE PLAYER INFORMATION
========================== */

function hidePlayerInformation() {

    if (!revealed) {
        return;
    }

    /*
        Hide role/word
    */

    roleReveal.classList.remove("visible");

    instructionContainer.style.opacity = "1";

    instructionContainer.style.transform = "translateY(0)";

    /*
        Show next player
    */

    nextSection.classList.add("visible");
}


/* ==========================
   TOUCH START
========================== */

swipeArea.addEventListener(
    "touchstart",
    function (event) {

        startY = event.touches[0].clientY;

    },
    {
        passive: true
    }
);


/* ==========================
   TOUCH END
========================== */

swipeArea.addEventListener(
    "touchend",
    function (event) {

        endY = event.changedTouches[0].clientY;

        handleSwipe();

    },
    {
        passive: true
    }
);


/* ==========================
   MOUSE START
========================== */

swipeArea.addEventListener(
    "mousedown",
    function (event) {

        isDragging = true;

        startY =
            event.clientY;

    }
);


/* ==========================
   MOUSE END
========================== */

swipeArea.addEventListener(
    "mouseup",
    function (event) {

        if (!isDragging) {
            return;
        }

        isDragging = false;

        endY =
            event.clientY;

        handleSwipe();

    }
);


/* ==========================
   SWIPE HANDLER
========================== */

function handleSwipe() {

    const swipeDistance =
        endY - startY;


    /*
        SWIPE UP
    */

    if (swipeDistance < -80) {

        revealPlayer();

    }


    /*
        SWIPE DOWN
    */

    else if (swipeDistance > 80) {

        hidePlayerInformation();

    }

}


/* ==========================
   NEXT PLAYER
========================== */

nextPlayerButton.addEventListener(
    "click",
    function () {

        currentPlayer++;


        /*
            More players remaining
        */

        if (
            currentPlayer <
            players.length
        ) {

            loadPlayer();

        }


        /*
            Everyone has seen their role
        */

        else {

            startActualGame();

        }

    }
);


/* ==========================
   START ACTUAL GAME
========================== */

function startActualGame() {

    console.log(
        "All players have received their roles."
    );


    /*
        Hide player reveal
    */

    playerNumber.textContent = "";

    playerName.textContent = "";

    instructionContainer.style.opacity =
        "0";

    roleReveal.classList.remove(
        "visible"
    );

    nextSection.classList.remove(
        "visible"
    );


    /*
        Reset active players
    */

    activePlayers =
        [...players];


    /*
        Show timer
    */

    timerSection.classList.add(
        "visible"
    );


    /*
        Start countdown
    */

    startTimer();

}


/* ==========================
   START TIMER
========================== */

function startTimer() {

    /*
        Clear previous timer
    */

    if (timerInterval !== null) {

        clearInterval(
            timerInterval
        );

    }


    /*
        Get selected time
    */

    remainingTime =
        Number(
            gameSettings.timeLimit
        );


    updateTimerDisplay();


    /*
        Countdown every second
    */

    timerInterval =
        setInterval(
            function () {

                remainingTime--;

                updateTimerDisplay();


                /*
                    Timer finished
                */

                if (
                    remainingTime <= 0
                ) {

                    clearInterval(
                        timerInterval
                    );

                    timerInterval = null;

                    showVotingScreen();

                }

            },
            1000
        );

}


/* ==========================
   UPDATE TIMER
========================== */

function updateTimerDisplay() {

    const minutes =
        Math.floor(
            remainingTime / 60
        );

    const seconds =
        remainingTime % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}


/* ==========================
   SHOW VOTING SCREEN
========================== */

function showVotingScreen() {

    /*
        Hide timer
    */

    timerSection.classList.remove(
        "visible"
    );


    /*
        Create player buttons
    */

    createVotingButtons();


    /*
        Show voting
    */

    votingSection.classList.add(
        "visible"
    );

}


/* ==========================
   CREATE VOTING BUTTONS
========================== */

function createVotingButtons() {

    voteList.innerHTML = "";


    activePlayers.forEach(
        function (player) {

            const button =
                document.createElement("button");


            button.className =
                "vote-button";


            button.textContent =
                player;


            button.addEventListener(
                "click",
                function () {

                    votePlayer(player);

                }
            );


            voteList.appendChild(
                button
            );

        }
    );

}

/* ==========================
   SKIP VOTE
========================== */

skipVoteButton.addEventListener(
    "click",
    function () {

        console.log(
            "Vote skipped."
        );


        votingSection.classList.remove(
            "visible"
        );


        playerNumber.textContent = "";

        playerName.textContent = "";


        timerSection.classList.add(
            "visible"
        );


        /*
            SKIP ALWAYS STARTS
            A 1-MINUTE TIMER
        */

        if (timerInterval !== null) {

            clearInterval(
                timerInterval
            );

            timerInterval = null;

        }


        remainingTime = 60;

        updateTimerDisplay();


        timerInterval =
            setInterval(
                function () {

                    remainingTime--;

                    updateTimerDisplay();


                    if (
                        remainingTime <= 0
                    ) {

                        clearInterval(
                            timerInterval
                        );

                        timerInterval = null;

                        showVotingScreen();

                    }

                },
                1000
            );

    }
);

/* ==========================
   VOTE PLAYER
========================== */

function votePlayer(player) {

    console.log(
        `Vote selected: ${player}`
    );


    /*
        CHECK WHETHER THE VOTED
        PLAYER IS AN IMPOSTER.

        The important part is that
        imposterPlayers was created
        when the game started and
        has not changed.
    */

    const wasImposter =
        isPlayerImposter(player);


    /*
        Remove the player from the
        active player list.
    */

    activePlayers =
        activePlayers.filter(
            function (activePlayer) {

                return activePlayer !== player;

            }
        );


    /*
        Hide voting screen.
    */

    votingSection.classList.remove(
        "visible"
    );


    /*
        If an imposter was found,
        the game is immediately won.
    */

    if (wasImposter) {

        console.log(
            `${player} WAS AN IMPOSTER!`
        );


        setTimeout(
            function () {

                showSuccessScreen(
                    player
                );

            },
            400
        );


        return;
    }


    /*
        Otherwise a civilian was
        voted out.
    */

    console.log(
        `${player} was a civilian.`
    );


    playerNumber.textContent =
        "VOTED OUT";

    playerName.textContent =
        player;


    setTimeout(
        function () {

            continueAfterCivilianVote();

        },
        1200
    );

}


/* ==========================
   CIVILIAN VOTED OUT
========================== */

function continueAfterCivilianVote() {

    /*
        Check whether the imposters
        have reached majority/equality.
    */

    if (checkImposterWinCondition()) {
        return;
    }


    /*
        There are still enough civilians
        to continue the game.
    */

    playerNumber.textContent = "";

    playerName.textContent = "";


    /*
        Start another discussion round.
    */

    timerSection.classList.add(
        "visible"
    );


    startTimer();
}

function checkImposterWinCondition() {

    const remainingImposters =
        activePlayers.filter(
            function (player) {
                return isPlayerImposter(player);
            }
        ).length;

    const remainingCivilians =
        activePlayers.length -
        remainingImposters;

    console.log(
        "Remaining imposters:",
        remainingImposters
    );

    console.log(
        "Remaining civilians:",
        remainingCivilians
    );

    /*
        Imposters win when they equal
        or outnumber the civilians.
    */

    if (
        remainingImposters >=
        remainingCivilians
    ) {

        showImposterWinScreen();

        return true;
    }

    return false;
}

/* ==========================
   SUCCESS SCREEN
========================== */

function showSuccessScreen(votedOutPlayer) {

    /*
        Stop timer
    */

    if (timerInterval !== null) {

        clearInterval(timerInterval);

        timerInterval = null;

    }


    /*
        CLEAR THE OLD PLAYER TEXT
        SO IT CANNOT OVERLAP SUCCESS!
    */

    playerNumber.textContent = "";

    playerName.textContent = "";


    /*
        Set success text
    */

    successTitle.textContent =
        "IMPOSTER FOUND";

    successMessage.textContent =
        `${votedOutPlayer} was the imposter!`;


    /*
        Hide everything else
    */

    timerSection.classList.remove(
        "visible"
    );

    votingSection.classList.remove(
        "visible"
    );

    nextSection.classList.remove(
        "visible"
    );

    instructionContainer.style.opacity =
        "0";

    roleReveal.classList.remove(
        "visible"
    );


    /*
        Show success screen
    */

    successSection.classList.add(
        "visible"
    );

}


/* ==========================
   IMPOSTER WIN SCREEN
========================== */

function showImposterWinScreen() {

    /*
        Stop timer
    */

    if (timerInterval !== null) {

        clearInterval(timerInterval);

        timerInterval = null;

    }


    /*
        CLEAR PLAYER INFORMATION
    */

    playerNumber.textContent = "";

    playerName.textContent = "";


    /*
        Set screen text
    */

    successTitle.textContent =
        "IMPOSTERS WIN";

    successMessage.textContent =
        "The imposter survived the vote!";


    /*
        Hide everything else
    */

    timerSection.classList.remove(
        "visible"
    );

    votingSection.classList.remove(
        "visible"
    );

    nextSection.classList.remove(
        "visible"
    );

    instructionContainer.style.opacity =
        "0";

    roleReveal.classList.remove(
        "visible"
    );


    /*
        Show success screen
    */

    successSection.classList.add(
        "visible"
    );

}


/* ==========================
   PLAY AGAIN
========================== */

playAgainButton.addEventListener(
    "click",
    function () {

        /*
            Stop any timer
        */

        if (timerInterval !== null) {

            clearInterval(
                timerInterval
            );

            timerInterval = null;

        }


        /*
            RANDOMLY ASSIGN NEW ROLES
        */

        imposterPlayers = createImposterList();

            gameWord = generateGameWord();

        secretWord = gameWord.word;

        generalTheme = gameWord.category;

        console.log(
            "NEW IMPOSTERS:",
            imposterPlayers.map(
                index => players[index]
            )
        );


        /*
            Reset game state
        */

        currentPlayer = 0;

        revealed = false;

        activePlayers =
            [...players];


        /*
            Hide success screen
        */

        successSection.classList.remove(
            "visible"
        );


        /*
            Reset voting/timer
        */

        votingSection.classList.remove(
            "visible"
        );

        timerSection.classList.remove(
            "visible"
        );


        /*
            Return to player 1
        */

        instructionContainer.style.opacity =
            "1";

        instructionContainer.style.transform =
            "translateY(0)";


        loadPlayer();

    }
);


/* ==========================
   RETURN TO SETTINGS
========================== */

settingsButton.addEventListener(
    "click",
    function () {

        /*
            Stop timer
        */

        if (timerInterval !== null) {

            clearInterval(
                timerInterval
            );

            timerInterval = null;

        }


        /*
            Return to settings.
        */

        window.location.href =
            "/HTML/Impostor/Impostor_Game_Settings.html";

    }
);


/* ==========================
   START
========================== */

if (
    !Array.isArray(players) ||
    players.length < 2
) {

    alert(
        "There are not enough players."
    );


    window.location.href =
        "/HTML/Impostor/Impostor_Game_Settings.html";

} else {

    loadPlayer();

}