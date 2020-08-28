let dealButton = document.querySelector('.deal-button');

function deal() {
  let playerCards = document.querySelector('.player-cards');
  let playerPoints = document.querySelector('.player-points');
  playerCards.innerHTML = '';
  playerPoints.innerHTML = 0;

  let computerCards = document.querySelector('.computer-cards');
  let computerPoints = document.querySelector('.computer-points');
  computerCards.innerHTML = '';
  computerPoints.innerHTML = 0;
}

dealButton.addEventListener('click', deal);
