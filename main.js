function createGame(player1, hour, player2) {
    return `
    <li>
        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}"/>
    </li>
    `
}
let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
            ${games}
        </ul>
    </div>
    `
}

document.querySelector("#cards").innerHTML =
        createCard("20/11", "domingo",createGame("qatar", "13:00", "ecuador"))
        +
        createCard("21/11", "segunda",createGame("senegal", "13:00", "netherlands"))  
        +
        createCard("22/11", "terça",createGame("argentina", "07:00", "arabia") + 
        createGame("france", "16:00", "australia")) 
        +
        createCard("23/11", "quarta",createGame("germany", "10:00", "japan") +
        createGame("spain", "13:00", "costarica") + createGame("belgium", "16:00", "canada"))  
        +       
        createCard("24/11", "quinta",createGame("portugal", "13:00", "ghana") + createGame("brazil", "16:00", "serbia"))        
        +
        createCard("25/11", "sexta",createGame("netherlands", "13:00", "ecuador"))
        +
        createCard("26/11", "sabado",createGame("france", "13:00", "denmark") + 
        createGame("argentina", "16:00", "mexico"))
        +
        createCard("27/11", "domingo",createGame("spain", "16:00", "germany"))
        +
        createCard("28/11", "segunda",createGame("switzerland", "13:00", "brazil") + 
        createGame("portugal", "16:00", "uruguay"))
        +
        createCard("30/11", "quarta",createGame("poland", "16:00", "argentina"))
        +
        createCard("01/12","quinta",createGame("croatia", "12:00", "belgium"))
        +
        createCard("02/12","sexta",createGame("korea", "12:00", "portugal") +
        createGame("brazil", "16:00", "cameroon"))
