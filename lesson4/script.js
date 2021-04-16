'use strict';

/*1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
 в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект:
 {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999,
 необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.*/

function getMyObject(num) {
    if (num > 999) {
        console.log(`Число ${num} превышает 999 объект будет пустой`)
        return {}
    } else {
        return {
            units: Math.floor(num % 10),
            tens: Math.floor(num / 10 % 10),
            hundreds: Math.floor(num / 100 % 10),

        };
    }
}

let num = +prompt('Введите число от 0 до 999')
const myObg = getMyObject(num)
console.log(myObg)

/*2.Продолжить работу с интернет-магазином:
2.1. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими объектами можно заменить их элементы?
2.2. Реализуйте такие объекты.
2.3. Перенести функционал подсчета корзины на объектно-ориентированную базу.*/

function getBascket() {
    return {
        goods: [],
        sumBascket() {
            let sum = 0;
            this.goods.forEach((good) => {
                sum += good.count * good.price;
            })
            return sum;
        }
    }
}

function getGoods(name, price, count) {
    return {
        name: name,
        price: price,
        count: count
    }
}

const basket = getBascket()
const tomatos = getGoods('Помидоры', 300, 2)
const cucumbers = getGoods('Огурцы', 200, 1)
const onion = getGoods('Лук', 30, 2)

basket.goods = [tomatos, cucumbers, onion]
console.log(`Стоимость карзины ${basket.sumBascket()}`);
