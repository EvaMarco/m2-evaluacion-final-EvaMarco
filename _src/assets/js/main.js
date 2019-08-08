'use strict';

// eslint-disable-next-line no-console
console.log('>> Ready :)');

const inputText = document.querySelector('.js__inputText');
const btn = document.querySelector('.js__searchBtn');
const favContainer = document.querySelector('.js__fav');
const resultsContainer = document.querySelector('.js__results');
const inputShow = inputText.nodeValue;

const ENDPOINT = `http://api.tvmaze.com/search/shows?q=${inputShow}`;

function search(){
  console.log('busco');
  fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => {console.log(data);
      for(const item of data){
        console.log(item.show);
        console.log(item.show.id);
        console.log(item.show.name);
        if(item.show.image !== null){
          console.log(item.show.image.medium);
        }
        else{
          console.log('no tengo imagen');
        }
      }
    });
}

btn.addEventListener('click', search);
