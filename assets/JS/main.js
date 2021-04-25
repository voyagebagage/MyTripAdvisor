const $ = document;
// $.addEventListener("click", () => {
//   console.log("Click !!!");
// });
$.addEventListener("DOMContentLoaded", () => {
  console.log("Page chargée");

  $.querySelector("#button").addEventListener("click", () => {
    $.querySelector(".masked").classList.add("show");
  });
});
