var cmbYear = document.getElementById('cmbYear');
var month = document.getElementById('month');
var day = document.getElementById('day');
var result = document.getElementById('result');
var today = new Date();

function creatOption (from ,to ,element){
  for(var i =from; i<=to ; i++){
    var option = document.createElement("option");
    option.text = i;
    option.value = i;
    element.add(option);
  }
}
creatOption(1900, 2017 ,cmbYear);
creatOption(1 ,12 ,month);
creatOption(1 ,31 ,day);

/*for ( var j = 1 ; j<=12 ; j++){
  var option = document.createElement("option");
  option.text = j;
  option.value = j;
  month.add(option);
}

 for (var k = 1 ; k<=31 ; k++){
  var option = document.createElement("option");
  option.text = k;
  option.value = k;
  day.add(option);
}*/


document.getElementById("mybtm").addEventListener("click", function(){
  var yearResult = cmbYear.options[cmbYear.selectedIndex].value;
  var monthResult = month.options[month.selectedIndex].value;
  var dayResult = day.options[day.selectedIndex].value;

});







