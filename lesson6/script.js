'use strict'
const cartItem = {
    render(good) {
        return `<div class="good" data-index-number=${good.articul}>
                    <div class = "articul" ><b>Код товара: </b> ${good.articul}</div>
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button class = 'btn_prod' > В корзину</button>
                </div>`;
    },

    renderBascket(good) {
        return `<div class="goodbascket" data-index-number=${good.articul}>
                    <div class = "articul" ><b>Код товара: </b> ${good.articul}</div>
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                </div>`;
    },

}
/*Валидация производится только на наличие уже эдентичного товара. Так как принимаем условие что товар без
интерактивного ввода количества*/
const basket = {
    goods: [],
    cartItem,
    init() {
        document.querySelector('.basket').addEventListener('click', evt => {
            this.clickBascket(event)
        })
    },

    clickBascket(event) {
        if (event.target.className === 'btn_bascket') {
            let HTMLtext = `Заказ сформирован количество товара ${this.countGoods()} на сумму ${this.sumBascket()}`
            const bascketProduct = document.querySelector('.basket');
            bascketProduct.innerHTML = HTMLtext
            this.goods = []
        }

    },

    sumBascket() {
        let sum = 0;
        this.goods.forEach((good) => {
            sum += good.quantity * good.price;
        })
        return sum;
    },
    countGoods() {
        let countG = 0;
        this.goods.forEach((good) => {
            countG++;
        })
        return countG;
    },
    addGoods(product) {
        let goodObj = this.goods.find(good => good.articul === product.articul)
        if(typeof goodObj == "undefined") this.goods.push(Object.assign({}, product));
    },
    renderItemToBascket() {
        let HTMLText = '<h2> Ваша корзина </h2>'
        const bascketProduct = document.querySelector('.basket');
        this.goods.forEach((good) => {
            HTMLText += cartItem.renderBascket(good)

        })
        HTMLText += '<button class = "btn_bascket" > Оформить заказ</button>'
        bascketProduct.innerHTML = HTMLText
    },

    addProduct(good) {
        this.goods.push(Object.assign({}, good));
    }


}


const catalogProduct = {
    goods: [],
    cartItem,
    basket,
    init() {
        document.querySelector('.catalog').addEventListener('click', evt => {
            this.clickProdutct(event)
        })
    },

    clickProdutct(event) {
        if (event.target.className === 'btn_prod') {
            const parent = event.target.parentNode
            this.findGood(parent.dataset.indexNumber)
        }

    },

    findGood(articul) {
        let goodObj = this.goods.find(good => good.articul === articul)
        basket.addGoods(goodObj)
        basket.renderItemToBascket()
    },

    renderCatalogItem() {
        const catalogProduct = document.querySelector('.catalog');
        this.goods.forEach((good) => {
            catalogProduct.insertAdjacentHTML('beforeend', cartItem.render(good))
        })
    },
    addProduct(good) {
        this.goods.push(Object.assign({}, good));
    }

}


function getGoods(name, articul, price, quantity) {
    return {
        name: name,
        articul: articul,
        price: price,
        quantity: quantity

    }
}


const tomatos = getGoods('Помидоры', '1', 300, 2)
const cucumbers = getGoods('Огурцы', '2', 200, 1)
const onion = getGoods('Лук', '3', 30, 2)


catalogProduct.addProduct(tomatos)
catalogProduct.addProduct(cucumbers)
catalogProduct.addProduct(onion)

catalogProduct.renderCatalogItem()
catalogProduct.init()
basket.init()