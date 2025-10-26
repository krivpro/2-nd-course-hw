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

//game-5

function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function rockPaperScissors() {

    const userChoice = prompt("Выберите: камень, ножницы или бумага").toLowerCase();

    const computerChoice = getComputerChoice();

    let result;

    if (userChoice === computerChoice) {
        result = "Ничья!";
    } else if (
        (userChoice === "камень" && computerChoice === "ножницы") ||
        (userChoice === "ножницы" && computerChoice === "бумага") ||
        (userChoice === "бумага" && computerChoice === "камень")
    ) {
        result = "Вы победили!";
    } else {
        result = "Компьютер победил!";
    }

    alert(`Ваш выбор: ${userChoice} Выбор компьютера: ${computerChoice} ${result}`);   
}

//game-6

const colorBlock = document.querySelectorAll('#game-6');
const colorBtn = document.querySelectorAll('.color-btn');

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

if (colorBtn.length > 0) {
    colorBtn[0].addEventListener('click', () => {
        colorBlock.forEach(box => {
            box.style.backgroundColor = getRandomColor();
        });
    });
}

//scroll-btn

 const scrollBtn = document.querySelector('.scroll-btn');

 function smoothScroll(target) {
     const targetElement = document.querySelector(target);
     targetElement.scrollIntoView({
         behavior: 'smooth',
         block: 'start'
     });
 }

 scrollBtn.addEventListener('click', (event) => {
    event.preventDefault();

     if (window.innerWidth > 768) {
         smoothScroll('.about');
     } else {
         smoothScroll('.game-box');
     }
 });