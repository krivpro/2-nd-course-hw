// task-1

let password = '0000';
let ask = prompt('Введите пароль');

if (ask === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// task-2

let f = 5;
f = 0
f = 10
f = -3
f = 2

if (f > 0 && f < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}

// task-3

let g = 3;
let h = 56;

if (g > 100 || h > 100) {
        console.log('Верно');
    } else {
        console.log('Неверно');
    }

// task-4

let i = '2';
let j = '3';

let k = Number(i);
let l = Number(j);
alert(k + l);

// task-5

var monthNumber = prompt("Введите номер месяца");

switch (monthNumber) {
    case '1':
      console.log('январь - это зима');
      break;
    case '2':
      console.log('февраль - это зима');
      break;
    case '3':
      console.log('март - это весна');
      break;
    case '4':
      console.log('апрель - это весна');
      break;
    case '5':
      console.log('май - это весна');
      break;
    case '6':
      console.log('июнь - это лето');
      break;
    case '7':
      console.log('июль - это лето');
      break;
    case '8':
      console.log('август - это лето');
      break;
    case '9':
      console.log('сентябрь - это осень');
      break;
    case '10':
      console.log('октябрь - это осень');
      break;
    case '11':
      console.log('ноябрь - это осень');
      break;
    case '12':
      console.log('декабрь - это зима');
      break;
   default:
      console.log('недецимбер - это выдумка');
}