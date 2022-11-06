function createGame(player1, hour, player2) {
    return ` <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
</li>`
}

let delay=0;

function createCard(date, day, games) {
    delay = delay + 0.6;
    return `
    <div class="card"
    style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
    ${games}
    </ul>
</div> `
}

document.querySelector('#cards').innerHTML = ` 
${createCard('24/11', 'quinta', createGame('brasil', '16:00', 'serbia'))}
${createCard('28/11', 'segunda', createGame('brasil', '13:00', 'switzerland') + createGame('portugal', '16:00', 'uruguai'))} 
${createCard('03/12', 'sexta', createGame('brasil', '16:00', 'camaroes'))}
`