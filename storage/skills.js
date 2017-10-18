var skills = document.getElementById('skills');
var array = ['html','css','javascript','kungfu'];
var myBtn = document.getElementById("myBtn");
var tableSkills = document.getElementById("table-skills");
var counter = 0;
for(var i = 0 ; i<=array.length-1 ; i++){
  var option = document.createElement("option");
  option.text = array[i];
  option.value = array[i];
  skills.add(option);
}

myBtn.addEventListener("click", function(){
  counter++;
  localStorage.setItem('skills'+ counter ,skills.value);

  var li = document.createElement("li");
  var btn = document.createElement("button");
  btn.textContent = 'x';
  li.textContent = skills.value;
  li.appendChild(btn);
  tableSkills.appendChild(li);
});