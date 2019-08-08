'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
let resultList = [];
let favs = [];
let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
if(favsarray !== null){
  favs = favsarray;
}

function createNewElement(tag, myClass, id, name) {
  const newShow = document.createElement(tag);
  newShow.classList.add(myClass);
  newShow.setAttribute('data-id', id);
  const showTitle = document.createElement('h3');
  showTitle.classList.add('showTitle');
  const titleText = document.createTextNode(name);
  showTitle.appendChild(titleText);
  newShow.appendChild(showTitle);
  return newShow;
}

function createNewImage(tag, myClass, src, alt) {
  const showImage = document.createElement(tag);
  showImage.src = src;
  showImage.alt = alt;
  showImage.classList.add(myClass);
  return showImage;
}
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

function saveToLocalStorage() {
  localStorage.setItem('favoriteShowsArray', JSON.stringify(favs));
}
function writeFav() {
  favContainer.innerHTML = '';
  let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
  if (favsarray !== null) {
    for (const item of favsarray) {
      const favShow = createNewElement('div', 'favShow', item.id, item.name);
      const favImage = createNewImage('img', 'favImg', item.img, item.name);
      favShow.appendChild(favImage);
      favContainer.appendChild(favShow);
    }
  }
}

function init() {
  writeFav();
}

function search() {
  const inputShow = inputText.value;
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';
      resultList = [];
      for (const item of data) {
        const newShow = createNewElement('div', 'show', `${item.show.id}`, item.show.name);
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

btn.addEventListener('click', search);

init();
