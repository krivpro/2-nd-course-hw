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

let c = 1;

while (c < 23) {
  if (c < 7){
    c++;
  continue;
  }
  console.log(c);
  c++;
}

// task-4

const obj = {
  "Коля" : '200',
  "Вася" : '300',
  "Петя" : '400'
}

for (let key in obj) {
   console.log(`${key}: ${obj[key]}`);
}

// task-5

let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  console.log(n);
  num++;
}

console.log(num);

// task-6

let friday = 5;
let month = 31;

for (let i = friday; i <= month; i += 7) {
  console.log(`Сегодня пятница, ${i}-е число. Необходимо подготовить отчет.`);
}