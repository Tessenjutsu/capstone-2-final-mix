// Select elements
const locationDropdown = document.getElementById("locationDropdown");
const parkTypeDropdown = document.getElementById("parkTypeDropdown");
const parkTBody = document.getElementById("parkTBody");

function loadparks() {
  for (const park of nationalParksArray) {
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
loadparks();

function loadtypes() {
  for (const park of parkTypesArray) {
    const row = document.createElement("tr");
    const typeCell = document.createElement("td")
    typeCell.innerText = park.Type 
    row.appendChild(row)
  }
}
