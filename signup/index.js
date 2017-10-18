// var countainer = document.getElementById('countainer');
// var input =document.createElement('input');
// console.log(input);
// countainer.appendChild(input);
var input = new HTMLForm();
var elements = [];

elements.push(input.createLabel("usr",'username'));
elements.push(input.createInput("username","name"));

elements.push(input.createLabel("countryOfB",'country Of Birth'));
elements.push(input.createSelect("countriesB"));

elements.push(input.createLabel('countryOfRe',"country of residente"));
elements.push(input.createSelect("countriesR"));
input.createOption('cob');

elements.push( input.createBtn('btn', 'signt up'));
input.render(elements);


