'use strict';

let secret_number = Math.trunc(Math.random()*20);
let highscore = 0
let score = 20;

const display_message = function(local, message) {
    document.querySelector(local).textContent = message;
}

// Action button check
document.querySelector('.check').addEventListener('click', function() {
    console.log('works')
    const guess = Number(document.querySelector('.guess').value);

    // if input is empty
    if (!guess) {
        display_message('.message', 'No number!');

    // if input equals to secret number
    } else if (guess === secret_number) {
        display_message('.message', 'Correct Number!');
        display_message('.number', secret_number);
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) { 
            highscore = score;
            display_message('.highscore', highscore);
        }

    // if input bigger than secret number
    } else if (guess !== secret_number) {
        if (score > 1) {
            display_message('.message', guess > secret_number ? 'Too high!' : 'Too low!');
            score--;
            display_message('.score', score);
        } else {
            display_message('.score', 0);
            display_message('.message', 'You lose');
            display_message('.number', secret_number);
        }
    }
})

document.querySelector('.again').addEventListener('click', function() {
    secret_number = Math.trunc(Math.random()*20);
    display_message('.message', 'Start guessing...');;
    display_message('.number', '?');
    document.querySelector('body').style.backgroundColor = '#222';
    display_message('.score', 20);
})
