// Select elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const parkTBody = document.getElementById("parkTBody");

function loadParks() { 
  parkTBody.innerHTML = ""
  let filteredNationalParksArray = nationalParksArray

  let selectedLocationName = locationDropdown.value; 
  if (selectedLocationName) {
    parkTypeDropdown.value = ""
    filteredNationalParksArray = nationalParksArray.filter((park)=> park.State == selectedLocationName)
  }

  let selectedParkType = parkTypeDropdown.value; 
  
  if (selectedParkType) {
    locationDropdown.value = ""
    filteredNationalParksArray = nationalParksArray.filter((park)=> park.LocationName.includes(selectedParkType))
  }

  for (const park of filteredNationalParksArray) {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.innerText = park.LocationName;
    row.appendChild(nameCell);

    const addressCell = document.createElement("td");
    addressCell.innerText = park.Address;
    row.appendChild(addressCell);

    const cityCell = document.createElement("td");
    cityCell.innerText = park.City;
    row.appendChild(cityCell);

    const stateCell = document.createElement("td");
    stateCell.innerText = park.State;
    row.appendChild(stateCell);

    const zipCell = document.createElement("td");
    zipCell.innerText = park.Zip;
    row.appendChild(zipCell);

    const phoneCell = document.createElement("td");
    phoneCell.innerText = park.Phone;
    row.appendChild(phoneCell);

    const websiteCell = document.createElement("td");
    websiteCell.innerText = park.Website;
    row.appendChild(websiteCell);

    parkTBody.appendChild(row);
  }
  console.log(locationDropdown, parkTypeDropdown, parkTBody);
}
loadParks();

function getParkTypes() {

  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.innerText = park;
    parkTypeDropdown.appendChild(option);
  }
}

getParkTypes();

function getStates (){
  for (const park of locationsArray){
    let option = document.createElement("option")
    option.value = park;
    option.innerText = park;
    locationDropdown.appendChild(option);
  }
}

getStates();

