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
  // console.log("Page chargée");

  contactForm = $.querySelector("#contactForm");
  const button = $.querySelector("#send-button");
  const h4 = $.querySelector("h4");

  contactForm.addEventListener("submit", async (event) => {
    // la fonction preventDefault() annule le comportement par défaut du formulaire (le rafraîchissement de la page)
    event.preventDefault();
    //for one send at the time
    button.setAttribute("disabled", "disabled");
    //change the color at the click but not working
    button.classList.add("send-button-disabled");
    console.log("Page chargée");

    const form = {
      firstName: $.querySelector("#firstname").value,
      lastName: $.querySelector("#lastname").value,
      email: $.querySelector("#email").value,
      subject: $.querySelector("#subject").value,
      message: $.querySelector("#message").value,
    };
    console.log(form);

    const response = await axios.get(
      "https://tripadvisor-backend-form.herokuapp.com/",
      form
    );
    console.log(response);
    if (response.status !== 200) {
      alert("n'as pas pu etre envoywrong request, try again");
      button.removeAttribute("disabled");
      button.classList.remove("send-button-disabled");
    } else {
      alert("sent ok :)");
      button.removeAttribute("disabled");
      button.classList.remove("send-button-disabled");
      h4.classList.remove("hidden");
      contactForm.reset();
    }
  });
});
