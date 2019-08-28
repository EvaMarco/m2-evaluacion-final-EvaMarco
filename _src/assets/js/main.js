'use strict';

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
const resetBtn = document.querySelector('.reset__btn');
const allFavs = document.querySelector('.favContainer');
const resultNumber = document.querySelector('.resultnumber__text');
const numArray = [5, 8, 10];

let resultList = [];
let favs = [];
let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
if(favsarray !== null){
  favs = favsarray;
}

function init() {
  writeFav();
}
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
  return newLink;
}
function compare(a, b) {
  const genreA = a.name.toUpperCase();
  const genreB = b.name.toUpperCase();
  let comparison = 0;
  if (genreA > genreB) {
    comparison = 1;
  } else if (genreA < genreB) {
    comparison = -1;
  }
  return comparison;
}
function writeFav() {
  favContainer.innerHTML = '';
  let favsarray = JSON.parse(localStorage.getItem('favoriteShowsArray'));
  if (favsarray !== null) {
    if(favsarray.length === 0){
      allFavs.classList.add('hidden');
    }
    else{
      allFavs.classList.remove('hidden');
      favsarray.sort(compare);
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
  else{
    allFavs.classList.add('hidden');
  }
}
function addFavs(event) {
  let guilty = event.target;
  let item = event.currentTarget;
  if(!guilty.classList.contains('urlLink')){
    const showid = item.getAttribute('data-id');
    const img = item.querySelector('.img');
    const imgSrc = img.src;
    const title = item.querySelector('.showTitle');
    const name = title.innerHTML;
    const showLang = item.getAttribute('data-lang');
    const showStatus = item.getAttribute('data-status');
    const showGenres = item.getAttribute('data-genres');
    const showScore = item.getAttribute('data-score');
    const favItem = {
      'id': showid,
      'name': name,
      'img': imgSrc,
      'lang':showLang,
      'status': showStatus,
      'genere': showGenres,
      'score': showScore
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
}
function saveToLocalStorage() {
  localStorage.setItem('favoriteShowsArray', JSON.stringify(favs));
}
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
  const notfav = resultsContainer.querySelector(`[data-id="${granPgId}"]`);
  notfav.classList.toggle('show__fav');
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
function search() {
  const inputShow = inputText.value;
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      resultsContainer.innerHTML = '';
      resultList = [];
      resultNumber.innerHTML = data.length;
      for (const item of data) {
        const newShow = createNewElement('li', 'show', `${item.show.id}`, item.show.name,  `${item.show.url}`);
        const score = item.score;
        const lang = item.show.language;
        const status = item.show.status;
        const genres = item.show.genres;
        newShow.setAttribute('data-lang', lang);
        newShow.setAttribute('data-status', status);
        newShow.setAttribute('data-genere', genres);
        newShow.setAttribute('data-score', score);
        const premiere = item.show.premiered;
        const premiereshow = createNewTitle('time', 'time', premiere);
        if (item.show.image !== null) {
          const showImage = createNewImage('img', 'img', item.show.image.medium, item.show.title);
          newShow.appendChild(showImage);
        }
        else {
          const imgDefualt = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
          const showImage = createNewImage('img', 'img', imgDefualt, item.show.title);
          newShow.appendChild(showImage);
        }
        newShow.appendChild(premiereshow);
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
function showResults(){
  const num = parseInt(resultNumber.innerHTML);
  for( const item of numArray){
    if(item<= num){
      console.log(`El numero de resultados es ${num} y es mayor o igual a ${item}`);
    }
    else{
      console.log(`El numero de resultados es ${num} y es menor a ${item}`);
    }
  }
}

inputText.addEventListener('keyup', fakeClick);
resetBtn.addEventListener('click', cleanAll);
btn.addEventListener('click', search);
resultNumber.addEventListener('click', showResults);

init();
