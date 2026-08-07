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
    "The game ends when all impostors are found!"];

let Description = document.getElementById("Impostor-Description");
Description.textContent = paragraphs[currentParagraph];

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

updateProgress();

ContinueBt.addEventListener("click", function () {
    currentParagraph++;

    if (currentParagraph < paragraphs.length) {
        Description.textContent = paragraphs[currentParagraph];
        updateProgress();
    } else {
        window.location.href = "Impostor_Gameplay.html";
    }
});