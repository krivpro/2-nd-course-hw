// hw-2
// task-1

let a = 10;
alert(a);
a = 20;
alert(a);

// task-2

const year = 2007;
alert(`Год выпуска первого iPhone - ${year}`);

// task-3

const name = 'Brendon Eich';
alert(`${name} - создатель языка JavaScript`);

// task-4

let b = 10;
let c = 2;
alert(b + c);
alert(b - c);
alert(b * c);
alert(b / c);

// task-5

let result = 2 ** 5;
alert(result);

// task-6

let d = 9;
let e = 2;
alert(d % e);

// task-7

let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// task-8

let age = prompt("Сколько вам лет?");
alert(age);

// task-9

const user = {
    name: 'Иван',
    age: 23,
    isAdmin: true
}

// task-10

let userName = prompt("Как вас зовут?");
alert(`Привет, ${userName}!`);

// hw-3
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