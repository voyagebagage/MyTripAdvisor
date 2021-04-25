const $ = document;

$.addEventListener("DOMContentLoaded", () => {
  const modal = $.querySelector(".modal");
  const body = $.querySelector("body");
  $.querySelector("#button").addEventListener("click", () => {
    // Display modal
    modal.classList.remove("hidden");
    body.classList.add("disable");
  });
  $.querySelector(".to-website").addEventListener("click", () => {
    // Hide modal
    modal.classList.add("hidden");
    // Enable scroll
    body.classList.remove("disable");
  });
  console.log("Page chargée");

  //   contactForm = $.querySelector("#contactForm").addEventListener;
  //   contactForm.addEventListener("submit", (event) => {
  //     // la fonction preventDefault() annule le comportement par défaut du formulaire (le rafraîchissement de la page)
  //     event.preventDefault();

  //     const data = {
  //       firstName: $.querySelector("#firstname").value,
  //       lastName: $.querySelector("#lastname").value,
  //       email: $.querySelector("#email").value,
  //       subject: $.querySelector("#subject").value,
  //       message: $.querySelector("#message").value,
  //     };

  //   });
});
