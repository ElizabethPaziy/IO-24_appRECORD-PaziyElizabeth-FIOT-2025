// Таблиця 1

// Завдання 2
function getProductDetails(productId, successCallback, errorCallback) {
    const products = [
        { id: 1, name: 'Мотоциклетний шолом', price: 1200 },
        { id: 2, name: 'Мотоциклетна куртка', price: 2500 },
        { id: 3, name: 'Рукавиці для їзди', price: 600 },
    ];

    const product = products.find(p => p.id === productId);

    if (product) {
        successCallback(product);
    } else {
        errorCallback(`Товар з ID ${productId} не знайдено.`);
    }
}
getProductDetails(
    2,
    (product) => {
        console.log('Знайдено товар:', product);
    },
    (errorMessage) => {
        console.error('Помилка:', errorMessage);
    }
);

// Завдання 4
const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};

const result = Object.entries(concerts)
    .filter(([city, date]) => date > new Date())
    .sort((a, b) => a[1] - b[1])
    .map(([city]) => city);

console.log(result); // ["Одеса", "Умань", "Харків"]

// Завдання 6

const applyDiscount = (medicines) => {
    return medicines.map((med, index) => {
        const discountedPrice = med.price > 300 ? med.price * 0.7 : med.price;
        return {
            id: index + 1,
            name: med.name,
            price: Math.round(discountedPrice)
        };
    });
};

const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

const discountedMedicines = applyDiscount(medicines);
console.log(discountedMedicines);

// Завдання 8

function Storage(initialItems) {
    this.items = initialItems;

    this.getItems = () => this.items;

    this.addItem = (item) => {
        this.items.push(item);
    };

    this.removeItem = (item) => {
        this.items = this.items.filter(i => i !== item);
    };
}

// Приклад використання
const arr = ["apple", "banana", "mango"];
const store = new Storage(arr);

console.log(store.getItems()); // ["apple", "banana", "mango"]

store.addItem("orange");
console.log(store.getItems()); // ["apple", "banana", "mango", "orange"]

store.removeItem("banana");
console.log(store.getItems()); // ["apple", "mango", "orange"]

// Завдання 9
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];

const countTags = (tweets) => {
    return tweets
        .flatMap(tweet => tweet.tags)
        .reduce((acc, tag) => {
            acc[tag] = (acc[tag] || 0) + 1;
            return acc;
        }, {});
};

const result2 = countTags(tweets);
console.log(result2);

// Завдання 10
function checkBrackets(str) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of str) {
        if (brackets[char]) {
            // Відкриваюча дужка
            stack.push(char);
        } else if (Object.values(brackets).includes(char)) {
            // Закриваюча дужка
            const last = stack.pop();
            if (brackets[last] !== char) {
                return false;
            }
        }
    }

    return stack.length === 0;
}
console.log(checkBrackets("function someFn() { return [1, 2, 3]; }")); // true
console.log(checkBrackets("function someFn() { return [1, 2, 3; }"));   // false

// Таблиця 2

// Завдання 2

const people = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const hasUnder20 = people.some(person => person.age < 20);

console.log(hasUnder20); // true

// Завдання 4
const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map(num => num * num);

console.log(squares); // [1, 4, 9, 16, 25]

// Завдання 6

const users = [
    { name: 'John', age: 27 },
    { name: 'Jane', age: 31 },
    { name: 'Bob', age: 19 },
];

const sortedUsers = users.sort((a, b) => a.age - b.age);

console.log(sortedUsers);
// [
//   { name: "Bob", age: 19 },
//   { name: "John", age: 27 },
//   { name: "Jane", age: 31 }
// ]

// Завдання 7
class Calculator {
    constructor() {
        this.value = 0;
    }

    number(value) {
        this.value = value;
        return this;
    }

    getResult() {
        return this.value;
    }

    add(value) {
        this.value += value;
        return this;
    }

    subtract(value) {
        this.value -= value;
        return this;
    }

    multiply(value) {
        this.value *= value;
        return this;
    }

    divide(value) {
        if (value === 0) {
            throw new Error("Ділення на нуль неможливе");
        }
        this.value /= value;
        return this;
    }
}

// Приклад використання:
const calc = new Calculator();

const result3 = calc
    .number(10)   // Встановлюємо початкове значення 10
    .add(5)       // Додаємо 5 (10 + 5 = 15)
    .subtract(3)  // Віднімаємо 3 (15 - 3 = 12)
    .multiply(4)  // Множимо на 4 (12 * 4 = 48)
    .divide(2)    // Ділимо на 2 (48 / 2 = 24)
    .getResult(); // Отримуємо результат: 24

console.log(result3); // 24