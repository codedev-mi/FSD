const name = document.getElementById('name');
const city = document.getElementById('city');
const h2 = document.querySelector('h2');

function getData(){
    h2.textContent = `Hello, ${name.value} you are from ${city.value}`;
}