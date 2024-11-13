"use strict";

//get html elements into variables
const mountainDropdown = document.getElementById("mountainDropdown");
const mountainImage = document.getElementById("mountainImage");
const mountainName = document.getElementById("mountainName");
const mountainElevation = document.getElementById("mountainElevation");
const mountainDescription = document.getElementById("mountainDescription");
const mountainCard = document.getElementById("mountainCard");

//create functions to handle user events
function loadMountains() {
  for (const mountain of mountainsArray) {
    let option = document.createElement("option");
    option.textContent = mountain.name;
    option.value = mountain.name;
    mountainDropdown.appendChild(option);
  }
}

function showMountainDetails() {
  const name = mountainDropdown.value;
  if (mountainName) {
    mountainCard.style.display = "block";
  } else {
    mountainCard.style.display = "none";
  }

  for (const mountain of mountainsArray) {
    if (mountain.name == name) {
      mountainImage.src = `./images/${mountain.img}`;
      mountainName.innerText = mountain.name;
      mountainElevation.innerText = mountain.elevation;
      mountainDescription.innerText = mountain.desc;
    }
  }
}

//do stuff when page loads
loadMountains();
