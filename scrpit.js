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



async function getData(web) {
  let data = await fetch(web);
  let resp = await data.json();
  temp.textContent = `${resp.main.temp} °C`
  wind.textContent = `${resp.wind.speed} m/s`
  waves.textContent = `${resp.wind.gust} m`
}
getData(web)


////////////////
// declare elements for form 
let btnSubmit = document.querySelector('.btnSubmit')
let fullName = document.getElementById('fullName')
let email = document.getElementById('email')
let tele = document.getElementById('tele')
 
let data = {}
function addContact(e) {
e.preventDefault()
  let nameContent = fullName.value
  let emailContent = email.value
  let teleContent = tele.value


if (nameContent === '' || emailContent === '' || teleContent=== '') {
 alert('svp enter your information')
  
}else{
  let p = document.createElement('p')
  p.className ='text-center text-[green] text-2xl font-semibold mt-4 capitalixe shadow-xl'
  p.innerHTML = 'your information has submitted , wait for our response'
  document.querySelector('.main').appendChild(p)

  localStorage.setItem('name', nameContent)
localStorage.setItem('email', emailContent)
localStorage.setItem('tele', teleContent)
}
fullName.value = ''
email.value = ''
tele.value = ''
}
btnSubmit.addEventListener('click', addContact)











