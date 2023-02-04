function createGame(player1, score, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${score}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
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
  createCard("20/11", "dominngo", createGame("Catar", "11:00", "Equador")) +
  createCard(
    "21/11",
    "segunda",
    createGame("Inglaterra", "10:00", "Ira") +
      createGame("Senegal", "13:00", "Holanda") +
      createGame("Eua", "16:00", "Gales")
  ) +
  createCard(
    "25/11",
    "sexta",
    createGame("Gales", "07:00", "Ira") +
      createGame("Catar", "10:00", "Senegal") +
      createGame("Holanda", "13:00", "Equador") +
      createGame("Inglaterra", "16:00", "Eua")
  ) +
  createCard(
    "29/11",
    "terça",
    createGame("Equador", "12:00", "Senegal") +
      createGame("Holanda", "12:00", "Catar") +
      createGame("Ira", "16:00", "Eua") +
      createGame("Inglaterra", "16:00", "Gales")
  )
