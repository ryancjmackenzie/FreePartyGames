console.log("Script loaded");

let Progress1 = document.getElementById("Progress-1");
let Progress2 = document.getElementById("Progress-2");
let Progress3 = document.getElementById("Progress-3");
let Progress4 = document.getElementById("Progress-4");

const progressElements = [Progress1, Progress2, Progress3, Progress4];

let currentParagraph = 0;

const paragraphs = [
    "Everyone gets the same secret word... except the impostor!",
    "Everyone says one clue about the word!",
    "Everyone discusses who they think the impostor is!",
    "The game ends when all impostors are found!"
];

const images = [
    "/Images/QuestionMark.png",
    "/Images/Chatbox.png",
    "/Images/FingerPoint.png",
    "/Images/FingerPoint.png"
];

const instructionImage = document.getElementById("Instruction-Image");
const Description = document.getElementById("Impostor-Description");
const ContinueBt = document.getElementById("Continue");

function updateProgress() {
    progressElements.forEach((dot, index) => {
        if (index === currentParagraph) {
            dot.classList.remove("Unselected-Paragraph");
            dot.classList.add("Current-Paragraph");
        } else {
            dot.classList.remove("Current-Paragraph");
            dot.classList.add("Unselected-Paragraph");
        }
    });
}

function updatePage() {
    Description.textContent = paragraphs[currentParagraph];
    instructionImage.src = images[currentParagraph];

    if (currentParagraph === 0) {
        instructionImage.style.width = "180px";
    } else if (currentParagraph === 1) {
        instructionImage.style.width = "200px";   // Chatbox
    } else {
        instructionImage.style.width = "250px";  // FingerPoint
    }

    updateProgress();
}

// Set the initial page
updatePage();

ContinueBt.addEventListener("click", function () {
    currentParagraph++;

    if (currentParagraph < paragraphs.length) {
        updatePage();
    } else {
        window.location.href = "Impostor_Game_Settings.html";
    }
});