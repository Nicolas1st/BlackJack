let hitButton = document.querySelector('.hit-button');

let distributedCards = [];
let cardImgs = ['0_10.jpg', '10_3.jpg', '11_3.jpg', '12_4.jpg', '13_4.jpg', '14_4.jpg', '15_4.jpg', '16_5.jpg', '17_5.jpg', '18_5.jpg', '19_5.jpg', '1_10.jpg', '20_6.jpg', '21_6.jpg', '22_6.jpg', '23_6.jpg', '24_7.jpg', '25_7.jpg', '26_7.jpg', '27_7.jpg', '28_8.jpg', '29_8.jpg', '2_10.jpg', '30_8.jpg', '31_8.jpg', '32_9.jpg', '33_9.jpg', '34_9.jpg', '35_9.jpg', '36_11.jpg', '37_11.jpg', '38_11.jpg', '39_11.jpg', '3_10.jpg', '40_10.jpg', '41_10.jpg', '42_10.jpg', '43_10.jpg', '44_10.jpg', '45_10.jpg', '46_10.jpg', '47_10.jpg', '48_10.jpg', '49_10.jpg', '4_2.jpg', '50_10.jpg', '51_10.jpg', '5_2.jpg', '6_2.jpg', '7_2.jpg', '8_3.jpg', '9_3.jpg'];

function hit() {
  let newCardNum;
  while (1) {
    // it's a 52 card deck
    newCardNum = Math.floor(Math.random() * 52);
    if (!distributedCards.includes(newCardNum)) {
      break;
    }
  }

  distributedCards.push(newCardNum);

  let cardName = cardImgs[newCardNum];
  let card = document.createElement('img');
  card.src = `/static/images/${cardName}`

  let value = parseInt(cardName.split('.')[0].split('_')[1], 10);
  let playerScore = document.querySelector('.player-points');
  value += parseInt(playerScore.innerHTML, 10);
  playerScore.innerHTML = value;

  let allPlayerCards = document.querySelector('.player-cards');
  allPlayerCards.appendChild(card);
}

hitButton.addEventListener('click', hit);
