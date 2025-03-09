// task-1

let jsString = 'js';

jsString = jsString.toUpperCase();

console.log(jsString);

//task-2

function filter(arr, str) {
    const lowerStr = str.toLowerCase();
    return arr.filter(item => item.toLowerCase().startsWith(lowerStr));    
}

console.log(filter(['Копия', 'Краска', 'Красота'], 'Кр'));

//task-3

let digit = 32.58884;

console.log(Math.floor(digit));
console.log(Math.ceil(digit));
console.log(Math.round(digit));



//task-4

console.log(Math.min(52, 53, 49, 77, 21, 32));
console.log(Math.max(52, 53, 49, 77, 21, 32));

//task-5

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;  
}

console.log(getRandomNumber());

//task-6

function getRanNum(num) {
    return Array.from({length: Math.floor(num / 2)}, () => Math.floor(Math.random() * num))
}

console.log(getRanNum(10));

//task-7

function diapazon(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;   
}

console.log(diapazon(1, 10));

//task-8

console.log(new Date());

//task-9

const currentDate = new Date();

currentDate.setDate(currentDate.getDate() + 73);

console.log(currentDate);

//task-10

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