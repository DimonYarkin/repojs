"use strict";
var a = 1, b = 1, c, d;
let body = document.body;
let div = document.createElement("div");
body.appendChild(div)
c = ++a; //alert(c);           // 2


let textInner = `<h4>c = ++a; результат = ${c}</h4>`
    + '<p>Здесь используется префиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>a</b> будет инкремирована на единицу и равна 2 <br>'
    + 'и переменная <b>c</b> после присваивания тоже будет равна 2 </p>';
d = b++;            // 1

textInner += `<h4>d = b++; результат = ${d}</h4>`
    + '<p>Здесь используется постфиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>b</b> в данном выражении не будет инкремирована на единицу и равна 1 <br>'
    + 'и переменная <b>d</b> после присваивания тоже будет равна 1 </p>';
c = (2 + ++a);       // 5

textInner += `<h4>c = (2+ ++a); результат = ${c}</h4>`
    + '<p>Здесь используется префиксная форма записи унарного оператора. '
    + 'Исходя из этого переменная <b>a</b> в данном выражении будет инкремирована на единицу и равна 3 <br>'
    + 'и переменная <b>c</b> после присваивания будет равна 5 </p>';

d = (2 + b++);       // 4

textInner += `<h4>d = (2+ b++); результат = ${d}</h4>`
    + '<p>Здесь используется постфиксная форма записи унарного оператора. В педыдущем выражении перенная <b>b</b> была инкремирована на 1 и сейчас равна 2 <br>'
    + 'Исходя из этого переменная <b>b</b> в данном выражении не будет инкремирована на единицу и равна 2 <br>'
    + 'и переменная <b>d</b> после присваивания будет равна 4 </p>';
textInner += `<h4>В итоге после всех интрементов переменная <b>a</b> = ${a} и переменная <b>b</b> = ${b}</h4>`

textInner += `<h3>2. Чему будет равен x в примере ниже?</h3>`
textInner += `<p>  var a = 2; <br> var x = 1 + (a *= 2);</p>`

var a = 2;
var x = 1 + (a *= 2);

textInner +=`<p>x равер ${x} потому что. Переменной <b>a</b> изначально присваевается значение 2. <br>
Затем в выражении присваеваемогу <b>x</b> переменная <b>a</b> умножается на 2 и к вычиленному значению прибавляется 1.<br>
В итоге переменная <b>x</b> равна 5</p> `


textInner += `<h3>3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. <br>
Затем написать скрипт, который работает по следующему принципу:</h3>`
textInner += `<p>  если a и b положительные, вывести их разность;<br>
если а и b отрицательные, вывести их произведение;<br>
если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.</p>`

//Выполним задачу
function myFunc(a,b) {
    if (a>=0 && b>=0) return a-b
    else if (a<0 && b<0) return a*b
    else return a+b

}

textInner += `<p>  Проверяем работу функции<br>
задаем значения a=0 b=1 результат = ${myFunc(0,1)}<br>
задаем значения a=-2 b=-3 результат = ${myFunc(-2,-3)}<br>
задаем значения a=2 b=-3 результат = ${myFunc(2,-3)}<br>`


textInner += `<h3>4. Присвоить переменной а значение в промежутке [0..15].
С помощью оператора switch организовать вывод чисел от a до 15.</h3>`

function mySwitchRev(val) {
    let result =''
    switch (val) {
        case 15: result += '15,'
        case 14: result += '14,'
        case 13: result += '13,'
        case 12: result += '12,'
        case 11: result += '11,'
        case 10: result += '10,'
        case 9: result += '9,'
        case 8: result += '8,'
        case 7: result += '7,'
        case 6: result += '6,'
        case 5: result += '5,'
        case 4: result += '4,'
        case 3: result += '3,'
        case 2: result += '2,'
        case 1: result += '1,'
        case 0: result += '0,'
    }
    return result.split(',').reverse().join(' ')
}

