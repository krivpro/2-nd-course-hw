//task-1

const headerEl = document.querySelector('.header');
const hideBtnEl = document.querySelector('.hide-btn');


hideBtnEl.addEventListener('click', () => {
    headerEl.classList.toggle('header_none');
});

//task-2

const textEl = document.querySelector('.text');
const colorBtnEl = document.querySelector('.color-btn');

colorBtnEl.addEventListener('click', () => {
    textEl.style.color = 'blue';
});

//task-3

const titleEl = document.querySelector('.title');
const alterBtnEl = document.querySelector('.alter-btn');

alterBtnEl.addEventListener('click', () => {
    headerEl.textContent = ('Привет, мир!');
});

//task-4

 const descriptionEl = document.querySelectorAll('.description');

 descriptionEl.forEach(element => {
     element.textContent = 'Измененный текст';
 });

//task-5

//Если это не ошибка в задаче, то я конечно сделаю, но по сути пятое повторяет четвертое

//task-6

const addBtnEl = document.querySelector('.add-btn');
const newText = document.createElement('p');
newText.textContent = 'Новый абзац';

addBtnEl.addEventListener('click', () => {
    document.body.appendChild(newText);
});

//task-7

const newDescriptionEl = document.querySelector('.description');
const removeBtnEl = document.querySelector('.remove-btn');

removeBtnEl.addEventListener('click', () => {
    newDescriptionEl.remove();
});