const min_Pocket = 0;
let max_Pocket = 8;
const two = 2;
const range_increase_step = 4;
let total_prize = 0;
let max_level_prize = 100;
let current_level_prize;
let attempt_number = 3;
let user_number;
let continue_game_confirmation;
let new_game_confirmation;
let i = attempt_number;
let start_Game = confirm('Do you want to play a game?');
if (start_Game === true) {
  do {
    do {
      current_level_prize = max_level_prize;
      let bingo_pocket = Math.floor(
        Math.random() * (max_Pocket - min_Pocket + 1)
      );
      user_number = parseInt(
        prompt(
          'Choose a roulette pocket number from ' +
            min_Pocket +
            ' to ' +
            max_Pocket +
            '\n' +
            'Attempts left: ' +
            i +
            '\n' +
            'Total prize: ' +
            total_prize +
            '\n' +
            'Possible price on current attempt:' +
            current_level_prize
        )
      );
      i--;
      if (bingo_pocket === user_number) {
        continue_game_confirmation = confirm(
          'Congratulation, you won!   Your prize is:' +
            current_level_prize +
            '$. Do you want to continue?'
        );
        total_prize += current_level_prize;
        break;
      } else if (bingo_pocket !== user_number) {
        current_level_prize = current_level_prize / two;
        bingo_pocket = Math.floor(
          Math.random() * (max_Pocket - min_Pocket + 1)
        );
        user_number = parseInt(
          prompt(
            'Choose a roulette pocket number from ' +
              min_Pocket +
              ' to ' +
              max_Pocket +
              '\n' +
              'Attempts left: ' +
              i +
              '\n' +
              'Total prize: ' +
              total_prize +
              '\n' +
              'Possible price on current attempt:' +
              current_level_prize
          )
        );
        i--;
        if (bingo_pocket === user_number) {
          continue_game_confirmation = confirm(
            'Congratulation, you won!   Your prize is:' +
              current_level_prize +
              '$. Do you want to continue?'
          );
          total_prize += current_level_prize;
          break;
        } else if (bingo_pocket !== user_number) {
          current_level_prize = current_level_prize / two;
          bingo_pocket = Math.floor(
            Math.random() * (max_Pocket - min_Pocket + 1)
          );
          user_number = parseInt(
            prompt(
              'Choose a roulette pocket number from ' +
                min_Pocket +
                ' to ' +
                max_Pocket +
                '\n' +
                'Attempts left: ' +
                i +
                '\n' +
                'Total prize: ' +
                total_prize +
                '\n' +
                'Possible price on current attempt:' +
                current_level_prize
            )
          );
          i--;
          if (bingo_pocket === user_number) {
            continue_game_confirmation = confirm(
              'Congratulation, you won!   Your prize is:' +
                current_level_prize +
                '$. Do you want to continue?'
            );
            total_prize += current_level_prize;
          } else {
            alert(
              'Thank you for your participation. Your prize is: ' +
                total_prize +
                '$'
            );
            new_game_confirmation = confirm('Do you want to play again?');
            if (new_game_confirmation) {
              i = attempt_number;
            } else {
              break;
            }
          }
        }
      }
    } while (attempt_number > 0);
    i = attempt_number;
    max_level_prize *= two;
    max_Pocket += range_increase_step;
  } while (continue_game_confirmation);
} else {
  alert('You did not become a billionaire, but can.');
}

