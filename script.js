'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 12;

document.querySelector('.guess').value = 244
console.log(document.querySelector('.guess').value)
*/

const secret_number = Math.trunc(Math.random()*20);
let highscore = 0
let score = 20;

// Action button check

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);

    // if input is empty
    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';

    // if input equals to secret number
    } else if (guess === secret_number) {
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent = secret_number;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highscore) { 
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        

    // if input bigger than secret number
    } else if (guess > secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.score').textContent = 0;
            document.querySelector('.message').textContent = 'You lose';
            document.querySelector('.number').textContent = secret_number;
        }

    // if input smaller than secret number
    } else if (guess < secret_number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You lose!';
            document.querySelector('.score').textContent = 0;
            document.querySelector('.number').textContent = secret_number;
        }
    }
})


document.querySelector('.again').addEventListener('click', function() {
    console.log('working')
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.score').textContent = 20;
})
