let min_Pocket = 0;
let max_Pocket = 8;
const two = 2;
let total_price = 0;
let level_price = 100;
let attempt_number = 3;
let user_number;
let start_Game = confirm('Do you want to play a game?');
if (start_Game) {
  let bingo_pocket = Math.floor(Math.random() * (max_Pocket - min_Pocket + 1));

  while (attempt_number > 0) {
      //обєднати наступні 5 рядків
    user_number = parseInt(prompt(
      'Enter a number of pocket on which the ball could land'
    ));
    
  }
  if (bingo_pocket === user_number) {
    prompt(
      'Congratulation, you won!   Your prize is:' + level_price + '$. Do you want to continue?'
    );
  }
} else if (!start_Game) {
  alert('You did not become a billionaire, but can.');
}
