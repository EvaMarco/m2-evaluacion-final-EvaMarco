'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
const resultList = [];

function search(){
  const inputShow = inputText.value;
  const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {
      for(const item of data){
        const newShow = document.createElement('div');
        newShow.classList.add(`show`);
        newShow.setAttribute('data-id', `${item.show.id}`);
        const showTitle = document.createElement('h3');
        const titleText = document.createTextNode(item.show.name);
        showTitle.appendChild(titleText);
        newShow.appendChild(showTitle);
        if(item.show.image !== null){
          const showImage = document.createElement('img');
          showImage.src = item.show.image.medium;
          showImage.alt = item.show.name;
          showImage.classList.add('img');
          newShow.appendChild(showImage);
        }
        else{
          const showImage = document.createElement('img');
          showImage.src = 'https://via.placeholder.com/210x295/ffffff/666666/?text=TV';
          showImage.alt = item.show.name;
          showImage.classList.add('img');
          newShow.appendChild(showImage);
        }
        resultList.push(newShow);
      }
      for(const item of resultList){
        resultsContainer.appendChild(item);
      }
    });
}

btn.addEventListener('click', search);
