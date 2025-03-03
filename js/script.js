// game-1

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

// game-2

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
   
function getRandomOperator() {
    const operators = ['+', '-', '*', '/'];
    return operators[Math.floor(Math.random() * operators.length)];
}
   
function solveExpression(num1, operator, num2) {
    switch(operator) {
    case '+':
    return num1 + num2;
    case '-':
    return num1 - num2;
    case '*':
    return num1 * num2;
    case '/':
    return num1 / num2;
    default:
    return null;
    }
}
   
function mathGame() {
   
    const num1 = getRandomNumber(1, 10);
    const num2 = getRandomNumber(1, 10);
    const operator = getRandomOperator();
    
    const expression = `${num1} ${operator} ${num2}`;
    
    const userAnswer = prompt(`Решите задачу: ${expression}`);
    
    if (isNaN(userAnswer)) {
        alert('Пожалуйста, введите число!');
        return;
    }
    
    const correctAnswer = solveExpression(num1, operator, num2);
    
    if (parseFloat(userAnswer) === correctAnswer) {
    alert('Правильно!');
    } else {
    alert(`Неверно! Правильный ответ: ${correctAnswer}`);
    }
}