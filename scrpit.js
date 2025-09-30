// Declare elements
const btnBurger = document.getElementById('btn-burger')
const listLien = document.querySelector('.list-lien')
const temp = document.getElementById('temp')
const wind = document.getElementById('wind')
const waves = document.getElementById('waves')

//create function "creatBG" for navLinks
function createBG() {
   listLien.classList.toggle('show')
    listLien.classList.toggle('show-links')
 
  
}
btnBurger.addEventListener('click',createBG)


// api 
let city = 'taghazout'
let key = '5b3e9a2401bd59d737432b93ebee4c4e'
let web = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric&lang=fr`
console.log(web);


async function getData(web) {
  let data = await fetch(web);
  let resp = await data.json();
  temp.textContent = `${resp.main.temp} °C`
  wind.textContent = `${resp.wind.speed} m/s`
  waves.textContent = `${resp.wind.gust} m`
}
getData(web)





















