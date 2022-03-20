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
let score = 20;
document.querySelector('.number').textContent = secret_number

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);
    console.log(secret_number)

    if (!guess) {
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess === secret_number) {
        document.querySelector('.message').textContent = 'Correct Number!';
    } else if (guess > secret_number) {
        document.querySelector('.message').textContent = 'Too high!';
        score--;
        document.querySelector('.score').textContent = score;
    } else if (guess < secret_number) {
        document.querySelector('.message').textContent = 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }
})