function mySwitch(val) {
    let result =''
    switch (val) {
        case 0: result += ' 0'
        case 1: result += ' 1'
        case 2: result += ' 2'
        case 3: result += ' 3'
        case 4: result += ' 4'
        case 5: result += ' 5'
        case 6: result += ' 6'
        case 7: result += ' 7'
        case 8: result += ' 8'
        case 9: result += ' 9'
        case 10: result += ' 10'
        case 11: result += ' 11'
        case 12: result += ' 12'
        case 13: result += ' 13'
        case 14: result += ' 14'
        case 15: result += ' 15'
    }
    return result
}

let valNumber = Math.floor(Math.random()*15)

textInner += `<p>Заданное число случайным образом = ${valNumber}<br>
Результат от a до 15= ${mySwitch(valNumber)}<br>
Результат от a до 0 = ${mySwitchRev(valNumber)}

</p>`

textInner += `<h3>5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
Обязательно использовать оператор return.</h3>`

// Выполним задачу


function summab(a, b) {
    return a + b;
}

function minusab(a, b) {
    return a - b;
}

function divab(a, b) {
    return a / b;
}

function multab(a, b) {
    return a * b;
}

textInner += `<p> Проверка результата выполнения функций.<br>
Результат функции сумма <b> summab(2, 3) = ${summab(2, 3)}</b> <br>
Результат функции вычитание <b> minusab(3, 2) = ${minusab(3, 2)}</b> <br>
Результат функции деление <b> divab(10, 2) = ${divab(10, 2)}</b> <br>
Результат функции умножкние <b> multab(2, 3) = ${multab(2, 3)}</b> <br></p>`


textInner += `<h3>6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, 
    operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций
(использовать функции из пункта 5) и вернуть полученное значение (использовать switch).<br></h3>`

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+': return summab(Number(arg1),Number(arg2))
        case '-': return minusab(Number(arg1),Number(arg2))
        case '*': return multab(Number(arg1),Number(arg2))
        case '/': return divab(Number(arg1),Number(arg2))
        default: return 'Операция не определена'

    }

}

function onClickButton() {
    let arg1 = document.getElementById("arg1").value
    let arg2 = document.getElementById("arg2").value
    let operation = document.getElementById("operation").value

    document.getElementById("result").innerHTML = `Результат = ${mathOperation(arg1, arg2, operation)} `

}
textInner += `<p>Введите arg1: <input type = "text" id= "arg1"><br></p>`
textInner += `<p>Введите arg2: <input type = "text" id= "arg2"><br></p>`
textInner += `<p>Введите операцию (+,-,* или /): <input type = "text" id= "operation"><br></p>`

textInner += `<p id="result">Результат</p><br>`
textInner += `<button type="button" onclick="onClickButton()">Вычислить выражение</button>`

textInner += `<h3>7. *Сравнить null и 0. Попробуйте объяснить результат.</h3>`

function funcNull() {
    return null == 0
}

textInner += `<p> Результат сравнения ${funcNull()}</p><br>`
textInner += `<p> Для нестрогого равенства == значений undefined и null действует особое правило: 
эти значения ни к чему не приводятся, они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.</p>`

textInner += `<h3>8. *С помощью рекурсии организовать функцию возведения числа в степень. <br>
Формат: function power(val, pow), где val – заданное число, pow – степень.</h3>`

function power(val, pow) {
    if (pow === 1) return val
    if (pow != 1)  return (val * power(val, pow - 1))
}

function onClickButtonpower() {
    let val = +document.getElementById("val").value
    let pow = +document.getElementById("pow").value

    document.getElementById("resultpower").innerHTML = `Результат = ${power(val, pow)} `
}


textInner += `<p>Введите число: <input type = "text" id= "val"><br></p>`
textInner += `<p>Введите степень: <input type = "text" id= "pow"><br></p>`
textInner += `<p id="resultpower">Результат</p><br>`
textInner += `<button type="button" onclick="onClickButtonpower()">Возвести в степень</button>`

div.innerHTML = textInner