personName = document.querySelector("#personName");
lastSeen = document.querySelector("#lastSeen");
cmbSkills = document.querySelector("#cmbSkills");
btnSaveSkill = document.querySelector("#btnSaveSkill");
divPersonSkills = document.querySelector("#divPersonSkills");
lnkChangeName = document.querySelector("#lnkChangeName");
btnDeleteButtons = document.querySelectorAll(".btnDeleteButtons");

skillsList = ["HTML", "CSS", "JavaScript", "Kung Fu"];

window.addEventListener("load", pageLoadEvent);
btnSaveSkill.addEventListener("click", btnSaveSkillClick);
lnkChangeName.addEventListener("click", lnkChangeNameClick);

function pageLoadEvent() {
  personName.innerText = localStorage.getItem("personName");
  lastSeen.innerText = sessionStorage.getItem("lastSeen");
  displaySkills();
  bindDeleteButtonClickEvents();
}

function btnSaveSkillClick() {
  var savedSkills = localStorage.getItem("savedSkills");
  if(savedSkills == null) {
    localStorage.setItem("savedSkills", cmbSkills.value);
    displaySkills();
  } else {
    var savedSkillsArray = savedSkills.split(",");

    if(savedSkillsArray.includes(cmbSkills.value)) {
      alert("You already added " + cmbSkills.value + "!");
    } else {
      localStorage.setItem("savedSkills", savedSkills + "," + cmbSkills.value);
      displaySkills();
    }
  }

  displaySkills();
  bindDeleteButtonClickEvents();
}

function lnkChangeNameClick() {
  localStorage.setItem("autoRedirect", false);
  window.location.replace("index.html");
}

function displaySkills() {
  var savedSkills = localStorage.getItem("savedSkills");

  if(savedSkills == null) return false;

  var savedSkillsArray = savedSkills.split(",");
  divPersonSkills.innerHTML = '';

  for(var i=0; i < savedSkillsArray.length; i++) {
    var divContainer = document.createElement("div");
    var spanSkillName = document.createElement("span");
    var deleteButton = document.createElement("button");

    var skillNameToID = savedSkillsArray[i].split(" ").join("-");

    divContainer.setAttribute("id", skillNameToID);
    deleteButton.setAttribute("type", "button");
    deleteButton.setAttribute("data-skill-id", skillNameToID);
    deleteButton.setAttribute("data-skill-name", savedSkillsArray[i]);
    deleteButton.textContent = "X";
    deleteButton.classList.add("btnDeleteButton");

    spanSkillName.innerText = savedSkillsArray[i];

    divContainer.appendChild(spanSkillName);
    divContainer.appendChild(deleteButton);
    divPersonSkills.appendChild(divContainer);
  }
}

function bindDeleteButtonClickEvents() {
  btnDeleteButtons = document.querySelectorAll(".btnDeleteButton");
  for(var i = 0; i < btnDeleteButtons.length; i++) {
    btnDeleteButtons[i].addEventListener("click", btnDeleteClickEvent);
  }
}

function btnDeleteClickEvent() {
  var currentButton = "#" + this.getAttribute("data-skill-id");
  document.querySelector(currentButton).outerHTML = "";

  var savedSkills = localStorage.getItem("savedSkills");
  var savedSkillsArray = savedSkills.split(",");

  var clickedSkillNameID = this.getAttribute("data-skill-id");
  var clickedSkillName = this.getAttribute("data-skill-name");

  var newSavedSkills = "";

  if(savedSkillsArray.length == 1) {
    localStorage.removeItem("savedSkills");
  } else if(savedSkillsArray[savedSkillsArray.length-1] == clickedSkillName) {
    newSavedSkills = savedSkills.replace("," + clickedSkillName, "");
    localStorage.setItem("savedSkills", newSavedSkills);
  } else {
    newSavedSkills = savedSkills.replace(clickedSkillName + ",", "");
    localStorage.setItem("savedSkills", newSavedSkills);
  }
}

function fillCmb(items, element) {
  for(var i=0; i < items.length; i++) {
    var options = document.createElement("option");

    options.text = items[i];
    options.value = items[i];

    element.add(options);
  }
}

fillCmb(skillsList, cmbSkills);
