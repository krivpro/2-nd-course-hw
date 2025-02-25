function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

let randomNum = getRandomInt(1, 100);
console.log(randomNum);

// function guessNumber() {

//     let whatNum = prompt('Введите число от 1 до 100');

//     while (whatNum !== randomNum) {
//         if (whatNum > randomNum) {
//             alert('Заданное число меньше');
//         } else if (whatNum < randomNum) {
//             alert('Заданное число больше');
//         } else if (whatNum !== randomNum) {
//             alert('Угадал');
//         } else {
//             alert('Попробуй снова');
//         }
//     }
// }