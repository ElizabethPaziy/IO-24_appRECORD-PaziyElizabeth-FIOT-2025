// Завдання 2
function swapInputs() {
    const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}
// Завдання 4
function resizeSquare(change) {
    const square = document.getElementById("square");
    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;
    const newSize = Math.max(15, currentWidth + change); // мінімум 15px

    square.style.width = newSize + "px";
    square.style.height = newSize + "px";
}
// Завдання 6
function doubleValues() {
    const items = document.querySelectorAll('#numberList li');
    items.forEach(item => {
        const currentValue = parseInt(item.textContent);
        item.textContent = currentValue * 2;
    });
}

// Завдання 7
const categoriesList = document.querySelectorAll('#categories .item');

console.log(`Кількість категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
    const title = category.querySelector('h2').textContent;
    const itemsCount = category.querySelectorAll('ul li').length;

    console.log(`Категорія: ${title}`);
    console.log(`Кількість елементів: ${itemsCount}`);
});


// Завдання 8
const form = document.querySelector('.login-form');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // 2. Не перезавантажуємо сторінку

    const {
        email,
        password
    } = form.elements;

    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    // 3. Перевірка заповнення полів
    if (emailValue === '' || passwordValue === '') {
        alert('All form fields must be filled in');
        return;
    }

    // 4. Збирання даних у об'єкт
    const formData = {
        email: emailValue,
        password: passwordValue
    };

    // 5. Виведення в консоль і очищення форми
    console.log(formData);
    form.reset();
});
// Завдання 9
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const colorSpan = document.querySelector('.color');

button.addEventListener('click', () => {
    const newColor = getRandomHexColor();
    document.body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor;
});
// Завдання 10
const input = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount >= 1 && amount <= 100) {
        destroyBoxes(); // очищає попередні перед новими
        createBoxes(amount);
        input.value = ''; // очищає інпут
    } else {
        alert('Please enter a number from 1 to 100');
    }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const fragment = document.createDocumentFragment();
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        box.style.margin = '5px';
        fragment.appendChild(box);
        size += 10;
    }

    boxesContainer.appendChild(fragment);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}