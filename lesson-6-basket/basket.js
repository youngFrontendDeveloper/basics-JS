"use strict";

// let k;
let cards = [
  {
  title: "Самосвал",
  price: 100,
  img: (0 + ".jpg"),
  // id: k,
  },
  {
  title: "Жигули",
  price: 150,
  img: (1 + ".jpg"),
  // id: k,
  },
  {
  title: "Москвич",
  price: 140,
  img: (2 + ".jpg"),
  // id: k,
  },
  {
  title: "Нива",
  price: 180,
  img: (3 + ".jpg"),
  // id: k,
  },
];
let sum = 0;
let basketQuantity = document.querySelector(".basket__quantity");
let basketSumma = document.querySelector(".basket__summa");
let basketBlock;
let table;
let k = 0;   // счетчик номеров по порядку в корзине
let span = document.createElement("span"); 

// Создаем товары  и таблицу для корзины
window.onload = function() {
  let cardsBlock = document.querySelector(".cards"); // Создание карточек продуктов
  for(let i = 0; i< cards.length; i++) {
    let card = document.createElement("figure");
    card.classList.add("card");    
    cardsBlock.append(card);
    let img = document.createElement("img");
    card.append(img);
    img.classList.add("card__img");
    img.src = "img/" + cards[i].img;
    let figcaption = document.createElement("figcaption");
    figcaption.classList.add("card__text-block");
    card.append(figcaption);
    let cardTitle = document.createElement("p");
    cardTitle.classList.add("card__title"); 
    figcaption.append(cardTitle);
    cardTitle.append( document.createTextNode(cards[i].title) );
    let cardPrice = document.createElement("p");
    cardPrice.classList.add("card__price"); 
    cardPrice.append( document.createTextNode(cards[i].price + " руб.") );
    figcaption.append(cardPrice);
    let cardAdd = document.createElement("a");
    cardAdd.classList.add("card__add");
    cardAdd.id = ("card-add-" + i);
    figcaption.append(cardAdd);
    cardAdd.append( document.createTextNode("Купить") );
    cardAdd.addEventListener("click", addProductToBasket);
  }
    basketBlock = document.querySelector("#basket-block");  // Создание таблицы корзины
    table = document.createElement("table");
    table.classList.add("table"); 
    let tr = table.insertRow(0);
    let td = tr.insertCell();
    td.append( document.createTextNode("№") );
    td = tr.insertCell();
    td.append( document.createTextNode("Название") );
    td = tr.insertCell();
    td.append( document.createTextNode("Цена") );
    td = tr.insertCell();
    td.append( document.createTextNode("Количество") );
    td = tr.insertCell(); 
    td.append( document.createTextNode("Сумма") );
    basketBlock.append(table); 
    span.classList.add("basket-block__text");  
    basketBlock.append(span);    
};

function addProductToBasket(e) {  
  let i = e.target.id.slice(9);    
  let tr = table.insertRow();
  let td = tr.insertCell(); 
  td.append( document.createTextNode(k+=1) );
  td = tr.insertCell();
  td.append( document.createTextNode(cards[i].title) );
  td = tr.insertCell();
  td.append( document.createTextNode(cards[i].price) );
  td = tr.insertCell();
  let input  = document.createElement("input")
  td.append( input);
  input.type = "number";
  input.value = "1";
  let numberOfProduct = input.value;
  numberOfProduct = input.value;
  td = tr.insertCell(); 
  td.append( document.createTextNode(cards[i].price * numberOfProduct) ); 
  sum += cards[i].price * numberOfProduct;
  span.innerText = "Итого: " + calcSum() + " руб.";
  checgeNumberOfProducts();
  calcSum();
  console.log(sum);
}

// Показываем количество товаров в корзине и сумму
function checgeNumberOfProducts() {
  basketQuantity.innerText = k;
  basketSumma.innerText = calcSum();
}

function calcSum() {
  return sum;
}




// Прибавляем или убавляем количество товара в корзине
 