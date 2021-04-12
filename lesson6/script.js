'use strict'
const cartItem = {
    render(good) {
        return `<div class="good">
                    <div class = "articul" data-id = "articul" data-index-number=${good.articul}><b>Код товара: </b> ${good.articul}</div>
                    <div><b>Наименование</b>: ${good.name}</div>
                    <div><b>Цена за шт.</b>: ${good.price}</div>
                    <div><b>Количество</b>: ${good.quantity}</div>
                    <div><b>Стоимость</b>: ${good.quantity * good.price}</div>
                    <button class = 'btn_prod' > В корзину</button>
                </div>`;
    },

}

const basket = {
        goods: [],
        cartItem,

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
                countG ++;
            })
            return countG;
        },
        addGoods(product) {
            this.goods.push(Object.assign({},product));
        },
        renderItemToBascket(){
            const bascketProduct = document.querySelector('.basket');
            this.goods.forEach((good) => {
                bascketProduct.insertAdjacentHTML('beforeend', cartItem.render(good))
            })
    },

    addProduct(good){
        this.goods.push(Object.assign({},good));
    }


}




const catalogProduct = {
    goods: [],
    cartItem,
    basket,
    init(){
      document.querySelector('.catalog').addEventListener('click', evt => {
          this.clickProdutct(event)
      })
    },

    clickProdutct(event) {
        console.log(event.target.className)
        if (event.target.className ==='btn_prod') {
            const parent = event.target.parentNode
            this.findGood(parent.querySelector('.articul').getElementById('articul').dataset.indexnumber)
        }

    },

    findGood(articul){
        let goodObj = this.goods.find(good => good.article === articul)
        console.log(goodObj);
    },

    renderCatalogItem(){
        const catalogProduct = document.querySelector('.catalog');
        this.goods.forEach((good) => {
            catalogProduct.insertAdjacentHTML('beforeend', cartItem.render(good))
        })
    },
    addProduct(good){
        this.goods.push(Object.assign({},good));
    }

}


function getGoods(name,articul ,price, quantity) {
    return {
        name: name,
        articul: articul,
        price: price,
        quantity: quantity

    }
}


const tomatos = getGoods('Помидоры','1', 300, 2)
const cucumbers = getGoods('Огурцы', '2',200, 1)
const onion = getGoods('Лук', '3',30, 2)



catalogProduct.addProduct(tomatos)
catalogProduct.addProduct(cucumbers)
catalogProduct.addProduct(onion)

catalogProduct.renderCatalogItem()
catalogProduct.init()