"use strict";

const nationalParks = [
  { name: "Yellowstone", location: "Wyoming", type: "National Park" },
  { name: "Yosemite", location: "California", type: "National Park" },
  { name: "Grand Canyon", location: "Arizona", type: "National Park" },
  { name: "Acadia", location: "Maine", type: "National Park" },
  { name: "Zion", location: "Utah", type: "National Park" },
  { name: "Everglades", location: "Florida", type: "Wetlands Reserve" },
  { name: "Gateway Arch", location: "Missouri", type: "National Memorial" },
  { name: "Denali", location: "Alaska", type: "National Park" },
  { name: "Rocky Mountain", location: "Colorado", type: "National Park" },
  { name: "Great Smoky Mountains", location: "Tennessee", type: "National Park" },
  { name: "Glacier", location: "Montana", type: "National Park" },
  { name: "Sequoia", location: "California", type: "National Park" },
  { name: "Joshua Tree", location: "California", type: "National Park" },
  { name: "Olympic", location: "Washington", type: "National Park" },
  { name: "Arches", location: "Utah", type: "National Park" },
  { name: "Bryce Canyon", location: "Utah", type: "National Park" },
  { name: "Death Valley", location: "California", type: "National Park" },
  { name: "Mount Rainier", location: "Washington", type: "National Park" },
  { name: "Shenandoah", location: "Virginia", type: "National Park" },
  { name: "Hawai'i Volcanoes", location: "Hawaii", type: "National Park" },
  { name: "Big Bend", location: "Texas", type: "National Park" },
  { name: "Badlands", location: "South Dakota", type: "National Park" },
  { name: "Grand Teton", location: "Wyoming", type: "National Park" },
  { name: "Carlsbad Caverns", location: "New Mexico", type: "National Park" },
  { name: "Mammoth Cave", location: "Kentucky", type: "National Park" },
  { name: "Pinnacles", location: "California", type: "National Park" },
  { name: "Saguaro", location: "Arizona", type: "National Park" },
  { name: "Canyonlands", location: "Utah", type: "National Park" },
  { name: "Kings Canyon", location: "California", type: "National Park" },
  { name: "Mesa Verde", location: "Colorado", type: "National Park" },
  { name: "Capitol Reef", location: "Utah", type: "National Park" },
  { name: "Petrified Forest", location: "Arizona", type: "National Park" },
  { name: "Isle Royale", location: "Michigan", type: "National Park" },
  { name: "Voyageurs", location: "Minnesota", type: "National Park" },
  { name: "North Cascades", location: "Washington", type: "National Park" },
  { name: "Great Sand Dunes", location: "Colorado", type: "National Park" },
  { name: "Channel Islands", location: "California", type: "National Park" },
  { name: "Biscayne", location: "Florida", type: "Marine Park" },
  { name: "Cuyahoga Valley", location: "Ohio", type: "National Park" },
  { name: "Indiana Dunes", location: "Indiana", type: "National Park" },
  { name: "White Sands", location: "New Mexico", type: "National Park" },
  { name: "Katmai", location: "Alaska", type: "National Park" },
  { name: "Wrangell-St. Elias", location: "Alaska", type: "National Park" },
  { name: "Kenai Fjords", location: "Alaska", type: "National Park" },
  { name: "Glacier Bay", location: "Alaska", type: "National Park" },
  { name: "Dry Tortugas", location: "Florida", type: "Marine Park" },
  { name: "Haleakalā", location: "Hawaii", type: "National Park" },
];

const stateDropdown = document.getElementById("stateDropdown");
const parkDropdown = document.getElementById("parkDropdown");
const parkTableBody = document.getElementById("parkTbody");

function loadparks() {
  for (const park of nationalParks) {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    nameCell.innerText = park.name;
    row.appendChild(nameCell);
    const stateCell = document.createElement("td");
    stateCell.innerText = park.location;
    row.appendChild(stateCell)

    parkTableBody.appendChild(row);
  }
  console.log(stateDropdown, parkDropdown, parkTableBody);
}
loadparks();
// function populateDropdown(dropdown, filterType) {
//   dropdown.innerHTML = '<option value="">Select...</option>';
//   const values = new Set(nationalParks.map((park) => park[filterType]));
//   values.forEach((value) => {
//     const option = document.createElement("option");
//     option.value = value;
//     option.textContent = value;
//     dropdown.appendChild(option);
//   });
// }
