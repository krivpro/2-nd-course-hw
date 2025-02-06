// task-1

let a = 0;

while (a < 2) {
  console.log('Привет');
  a++;
}

// task-2

let b = 1;

while (b < 6) {
   console.log(b);
   b++;
}

// task-3

for (let i = 7; i <= 22; i++) {
  console.log(i);
}

// task-4

const obj = {
  "Коля" : '200',
  "Вася" : '300',
  "Петя" : '400'
}

for (let key in obj) {
   console.log(`${key} — зарплата ${obj[key]} долларов`);
}

// task-5

let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  console.log(n);
  num++;
}

console.log(`Циклов ${num}`);

// task-6

let friday = 5;
let month = 31;

for (let i = friday; i <= month; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}