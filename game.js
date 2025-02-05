let selectedColor;
let result = '';
let score = 0;


function pickRandomColor() {
    const randomColor = Math.random();

    if (randomColor >= 0 && randomColor <= 1 / 6) {
        selectedColor = "blue";
        document.querySelector(".random-colour").style.backgroundColor = "blue";
    } else if (randomColor >= 1 / 6 && randomColor < 1 / 3) {
        selectedColor = "red";
        document.querySelector(".random-colour").style.backgroundColor = "red";
    } else if (randomColor >= 1 / 3 && randomColor < 1 / 2) {
        selectedColor = "yellow";
        document.querySelector(".random-colour").style.backgroundColor = "yellow";
    } else if (randomColor >= 1 / 2 && randomColor < 2 / 3) {
        selectedColor = "green";
        document.querySelector(".random-colour").style.backgroundColor = "green";
    } else if (randomColor >= 2 / 3 && randomColor < 5 / 6) {
        selectedColor = "purple";
        document.querySelector(".random-colour").style.backgroundColor = "purple";
    } else if (randomColor >= 5 / 6 && randomColor < 1) {
        selectedColor = "black";
        document.querySelector(".random-colour").style.backgroundColor = "black";
    }
}


function displayColor(playerChoice) {
    pickRandomColor();

    const resultElement = document.querySelector(".result");
    const scoreElement = document.querySelector(".score");

    if (playerChoice === selectedColor) {
        result = "You win!";
        score++;
        resultElement.classList.remove('fade-out');
        resultElement.classList.add('fade-in', 'celebrate');
    } else {
        result = "You lose!";
        resultElement.classList.remove('celebrate');
        resultElement.classList.add('fade-out');
    }

    
    resultElement.textContent = result;
    scoreElement.textContent = `Score: ${score}`;

    
    setTimeout(() => {
        resultElement.classList.remove('fade-in', 'celebrate', 'fade-out');
    }, 1000); 
}


document.querySelector(".color-mixed1").addEventListener("click", () => displayColor("blue"));
document.querySelector(".color-mixed2").addEventListener("click", () => displayColor("red"));
document.querySelector(".color-mixed3").addEventListener("click", () => displayColor("yellow"));
document.querySelector(".color-mixed4").addEventListener("click", () => displayColor("green"));
document.querySelector(".color-mixed5").addEventListener("click", () => displayColor("purple"));
document.querySelector(".color-mixed6").addEventListener("click", () => displayColor("black"));

document.querySelector("button").addEventListener("click", () => {
    score = 0;
    document.querySelector(".score").textContent = `Score: ${score}`;
    document.querySelector(".result").textContent = "";
    pickRandomColor();
});

pickRandomColor();
