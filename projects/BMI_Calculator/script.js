const form = document.querySelector("form");
//This  usecase gives empty
//const height = parseInt(document.querySelector("#height").value);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Get the value in integer from input field
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#result");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please enter valid Height ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please enter valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi <= 18.6) {
      result.innerHTML = `<span>${bmi} UnderWeight</span>`;
      result.style.color = "yellow";
    } else if (bmi > 18.6 && bmi < 24.9) {
      result.innerHTML = `<span>${bmi} Normal</span>`;
      result.style.color = "green";
    } else {
      result.innerHTML = `<span>${bmi} Over Weight Fat Obbessed</span>`;
      result.style.color = "red";
    }
  }
});
