const inputEl = document.querySelector("#input-el");
const convertBtn = document.querySelector("#convert-btn");
const lengthEl = document.querySelector("#length-el");
const volumeEl = document.querySelector("#volume-el");
const massEl = document.querySelector("#mass-el");

// Step1

convertBtn.addEventListener("click", () => {
  let value = Number(inputEl.value);
  if (inputEl.value === "") {
    alert("Please input a number");
  } else {
    renderUnits(lengthEl, value, "meter", "foot", 3.281);
    renderUnits(volumeEl, value, "liter", "gallon", 0.264);
    renderUnits(massEl, value, "kilogram", "pounds", 2.204);
  }
});
function renderUnits(el, value, unit1, unit2, rate) {
  let convertMulti = (value * rate).toFixed(3);
  let convertDivide = (value / rate).toFixed(3);

  el.innerHTML = `
  <p>${value} ${unit1} = ${convertMulti} ${unit2} | ${value} ${unit2} = ${convertDivide} ${unit1}</p>`;
}
