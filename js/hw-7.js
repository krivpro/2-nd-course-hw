// task-1

let jsString = 'js';

jsString = jsString.toUpperCase();

console.log(jsString);

//task-2

// Создать функцию, которая принимает массив строк и строку. 
// Функция должна вернуть новый массив, содержащий только те элементы первого массива, которые начинаются со второй строки. 
// Регистр символов не влияет на результат.

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));    
}

console.log(filter(['Копия', 'Краска', 'Красота'], 'Кр'));

//task-3

// Округлить число 32.58884:
// До меньшего целого.
// До большего целого.
// До ближайшего целого.

let digit = 32.58884;

console.log(Math.floor(digit));
console.log(Math.ceil(digit));
console.log(Math.round(digit));



//task-4

// Найти минимальное и максимальное значения из чисел 52, 53, 49, 77, 21, 32 и вывести их в консоль.

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//task-5

//Создать функцию, которая выводит в консоль случайное число от 1 до 10.

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;  
}

console.log(getRandomNumber());

//task-6

//Написать функцию, которая принимает целое число и возвращает массив случайных чисел от 0 до этого числа. 
// Длина массива должна быть в два раза меньше переданного числа.

function getRanNum(num) {
    return Array.from({length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num))
}

console.log(getRanNum(10));

//task-7

//Создать функцию, которая принимает два целых числа и возвращает случайное число в этом диапазоне.

function diapazon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

console.log(diapazon(1, 10));

//task-8

//Вывести в консоль текущую дату.

console.log(new Date());

//task-9

//Создать переменную currentDate, хранящую текущую дату. 
// Вывести дату, которая наступит через 73 дня после текущей.

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//task-10

//Написать функцию, которая принимает дату и возвращает ее в формате:
//Дата: [число] [месяц на русском] [год] — это [день недели на русском].
//Время: [часы]:[минуты]:[секунды]

function formatDate(date) {
    const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",];
    const year = date.getFullYear();
    const day = date.getDate();
    const month = date.getMonth();
    const dayOfWeek = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `
    Дата : ${day} ${months[month]} ${year} - это ${dayOfWeek}.
    Время : ${hours}:${minutes}:${seconds}`;
}

console.log(formatDate(new Date()));