var personal = {
  fullName : document.getElementsByName('fullName'),
  age : document.getElementsByName('age'),
  gender : document.getElementsByName('gender')
}

var education = {
  position : document.getElementsByName('position'),
  certificate : document.getElementsByName('certificate'),
  startEdu : document.getElementById('start-edu'),
  endEdu: document.getElementById('end-edu')
}
var experience = {
  title : document.getElementsByName('title'),
  company : document.getElementsByName('company'),
  startXp : document.getElementById('start-xp'),
  endXp : document.getElementById('end-xp')
}
var skills = {
  skills : document.getElementsByName('skills'),
  selectSkill : document.getElementById('select-skills')
}

var languague = {
  languague : document.getElementsByName('languague'),
  selectLang: document.getElementById('select-lang')
}

var hobby = {
  hobby : document.getElementsByName('hobbies')
}

var contact = {
  city : document.getElementsByName('city'),
  zipCode : document.getElementsByName('zip-code'),
  phone : document.getElementsByName('phone'),
  email : document.getElementsByName('email')
}
var link = {
  links : document.getElementsByName('links')
}
var eduBtn = document.getElementById('eduBtn');
var xpBtn = document.getElementById('expBtn');
var skillsBtn = document.getElementById('skillsBtn');
var lngBtn = document.getElementById('lngBtn');
var hobBtn = document.getElementById('hobBtn');
var linkBtn = document.getElementById('linkBtn');

$( function() {
  $(".start-edu").datepicker();
  $(".end-edu").datepicker();
  $(".start-xp").datepicker();
  $(".end-xp").datepicker();
  /*$('.eduBtn').click(function(){
  $('#form-education  .formContainer').clone().appendTo('#form-education');

  });
  $('#expBtn').click(function(){
    $('#formXp  .formContainer').clone().appendTo('#formXp');
  });*/
  $('button[type="button"]').click(function(){
      $(this).parent().find('.formContainer').clone().appendTo($(this).parent().find('form'))
  });



});
