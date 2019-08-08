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
}

btn.addEventListener('click', search);
