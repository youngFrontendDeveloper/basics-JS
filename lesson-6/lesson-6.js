"use strict";
let crossСlose = document.querySelector(".close");
let blockSmall = document.querySelector(".small");
let blockBig = document.querySelector(".big");
let imgSmall = [];
let imgBig = [];
let left = document.querySelector(".left-arrow");
let right = document.querySelector(".right-arrow");

function toСlose() {
  blockBig.style.display = "none";
}
crossСlose.addEventListener("click", toСlose);

// Создаем элементы с тегом img
for (let k = 1; k < 3; k++) {
  for (let i = 0; i < 5; i++) {
    let img = document.createElement("img");
    if (k == 1) {
      img.src = "img/small/" + (i + 1) + ".jpg";     
      img.classList.add("small__img");
      blockSmall.append(img);
      img.addEventListener("click", biggerPictures);
      imgSmall.push(img);
      
    } else {
      img.src = "img/big/" + (i + 1) + ".jpg";     
      img.classList.add("big__img");
      blockBig.append(img);
      imgBig.push(img);     
    }
  }
}

function checkAvailabilityOfImage() {
    for(let i = 0; i < imgBig.length; i++) {
      imgSmall[i].onerror = function() {
        imgSmall[i].src = "img/small/error.jpg";
      };
      imgBig[i].onerror = function() {
        imgBig[i].src = "img/big/Error.jpg";
      };
    }
  }
  checkAvailabilityOfImage();

function biggerPictures(e) {
  blockBig.style.display = "block";
  let a = imgSmall.indexOf(e.target);   
  for (let i = 0; i < imgBig.length; i++) {    
    if (i == a) {
      imgBig[i].style.display = "block"; 
      imgBig[i].id = "active";      
    }     
  }  
}

left.addEventListener("click", function() { 
  let a = imgBig.findIndex(x => x.id == "active");    
  for(let i = 0; i < imgBig.length; i++) {
    imgBig[i].style.display = "none";    
    imgBig[i].removeAttribute("id");
  }
  let i = a - 1;
  if(i < 0 ) {
    i = imgBig.length - 1;   
  }
  imgBig[i].style.display = "block";
  imgBig[i].id = "active";  
});

right.addEventListener("click", function() { 
  let a = imgBig.findIndex(x => x.id == "active");    
  for(let i = 0; i < imgBig.length; i++) {
    imgBig[i].style.display = "none";    
    imgBig[i].removeAttribute("id");
  }
  let i = a + 1;
  if(i > imgBig.length - 1 ) {
    i = 0;   
  }
  imgBig[i].style.display = "block";
  imgBig[i].id = "active";   
});


