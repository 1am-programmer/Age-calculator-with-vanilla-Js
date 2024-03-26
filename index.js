//Button
var mainButton = document.querySelector("#addButton");

//Input
let dateInput = document.querySelector("#dayInput");
let monthInput = document.querySelector("#monthInput");
let yearInput = document.querySelector("#yearInput");

mainButton.addEventListener("click", getAge);

function getAge() {
  let yearInputValue = yearInput.value;
  let monthInputValue = monthInput.value;
  let dateInputValue = dateInput.value;

  let birthDate = new Date(yearInputValue, monthInputValue - 1, dateInputValue);

  let currentDate = new Date();

  let diff = currentDate - birthDate;

  // let year = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
  // let month = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
  // let day = Math.floor(diff / (1000 * 60 * 60 * 24));
  let year, month, day, hour, minute, second;

  second = Math.floor(diff / 1000);
  minute = Math.floor(second / 60);
  second = second % 60;
  hour = Math.floor(minute / 60);
  minute = minute % 60;
  day = Math.floor(hour / 24);
  hour = hour % 24;
  month = Math.floor(day / 30);
  day = day % 30;
  year = Math.floor(month / 12);
  month = month % 12;

  document.querySelector(
    "#res"
  ).innerHTML = `${year} Years ${month} Months ${day} Days`;
}
