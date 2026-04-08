let level = 0;
let score = 0;
let timeLeft = 60;

const levels = [
    {
        title: "Level 1: Caesar Cipher",
        question: 'Decrypt: "Uiifs jt b tfdsfu dpef" (shift -1)',
        answer: "there is a secret code"
    },
    {
        title: "Level 2: Reverse Code",
        question: 'Decode: "edoc terces a si ereht"',
        answer: "there is a secret code"
    },
    {
        title: "Level 3: Math Hack",
        question: "Solve: 12 × 5 + 10",
        answer: "70"
    },
    {
        title: "Level 4: Binary Decode",
        question: 'Convert binary to text: "01001000 01001001"',
        answer: "hi"
    },
    {
        title: "Level 5: Logic Puzzle",
        question: "I speak without a mouth and hear without ears. What am I?",
        answer: "echo"
    }
];

function loadLevel() {
    document.getElementById("levelTitle").innerText = levels[level].title;
    document.getElementById("question").innerText = levels[level].question;
    document.getElementById("answer").value = "";
    document.getElementById("result").innerText = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("answer").value.toLowerCase();

    if (userAnswer === levels[level].answer) {
        score += 10;
        document.getElementById("score").innerText = "Score: " + score;
        document.getElementById("result").innerText = "✅ Correct!";

        level++;

        if (level < levels.length) {
            setTimeout(loadLevel, 1000);
        } else {
            document.getElementById("result").innerText = "🎉 Heist Completed!";
        }
    } else {
        document.getElementById("result").innerText = "❌ Wrong! Try again.";
    }
}

// Timer
let timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = "Time Left: " + timeLeft + "s";

    if (timeLeft <= 0) {
        clearInterval(timer);
        document.getElementById("result").innerText = "⏰ Game Over!";
    }
}, 1000);

// Start game
loadLevel();
