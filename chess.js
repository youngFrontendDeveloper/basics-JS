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
centerBlock.style.position = "relative";

// Функции для блоков
//Создание списка с буквами
function createletters() {
  "use strict";  
  for(let j = 1; j < 3; j++) {
    let list = document.createElement("ul");
    list.style.display = "flex";
    list.style.justifyContent = "space-between";
    list.style.alignItems = "center";
    list.style.padding = "0 50px";
    list.style.listStyle = "none";
    list.style.textAlign = "center";
    for(let i = 97; i < 105; i++) {
      let item = document.createElement("li");
      list.append(item);
      item.innerText = String.fromCharCode(i);
      item.style.width = "80px";  
      if(j == 1) {
        topBlock.append(list);
        item.style.transform = "rotate(180deg)";
      } else {
        bottomBlock.append(list);
      }
    }
  }
}
createletters();

//Создание списка с цифрами
function createNumbers() {
  "use strict";  
  for(let j = 1; j < 3; j++) {
    let list = document.createElement("ul");
    list.style.display = "flex";
    list.style.flexDirection = "column";
    list.style.justifyContent = "center";
    list.style.alignItems = "space-between";
    list.style.margin = "0";
    list.style.padding = "0";
    list.style.listStyle = "none";
    list.style.textAlign = "center";    
    for(let i = 8; i > 0; i--) {
      let item = document.createElement("li");
      list.append(item);
      item.innerText = i;
      item.style.height = "80px";
      item.style.lineHeight = "80px";
      if(j == 1) {
        rightBlock.append(list);
        list.style.flexDirection = "column-reverse";
        list.style.transform = "rotate(180deg)";
      } else {
        leftBlock.append(list);
      }
    }
  }
}
createNumbers();

//Создание центрального блока
function createCenter() {
  "use strict";
  for(let i = 1; i < 9; i++) {   // Создаем линии
    let list = document.createElement("ul"); 
    centerBlock.append(list);  
    list.style.display = "flex" ;
    list.style.margin = "0";
    list.style.padding = "0";
    list.style.listStyle = "none";
    if(i % 2 == 0) {   //Меняем расположение четных линий     
      list.style.flexDirection = "row-reverse";         
    }
    for(let j = 1; j < 9; j++) {  // Создаем ячейкм
      let item = document.createElement("li"); 
      list.append(item);
      item.style.width = "80px";
      item.style.height = "80px";       
      if(j % 2 == 0) {  // Окрашиваем  квадратики доски  
        item.style.backgroundColor = "#4a0909";         
      } else {
        item.style.backgroundColor = "#ebe8e4";  
      }
    }   
  }
}
createCenter();

// Добавление шахматных фигурок
let officersBlack = ["&#9820;", "&#9822;", "&#9821;", "&#9818;", "&#9819;", "&#9821;", "&#9822;", "&#9820;"];
let pawnsBlack = "&#9823";
let officersWhite = ["&#9814;", "&#9816;", "&#9815;", "&#9812;", "&#9813;", "&#9815;", "&#9816;", "&#9814;"];
let pawnsWhite = "&#9817;";
addofficers(officersBlack, officersWhite);
addPawns(pawnsBlack, pawnsWhite);

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
      if(k == 1) {      //Располагаем верхние фигуры
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
      piece.style.left = (j + "px");
      piece.style.display = "flex";
      piece.style.justifyContent = "center";
      piece.style.alignItems = "center";
      piece.style. width = "80px";
      piece.style.height = "80px";
      piece.style.fontSize = "50px";        
      if(k == 1) {  //Располагаем верхние фигуры
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












