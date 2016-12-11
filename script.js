/*

//РАЗДЕЛ ОБЪЯВЛЕНИЯ ГЛОБАЛЬНЫХ ПЕРЕМЕННЫХ

var angle = 0;
var spinner = document.querySelector("#spinner");
var figures = document.querySelectorAll("#spinner>*");
var buttons = document.querySelectorAll(".ss-icon");
var coef = 7;
var cityNavigation = document.querySelector('.viktorina_navigation').querySelector('.small');
var fullNavigation = document.querySelector('.viktorina_navigation').querySelector('.big');
createNavigation(cityNavigation, figures);
var cityNavigationButtons = cityNavigation.querySelectorAll("li");
var itemDescriptionButtons = document.querySelectorAll('.description');
var biggerPhoto = document.querySelector('.image-bigger');
var bigPhoto = document.querySelectorAll('.big-photo');
var smallPhotos = document.querySelectorAll('.small-photos');





//РАЗДЕЛ РАБОТЫ С КОДОМ

addparamToNavigation(cityNavigationButtons,cityNavigationButtons[0]);

buttons[0].addEventListener('keydown', function() {
  if (event.keyCode == 37) {
    galleryspin(1);
  }
});
buttons[0].addEventListener('keydown', function() {
  if (event.keyCode == 39) {
    galleryspin();
  }
});
buttons[0].addEventListener('click', function() {galleryspin(1)});

buttons[1].addEventListener('click', function() {galleryspin()});
buttons[1].addEventListener('keydown', function() {
  if (event.keyCode == 37) {
    galleryspin(1);
  }
});
buttons[1].addEventListener('keydown', function() {
  if (event.keyCode == 39) {
    galleryspin();
  }
});

itemDescriptionButtons.forEach(function(item,i) {
  item.addEventListener('click', function() {
  var dataSet = item.getAttribute('data-check');  
    if (dataSet == 0) {
      item.style.height = "12rem";
      item.setAttribute('data-check', 1);
    } else  {
      item.style.height = "1.5rem";
      item.setAttribute('data-check', 0);
    }
  });
});

cityNavigationButtons.forEach(function(item,i) {
  item.addEventListener('click', function() {
    navigationGallerySpin(spinner,i);
    addparamToNavigation(cityNavigationButtons,item);
  });
});

smallPhotos.forEach(function(item,i) {
  var qwerty = item.querySelectorAll('label'); 
  qwerty.forEach(function(it,j) {
    it.addEventListener('click', function() {
      changeBackGround(it,bigPhoto[i]);
    });
  });
});





bigPhoto.forEach(function(item,i) {
  item.addEventListener('click', function() {
  gettingCloser(biggerPhoto);
});
});
biggerPhoto.children[0].addEventListener('click', function() {
  biggerPhoto.style.zIndex = -1;
  biggerPhoto.style.opacity = 0;
});






//РАЗДЕЛ ОБЪЯВЛЕНИЯ ФУНКЦИЙ

function galleryspin(sign) { 
if (!sign) { angle += 360/figures.length; } else { angle -=360/figures.length; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg) translatex(25%); -moz-transform: rotateY("+ angle +"deg) translatex(25%); transform: rotateY("+ angle +"deg) translatex(25%); transform-origin: 50% 50% -"  + figures.length*coef + "rem;");
  var result = (angle%360)/(360/figures.length);
  if (result < 0) {
    result += figures.length;
  }
var item = cityNavigationButtons[result];  
addparamToNavigation(cityNavigationButtons,item);
  
}

function createNavigation(elem, amount) {
   for (var i = 0; i < amount.length; i++) {
    elem.insertAdjacentHTML('beforeEnd',"<li></li>");
  }
}

function navigationGallerySpin(gallery,param) {
  var amountOfChilds = gallery.children.length;
  angle = (360/amountOfChilds)*param;
  gallery.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg)  translatex(25%); -moz-transform: rotateY("+ angle +"deg)  translatex(25%); transform: rotateY("+ angle +"deg)  translatex(25%); transform-origin: 50% 50% -"  + figures.length*coef + "rem;");
}


(function calcWidth() {
  spinner.setAttribute("style", "transform-origin: 50% 50% -"  + figures.length*coef + "rem;");
  figures.forEach(function(item,i) {
  item.setAttribute("style", "transform: rotateY(" + (-360/figures.length)*i + "deg); transform-origin: 50% 50% -"  + figures.length*coef + "rem;");
  });
  })();

function addparamToNavigation(navigationBar,item) {
  navigationBar.forEach(function(it) {
      it.classList.remove('clicked');
    });
    item.classList.add('clicked');
}

function changeBackGround(smallPhoto, bigPhoto) {
  var computedStyle = getComputedStyle(smallPhoto);
  bigPhoto.style.backgroundImage = computedStyle.backgroundImage;
}
/*
function gettingCloser(elem) {
  elem.style.zIndex = 9999;
  elem.style.opacity = 1;
}
*/

var angle = 0;

var li = document.querySelectorAll('li');
var div = document.querySelectorAll(' li div');
li.forEach(function(item,i) {
  item.setAttribute('style', 'transform: rotate(' + ((360/li.length)*i + angle) + 'deg)' );
});
/*
div.forEach(function(item,i) {
  item.setAttribute('style', 'transform: rotate(' + ((-360/div.length)*i + angle) + 'deg)' );
});
*/

