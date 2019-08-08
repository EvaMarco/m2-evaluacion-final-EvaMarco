'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
const resultList = [];
const favs = [];

function createNewElement(tag, myClass, id, name){
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

function createNewImage(tag, myClass, src, alt){
  const showImage = document.createElement(tag);
  showImage.src = src;
  showImage.alt = alt;
  showImage.classList.add(myClass);
  return showImage;
}

function addFavs(event){
  const item = event.currentTarget;
  const showid = item.getAttribute('data-id');
  const img = item.querySelector('.img');
  const title = item.querySelector('.showTitle');
  console.log(item);
  console.log(img);
  console.log(title);
  const id ={
    'id': showid,
    'name': title,
    'img': img
  };
  item.classList.toggle('show__fav');
  if(item.classList.contains('show__fav')){
    if(favs.id !== showid){
      // Añadirlo a la lista
      favs.push(id);
    }
  }
  else{
    for(const i of favs){
      console.log(i);
      if(i.id === showid){
        favs.pop(i);
      }
    }
    // Eliminarlo de la lista
    // const index = favs.indexOf(showid);
    // if(index > -1){
    //   favs.splice(index, 1);
  }
  localStorage.setItem('arrayFav', JSON.stringify(favs));
}


function search(){
  const inputShow = inputText.value;
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      for(const item of data){
        const newShow = createNewElement('div', 'show', `${item.show.id}`, item.show.name);
        if(item.show.image !== null){
          const showImage = createNewImage('img', 'img', item.show.image.medium, item.show.title);
          newShow.appendChild(showImage);
        }
        else{
          const imgDefualt = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
          const showImage =createNewImage('img', 'img', imgDefualt, item.show.title);
          newShow.appendChild(showImage);
        }
        resultList.push(newShow);
      }
      for(const item of resultList){
        resultsContainer.appendChild(item);
      }
      console.log(resultList);
      const shows = document.querySelectorAll('.show');
      for(const item of shows){
        item.addEventListener('click', addFavs);
      }
    });
}

btn.addEventListener('click', search);
