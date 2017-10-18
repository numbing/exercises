var nameInput = document.getElementById('name');
var btn = document.getElementById('btn');

btn.addEventListener("click", function(){
 localStorage.setItem('nameInput' ,nameInput.value);
});
