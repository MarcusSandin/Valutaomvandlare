
const inputOne = document.querySelector("#curInput1");
const inputTwo = document.querySelector("#curInput2");

const dropdownOne = document.querySelector("#curDropdown1");
const dropdownTwo = document.querySelector("#curDropdown2");

const curDropdownOne = document.querySelector('#curDropdown1');
const curDropdownTwo = document.querySelector('#curDropdown2');

const selectBuyOrSell = document.querySelector('#selectBuyOrSell');
const orderBtn = document.querySelector("#orderBtn");
const buyText = document.querySelector("#buyText");

async function RunApplication() {
  await AddRatesToDropdown();
}
RunApplication();
