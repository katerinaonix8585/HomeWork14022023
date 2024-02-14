// Удвоение элементов массива

const numbers = [1, -2, 3, -4, 5, -6, 7];

const newNumbers = numbers.map((number) => 2 * number);
console.log(newNumbers);

// Преобразование строк в верхний регистр

const words = ["привет", "пока", "до свидания", "добрый вечер"];

const newWords = words.map ((word) => word.toUpperCase());
console.log(newWords);

// Вычисление суммы элементов
let sum = 0;
numbers.forEach((value) => (sum = sum + value));
console.log(sum); 

// Удаление отрицательных чисел

function filter(array) {
    let newNumbers = [];
    for (let i=0; i < array.length; i++) {
        if (array[i]>0){newNumbers.push(array[i]);}
    }
    return newNumbers;
}
console.log(filter(numbers));