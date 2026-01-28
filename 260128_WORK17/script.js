let scoreA = 0;
let scoreB = 0;

const scoreAText = document.getElementById("scoreA");
const scoreBText = document.getElementById("scoreB");
const statusText = document.getElementById("status");

document.getElementById("addA").addEventListener("click", () => {
    scoreA++;
    updateScore();
});

document.getElementById("addB").addEventListener("click", () => {
    scoreB++;
    updateScore();
});

document.getElementById("reset").addEventListener("click", () => {
    scoreA = 0;
    scoreB = 0;
    updateScore();
});

function updateScore() {
    scoreAText.textContent = scoreA;
    scoreBText.textContent = scoreB;

    if (scoreA > scoreB) {
        statusText.textContent = "Va ganando el Equipo A";
    } else if (scoreB > scoreA) {
        statusText.textContent = "Va ganando el Equipo B";
    } else {
        statusText.textContent = "Empate";
    }
}

const form = document.getElementById("playerForm");
const input = document.getElementById("playerName");
const list = document.getElementById("playerList");
const message = document.getElementById("playerMessage");

let players = [];

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = input.value.trim();

    if (name === "") {
        message.textContent = "El nombre no puede estar vacío";
        return;
    }

    if (players.includes(name)) {
        message.textContent = "Ese jugador ya existe";
        return;
    }

    players.push(name);
    addPlayerToList(name);
    input.value = "";
    message.textContent = "";
});

function addPlayerToList(name) {
    const li = document.createElement("li");
    li.textContent = name;

    const btn = document.createElement("button");
    btn.textContent = "Eliminar";
    btn.addEventListener("click", () => {
        players = players.filter(p => p !== name);
        li.remove();
    });

    li.appendChild(btn);
    list.appendChild(li);
}
