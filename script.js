// Select DOM Elements
const h1 = document.querySelector('h1');
const div = document.querySelector('div');
const button = document.querySelector('button');

h1.addEventListener('click', function(event) {
    h1.style.backgroundColor = 'red';  
});

div.addEventListener('mouseover', function(event) {
    console.log('hover');
});

button.addEventListener('click', function(event) {
    button.textContent = Math.floor(Math.random() * 10 + 1);
});