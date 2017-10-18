btnNext = document.querySelector("#btnNext");
txtName = document.querySelector("#txtName");

btnNext.addEventListener("click", btnNextClick);
window.addEventListener("load", pageLoadEvent);

function pageLoadEvent() {
    varPersonName = localStorage.getItem("personName");
    if(varPersonName !== null) {
      txtName.value = varPersonName;
    }

    if(localStorage.getItem("autoRedirect") == "true") {
      window.location.replace("skills.html");
    }
}

function btnNextClick() {
  if(txtName.value.trim() == "") {
    alert("Please enter a name!");
  } else {
    objDate = new Date();
    sessionStorage.setItem("lastSeen", objDate.toLocaleTimeString());
    localStorage.setItem("personName", txtName.value);
    localStorage.setItem("autoRedirect", true);
    window.location.replace("skills.html");
  }
}
