/* eslint-disable no-undef */
// eslint-disable-next-line strict
console.log('filters ready');
const statusSelect = document.querySelector('.status__select');
const genreSelect = document.querySelector('.genre__select');

function statusFilter(event){
  if (resultList !== null && resultList.length !== 0) {
    const selectedStatus = event.currentTarget.value;
    const statusValue1 = 'Running';
    const statusValue2 = 'Ended';
    const statusValue3 = 'To Be Determined';
    const statusValue4 = 'In Development';
    if(selectedStatus === '4'){
      const result = resultList.filter(word => {
        return word.dataset.status  === statusValue4;
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }else if(selectedStatus === '3'){
      const result = resultList.filter(word => {
        return word.dataset.status  === statusValue3;
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }else if(selectedStatus === '2'){
      const result = resultList.filter(word => {
        return word.dataset.status  === statusValue2;
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }else if(selectedStatus === '1'){
      const result = resultList.filter(word => {
        return word.dataset.status === statusValue1;
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }else{
      search();
    }
  }
}

function genreFilter(){
  if (resultList !== null && resultList.length !== 0) {
    console.log(resultList);
    const selectedStatus = event.currentTarget.value;
    const genreValue = '';
    const genreValue3= 'Action';
    const genreValue19 = 'Adult';
    const genreValue4 = 'Adventure';
    const genreValue5 = 'Anime';
    const genreValue6 = 'Children';
    const genreValue2 = 'Comedy';
    const genreValue8 = 'Crime';
    const genreValue24 = 'DIY';
    const genreValue1 = 'Drama';
    const genreValue25 = 'Espionage';
    const genreValue9 = 'Family';
    const genreValue10 = 'Fantasy';
    const genreValue7 = 'Food';
    const genreValue23 = 'History';
    const genreValue11 = 'Horror';
    const genreValue27 = 'Legal';
    const genreValue22 = 'Medical';
    const genreValue12 = 'Music';
    const genreValue18 = 'Mystery';
    const genreValue20 = 'Nature';
    const genreValue13 = 'Romance';
    const genreValue14 = 'Science-Fiction';
    const genreValue26 = 'Sports';
    const genreValue28 = 'Supernatural';
    const genreValue15 = 'Thriller';
    const genreValue21 = 'Travel';
    const genreValue16 = 'War';
    const genreValue17 = 'Western</ocon';
    if(selectedStatus === '3'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue3) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '19'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue19) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '4'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue4) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '5'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue5) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '6'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue6) > -1) {
          return word.dataset.genere;
        }
      });
      // eslint-disable-next-line no-undef
      resultsContainer.innerHTML = '';
      for (const item of result) {
        // eslint-disable-next-line no-undef
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '2'){
      // eslint-disable-next-line no-undef
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue2) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '8'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue8) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '24'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue24) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '1'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue1) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '25'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue25) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '9'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue9) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '10'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue10) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '7'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue7) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '23'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue23) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '11'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue11) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '27'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue27) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '22'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue22) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '12'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue12) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '18'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue18) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '20'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue20) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '13'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue13) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '14'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue14) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '20'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue20) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '13'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue13) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '14'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue14) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '26'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue26) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '28'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue28) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '15'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue15) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '21'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue21) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '16'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue16) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else if(selectedStatus === '17'){
      const result = resultList.filter(word => {
        if (word.dataset.genere.indexOf(genreValue17) > -1) {
          return word.dataset.genere;
        }
      });
      resultsContainer.innerHTML = '';
      for (const item of result) {
        resultsContainer.appendChild(item);
      }
    }
    else{
      search();
    }
  }
}

statusSelect.addEventListener('change', statusFilter);
genreSelect.addEventListener('change', genreFilter);
