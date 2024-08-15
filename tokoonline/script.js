// script.js

// Event handler untuk tombol beli
let buttons = document.getElementsByTagName('button');

for(let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    let name = this.previousElementSibling.previousElementSibling.innerText; 
    alert('Anda membeli ' + name);
  }); 
}