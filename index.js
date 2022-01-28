'use strict';
const selectCard = document.querySelector('.card');

const getCountry = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        console.log(data);

        const html = `
    <div class ='imgBox'>
     <img src='${data.flag}'>
    </div>
    
    <div class ='content'>
    <h2 class='countName'><span ></span>${data.name.toUpperCase()}</h2>
    <h4><span>💰 : </span>${data.currencies[0].name}</h4>
    <h4><span>👫 : </span>${Math.trunc((+data.population)/1000000)}m</h4>
    <h4><span>🗣 : </span>${data.languages[0].name}</h4>
    <h4><span>⏲ : </span>${data.timezones}</h4>

    </div>
    
    </div>`
        selectCard.insertAdjacentHTML('beforeend', html);

    })
}

getCountry('portugal');