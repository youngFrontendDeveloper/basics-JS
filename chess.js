"use ctrict";
// Создаем основу
let body = document.querySelector("body");
let chess = document.createElement("div");
let topBlock = document.createElement("div");
let leftBlock = document.createElement("div");
let centerBlock = document.createElement("div");
let rightBlock = document.createElement("div");
let bottomBlock = document.createElement("div");
body.append(chess);
chess.append(topBlock);
chess.classList = "chess";
topBlock.id = "top";
chess.append(leftBlock);
leftBlock.id = "left";
chess.append(centerBlock);
centerBlock.id = "center";
chess.append(rightBlock);
rightBlock.id = "right";
chess.append(bottomBlock);
bottomBlock.id = "bottom";

// стили для основы
chess.style.border = "1px solid #4a0909";
chess.style.width = "fit-content";
chess.style.margin = "0 auto";
chess.style.backgroundColor = "#fafafa";
centerBlock.style.width = "643px";


// Функции для блоков

//Создание списка с буквами
function createletters(list) {
  "use strict";  
  for(let i = 104; i > 96; i--) {
    let item = document.createElement("li");
    list.append(item);
    item.innerText = String.fromCharCode(i);
    item.style.width = "80px";    
  }
}

// Стили для списка с буквами
function lettersStyles() {
  "use strict"; 
  let letters = document.querySelectorAll(".letters");
  for(let i = 0; i < letters.length; i++) {
    letters[i].style.display = "flex";
    letters[i].style.justifyContent = "space-between";
    letters[i].style.alignItems = "center";
    letters[i].style.padding = "0 50px";
    letters[i].style.listStyle = "none";
    letters[i].style.textAlign = "center";
  }
}

//Создание списка с цифрами
function createNumbers(list) {
  "use strict";  
  for(let i = 8; i > 0; i--) {
    let item = document.createElement("li");
    list.append(item);
    item.innerText = i;
    item.style.height = "80px";
    item.style.lineHeight = "80px";
  }
}

// Стили для списка с цифрами
function numbersStyles() {
  "use strict"; 
  let letters = document.querySelectorAll(".numbers");
  for(let i = 0; i < letters.length; i++) {
    letters[i].style.display = "flex";
    letters[i].style.flexDirection = "column";
    letters[i].style.justifyContent = "center";
    letters[i].style.alignItems = "space-between";
    letters[i].style.margin = "0";
    letters[i].style.padding = "0";
    letters[i].style.listStyle = "none";
    letters[i].style.textAlign = "center";    
  }
}

//Создание центрального блока
function createCenter(block) {
  "use strict";
  for(let i = 1; i < 9; i++) {
    let list = document.createElement("ul");
    block.append(list);  
    list.style.display = "flex" ;
    list.style.margin = "0";
    list.style.padding = "0";
    list.style.listStyle = "none";
    list.classList.add("center-list");

    for(let j = 1; j < 9; j++) {
      let item = document.createElement("li");
      list.append(item);
      item.style.width = "80px";
      item.style.height = "80px";    
      item.classList.add("center-item"); 
    }   
  }
}

// Стили для центрального блока
// Окрашиваем  квадратики доски
function centerItemsBgColor() {
  "use strict";
  let arr = document.querySelectorAll(".center-item");
    for(let i = 0; i < arr.length; i++) {     
        if(i % 2 == 0) {         
          arr[i].style.backgroundColor = "#4a0909";         
        } else {
          arr[i].style.backgroundColor = "#ebe8e4";  
        }
      }
    }

//Меняем расположение четных линий 
function centerListsDirectionReverse() {
  "use strict";
  let arr = document.querySelectorAll(".center-list");
    for(let i = 0; i < arr.length; i++) {     
        if(i % 2 == 0) {         
          arr[i].style.flexDirection = "row-reverse";         
        }
      }
}

// Добавление шахматных фигурок
// добавление офицеров
function addofficers(arr1, arr2) {
  "use strict";
  
  for(let k = 1; k < 3; k++) {
    for(let i = 0, j = 0; i < 8; i++, j +=80) {
      let piece = document.createElement("strong");
      centerBlock.append(piece);
      piece.style.position = "absolute";     
      piece.style.left = (j + "px");
      piece.style.display = "flex";
      piece.style.justifyContent = "center";
      piece.style.alignItems = "center";
      piece.style. width = "80px";
      piece.style.height = "80px";
      piece.style.fontSize = "50px";      
     
      if(k == 1) {
        piece.innerHTML = arr1[i]; 
        piece.style.top = "560px";        
      } else {
        piece.innerHTML = arr2[i]; 
        piece.style.top = "0";        
        piece.style.transform = "rotate(180deg)";
      }        
    } 
  } 
}

// добавление пешек
function addPawns(a1, a2) {
  "use strict";
  for(let k = 1; k < 3; k++) {
    for(let i = 0, j = 0; i < 8; i++, j +=80) {
      let piece = document.createElement("strong");
      centerBlock.append(piece);
      piece.style.position = "absolute";
      // piece.style.top = "480px";
      piece.style.left = (j + "px");
      piece.style.display = "flex";
      piece.style.justifyContent = "center";
      piece.style.alignItems = "center";
      piece.style. width = "80px";
      piece.style.height = "80px";
      piece.style.fontSize = "50px";   
      
      if(k == 1) {
        piece.innerHTML = a1; 
        piece.style.top = "480px";        
      } else {
        piece.innerHTML = a2; 
        piece.style.top = "80px";        
        piece.style.transform = "rotate(180deg)";
      }    
    } 
  }
}

// Создание блоков
// Создаем верх

let topList = document.createElement("ul");
topBlock.append(topList);
topList.id = "top__list";
topList.classList.add("letters");
createletters(topList);

// Стили для верха
document.querySelector("#top__list").style.transform = "rotate(180deg)";
lettersStyles();

// Создаем низ 
let bottomList = document.createElement("ul");
bottomBlock.append(bottomList);
bottomList.id = "bottom__list";
bottomList.classList.add("letters");
createletters(bottomList);

// Стили для низа
document.querySelector("#bottom__list").style.flexDirection = "row-reverse";
lettersStyles();

// Создаем левый блок
let leftList = document.createElement("ul");
leftBlock.append(leftList);
leftList.classList.add("numbers");
createNumbers(leftList);

// Стили для левого блока
numbersStyles(); 

// Создаем правый блок
let rightList = document.createElement("ul");
rightBlock.append(rightList);
rightList.id = "right__item";
rightList.classList.add("numbers");
createNumbers(rightList);

// Стили для правого блока
document.querySelector("#right__item").style.flexDirection = "column-reverse";
document.querySelector("#right__item").style.transform = "rotate(180deg)";
numbersStyles(); 

// Создаем центр

createCenter(centerBlock);

// Стили для центра
centerBlock.style.position = "relative";
centerBlock.style.display = "flex";
centerBlock.style.flexWrap = "wrap";
centerBlock.style.border = "2px solid #4a0909";
centerItemsBgColor();
centerListsDirectionReverse();

// Создаем шахматные фигурки
let officersBlack = ["&#9820;", "&#9822;", "&#9821;", "&#9818;", "&#9819;", "&#9821;", "&#9822;", "&#9820;"];
let pawnsBlack = "&#9823";
let officersWhite = ["&#9814;", "&#9816;", "&#9815;", "&#9812;", "&#9813;", "&#9815;", "&#9816;", "&#9814;"];
let pawnsWhite = "&#9817;";
addofficers(officersBlack, officersWhite);
addPawns(pawnsBlack, pawnsWhite);










