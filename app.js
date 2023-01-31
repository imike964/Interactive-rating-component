// // document.querySelectorAll("#rate-button").addEventListener("click", setChoice);
// document.getElementById("rate-button-1").addEventListener("click", setChoice);
// document.getElementById("rate-button-2").addEventListener("click", setChoice);
// document.getElementById("rate-button-3").addEventListener("click", setChoice);
// document.getElementById("rate-button-4").addEventListener("click", setChoice);
// document.getElementById("rate-button-5").addEventListener("click", setChoice);

// const buttons = document.querySelectorAll(".button-container button");

// let activeButton = null;
// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     if (activeButton) {
//       activeButton.classList.remove("active-button");
//     }
//     activeButton.classList.add("active-button");
//     activeButton = this;
//     console.log(this);
//   });
// }

const buttons = document.querySelectorAll(".button-container button");
console.log(buttons);
let activeButton = null;

for (let button of buttons) {
  button.addEventListener("click", function (e) {
    if (activeButton) {
      activeButton.classList.remove("active-button");
      activeButton.classList.add("button");
    }
    activeButton = this;
    activeButton.classList.add("active-button");
    activeButton.classList.remove("button");
  });
}
