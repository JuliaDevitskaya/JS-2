// 1. Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.

const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
if (num1<=1) {
    console.log(`${num1} <= 1`);
} else if (num1 > 1) {
    console.log(`${num1} > 1`);
}
else {
    console.log(`Вы ввели недопустимое значение`)
}
if (num2>=3) {
    console.log(`${num2} =>3`);
} else if (num2 <3) {
    console.log(`${num2} < 3`);
}
else {
    console.log(`Вы ввели недопустимое значение`)
}

// 2. Перепишите код к тернарному оператору
// let test = true;
// if (test === true) {
//     console.log('+++');
// } else {
//     console.log('---');
// }

let test = true;
console.log((test === true) ? '+++' : '---');


// 3. В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью).

let day = Number(prompt('Введите число от 1 до 31'));
if (day>=1 && day<11) {
    console.log('День выпадает на первую декаду месяца');
} else if ( day>=11 && day<21) {
    console.log('День выпадает на вторую декаду месяца');
} else if (day>=21 && day<=31) {
    console.log('День выпадает на третью декаду месяца');
} else {
    console.log('Введено значение, не входящее в диапозон от 1 до 31');
}


// 4. Необходимо от пользователя получить число.
// Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

const number = Number(prompt('Введите положительное целое число'));
const one = Math.trunc(number % 10);
const ten = Math.trunc( number / 10 % 10);
const hundred = Math.trunc(number / 100 % 10);
if ( number>=0) {
    console.log(`В числе ${number} количество сотен: ${hundred}, десятков: ${ten}, единиц: ${one}`);
}

// Пример:
// Пользователь ввел число 163. Программа должна вывести:
// "В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

// Пример 2:
// Пользователь ввел число 74. Программа должна вывести:
// "В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

// Пример 3:
// Пользователь ввел число 9537. Программа должна вывести:
// "В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

// Уточнение: пользователь всегда вводит корректное положительное целое число.