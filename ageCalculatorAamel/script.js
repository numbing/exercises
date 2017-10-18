var cmbYear = document.getElementById("cmbYear");
var cmbMonth = document.getElementById("cmbMonth");
var cmbDay = document.getElementById("cmbDay");
var btnCalculateAge = document.getElementById("btnCalculateAge");

function generateValues(from, to, element) {
  for(i=from; i <= to; i++) {
    var varOption = document.createElement("option");
    varOption.text = i;
    varOption.value = i;
    element.add(varOption);
  }
}

btnCalculateAge.addEventListener("click", calculateAge);

function calculateAge() {
  var varYear = cmbYear.value;
  var varMonth = cmbMonth.value;
  var varDay = cmbDay.value;

  var varCurrentTime = new Date();
  var varCurrentYear = varCurrentTime.getFullYear();
  var varCurrentMonth = varCurrentTime.getMonth() + 1;
  var varCurrentDay = varCurrentTime.getDate();

  console.log(varCurrentYear, varCurrentMonth, varCurrentDay);
}

generateValues(1900, 2017, cmbYear);
generateValues(1, 12, cmbMonth);
generateValues(1, 31, cmbDay);

localStorage.setItem("age", 31);
console.log(localStorage.getItem("age"));

sessionStorage.setItem("is_active", 1);
var a = sessionStorage.getItem("is_active");
