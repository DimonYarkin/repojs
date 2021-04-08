'use strict'

/*1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию.
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.*/

function creatDesk() {
    const containerElement = document.getElementById('desk')
    let mySm = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let row = 0; row < 9; row++) {
        const trElem = document.createElement('tr')
        // if (!row % 2 == 0) trElem.style.backgroundColor = black
        containerElement.appendChild(trElem);

        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('td')
            if (col % 2 !== 0 && row % 2 == 0 && row !== 0) cell.className = 'cellblack'
            else if (col % 2 == 0 && row % 2 !== 0 && col !== 0) cell.className = 'cellblack'
            if (col === 0 && row > 0) cell.innerText = `${row}`
            if (col > 0 && row === 0) cell.innerText = `${mySm[col - 1]}`
            trElem.appendChild(cell)
        }
    }
}

creatDesk();

/*3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре.
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
3.1. Пустая корзина должна выводить строку «Корзина пуста»;
3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».*/

function getBascket() {
    return {
        goods: {},
        sumBascket() {
            let sum = 0;
            for (var key in this.goods) {
                const elem = this.goods[key];
                sum += elem.count * elem.price;
            }
            return sum;
        },
        countGoods(){
            return this.goods.count
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
const divBasket = document.querySelector('.basket')


const tomatos = getGoods('Помидоры', 300, 2)
const cucumbers = getGoods('Огурцы', 200, 1)
const onion = getGoods('Лук', 30, 2)
let HTMLtext =``
if (basket.countGoods()===0) {
    HTMLtext = `<p>Корзина пуста</p>`


}
divBasket.innerHTML = HTMLtext