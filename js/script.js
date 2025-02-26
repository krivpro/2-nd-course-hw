function guessNumber() {

    const secretNumber = Math.floor(Math.random() * 100) + 1;

    let attempts = 0;

    alert('Добро пожаловать в игру "Угадай число"!');
    alert('Попробуй угадать число от 1 до 100.');

    while (true) {
        const guess = prompt('Введите ваше предположение:');

        if (guess === null) {
            alert('Вы отменили игру. До свидания!');
            break;
        }

        if (isNaN(guess)) {
            alert('Пожалуйста, введите целое число.');
            continue;
        }

        if (guess > 100) {
            alert('Ваше число больше 100');
            continue;
        }

        attempts++;

        const userGuess = parseInt(guess);

        if (userGuess < secretNumber) {
            alert('Загаданное число больше.');
        } else if (userGuess > secretNumber) {
            alert('Загаданное число меньше.');
        } else {
            alert(`Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток.`);
            break;
        }
    }
}