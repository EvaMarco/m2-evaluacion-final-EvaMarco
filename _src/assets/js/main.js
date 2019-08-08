'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
const resetBtn = document.querySelector('.reset__btn');

let resultList = [];
let favs = [];
let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
if(favsarray !== null){
  favs = favsarray;
}

/* Función inicial */

function init() {
  writeFav();
}

/* Funciones para crear elementos nuevos */

function createNewElement(tag, myClass, id, name, url) {
  const showWrapper = createNewDiv('div', 'show__wrapper', id);
  const showTitle = document.createElement('h3');
  const titleText = document.createTextNode(name);
  showTitle.appendChild(titleText);
  showTitle.classList.add('showTitle');
  showWrapper.appendChild(showTitle);
  const newUrl = createNewLink('a', 'urlLink', url);
  showWrapper.appendChild(newUrl);
  const newShow = document.createElement(tag);
  newShow.classList.add(myClass);
  newShow.setAttribute('data-id', id);
  newShow.appendChild(showWrapper);
  return newShow;
}
function createNewDiv(tag, myClass, id) {
  const newDiv = document.createElement(tag);
  newDiv.classList.add(myClass);
  newDiv.setAttribute('data-id', id);
  return newDiv;
}
function createNewTitle(tag, myClass, name) {
  const newTitle = document.createElement(tag);
  newTitle.classList.add(myClass);
  const titleText = document.createTextNode(name);
  newTitle.appendChild(titleText);
  return newTitle;
}
function createNewImage(tag, myClass, src, alt) {
  const showImage = document.createElement(tag);
  showImage.src = src;
  showImage.alt = alt;

  showImage.classList.add(myClass);
  return showImage;
}
function createNewLink(tag, myClass, url ){
  const newLink = document.createElement(tag);
  newLink.setAttribute('target', '__blank');
  const innerText = document.createTextNode(`?`);
  newLink.appendChild(innerText);
  newLink.classList.add(myClass);
  newLink.href = url;
  console.log(newLink.href);
  console.log(newLink);
  return newLink;
}
function writeFav() {
  favContainer.innerHTML = '';
  let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
  if (favsarray !== null) {
    for (const item of favsarray) {
      const favTitleDiv = createNewDiv('div', 'fav_TitleWrapper', item.id);
      const favTitle = createNewTitle('h3', 'fav__ShowTitle', item.name);
      const closeBtn = document.createElement('button');
      closeBtn.classList.add('closeBtn');
      closeBtn.addEventListener('click', remove);
      favTitleDiv.appendChild(favTitle);
      favTitleDiv.appendChild(closeBtn);
      const favImage = createNewImage('img', 'favImg', item.img, item.name);
      const favShow = createNewDiv('div', 'favShow', item.id);
      favShow.appendChild(favTitleDiv);
      favShow.appendChild(favImage);
      favContainer.appendChild(favShow);
    }
  }
}

/* Añadir a favoritos */

function addFavs(event) {

  const item = event.currentTarget;
  const showid = item.getAttribute('data-id');
  const img = item.querySelector('.img');
  const imgSrc = img.src;
  const title = item.querySelector('.showTitle');
  const name = title.innerHTML;
  const favItem = {
    'id': showid,
    'name': name,
    'img': imgSrc
  };

  item.classList.toggle('show__fav');

  if (favs !== null && favs.length !== 0) {
    let favorite = favs.find(favItem => favItem['id'] === showid);
    if (favorite === undefined) {
      favs.push(favItem);
    }
    else {
      const index = favs.indexOf(favorite);
      if (index > -1) {
        favs.splice(index, 1);
      }
    }
  }
  else {
    favs = [];
    favs.push(favItem);
  }

  saveToLocalStorage();
  writeFav();
}

/* Añadir al Local Storage */

function saveToLocalStorage() {
  localStorage.setItem('favoriteShowsArray', JSON.stringify(favs));
}

/* Eliminar favoritos */

function remove(event){
  const guilty = event.currentTarget;
  const parentG = guilty.parentElement;
  const granPG = parentG.parentElement;
  const granPgId =granPG.getAttribute('data-id');
  let favorite = favs.find(favItem => favItem['id'] === granPgId);
  const index = favs.indexOf(favorite);
  if (index > -1) {
    favs.splice(index, 1);
  }
  saveToLocalStorage();
  writeFav();
}

function cleanAll(){
  favs=[];
  localStorage.clear();
  writeFav();
  const cleanArray = document.querySelectorAll('.show__fav');
  for(const i of cleanArray){
    i.classList.toggle('show__fav');
  }
}

/* Función principal de búsqueda */

function search() {
  const inputShow = inputText.value;
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';
      resultList = [];
      for (const item of data) {
        const newShow = createNewElement('div', 'show', `${item.show.id}`, item.show.name,  `${item.show.url}`);

        if (item.show.image !== null) {
          const showImage = createNewImage('img', 'img', item.show.image.medium, item.show.title);
          newShow.appendChild(showImage);
        }
        else {
          const imgDefualt = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
          const showImage = createNewImage('img', 'img', imgDefualt, item.show.title);
          newShow.appendChild(showImage);
        }
        resultList.push(newShow);
      }
      for (const item of resultList) {
        const newid = item.getAttribute('data-id');
        if (favs !== null && favs.length !== 0) {
          let favorite = favs.find(favItem => favItem['id'] === newid);
          if (favorite !== undefined) {
            item.classList.toggle('show__fav');
          }
        }
        resultsContainer.appendChild(item);
      }
      const shows = document.querySelectorAll('.show');
      for (const item of shows) {
        item.addEventListener('click', addFavs);
      }
    });
}

function fakeClick(event) {
  if (event.keyCode === 13) {
    search();
  }
}

inputText.addEventListener('keyup', fakeClick);
resetBtn.addEventListener('click', cleanAll);
btn.addEventListener('click', search);

init();
