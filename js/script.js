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

// game-3

function flipGame() {

    const userText = prompt('Введите текст');

    let flipText = userText.split('').reverse().join('');
    alert(flipText);
}

// game-4

const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    }
];

function displayQuestion(question) {
    let output = `${question.question}\n\n`;
    question.options.forEach(option => {
        output += option + "\n";
    });
    return output;
}

let score = 0;

function questionGame() {

    for (let i = 0; i < quiz.length; i++) {

        const questionText = displayQuestion(quiz[i]);
        
        const userAnswer = parseInt(prompt(questionText + "\n\nВведите номер ответа (1, 2 или 3)"));
        
        if (!isNaN(userAnswer) && userAnswer >= 1 && userAnswer <= 3) {
            if (userAnswer === quiz[i].correctAnswer) {
                score++;
                alert("Правильно!");
            } else {
                alert("Неверно. Правильный ответ: " + quiz[i].correctAnswer);
            }
        } else {
            alert("Неверный формат ответа. Введите число 1, 2 или 3.");
            i--; 
        }
    }

alert(`Викторина завершена!\nВы набрали ${score} из ${quiz.length} баллов.`);

score = 0;
};
