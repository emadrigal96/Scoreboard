let homeCountEl = document.getElementById("homeCount-el")
let guestCountEl = document.getElementById("guestCount-el")
let historyEl = document.getElementById("history-el")

let homeCount = 0

let guestCount = 0

let gameCount = 0

function winnerHighlight(){
    if (homeCount>guestCount){
        document.getElementById("homeText").style.color = "green";
        document.getElementById("guestText").style.color = "red";
    }else if(homeCount<guestCount){
            document.getElementById("homeText").style.color = "red";
            document.getElementById("guestText").style.color = "green";
        } else if (homecount=guestCount){
            document.getElementById("homeText").style.color = "yellow";
            document.getElementById("guestText").style.color = "yellow";
        }
}

function homeIncrement1(){
    homeCount += 1
    homeCountEl.innerText = homeCount
    winnerHighlight()
}

function homeIncrement2(){
    homeCount += 2
    homeCountEl.innerText = homeCount
    winnerHighlight()
}

function homeIncrement3(){
    homeCount += 3
    homeCountEl.innerText = homeCount
    winnerHighlight()
}

function guestIncrement1(){
    guestCount += 1
    guestCountEl.innerText = guestCount
    winnerHighlight()
}

function guestIncrement2(){
    guestCount += 2
    guestCountEl.innerText = guestCount
    winnerHighlight()
}

function guestIncrement3(){
    guestCount += 3
    guestCountEl.innerText = guestCount
    winnerHighlight()
}

function newGame() {
    // Aumenta el contador de juegos en 1
    gameCount++;

    // Crea un nuevo elemento <li> para agregar un ítem a la lista del historial
    const li = document.createElement("li");

    // Define el texto que aparecerá dentro del <li> con el resultado del juego actual
    li.textContent = `Game ${gameCount}: (H: ${homeCount} - G: ${guestCount})`;

    // Agrega el <li> recién creado dentro del elemento historial (historyEl)
    historyEl.appendChild(li);

    // Reinicia el puntaje del equipo de casa
    homeCount = 0;

    // Reinicia el puntaje del equipo visitante
    guestCount = 0;

    // Actualiza en pantalla el marcador del equipo de casa
    homeCountEl.innerText = homeCount;

    // Actualiza en pantalla el marcador del equipo visitante
    guestCountEl.innerText = guestCount;

    //Renicia el formato del texto del liderato
    document.getElementById("homeText").style.color = "white";
    document.getElementById("guestText").style.color = "white";
}
