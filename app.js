//setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());

// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

const formDOM = document.querySelector(".contact-form-js");
const nameInputDOM = document.querySelector(".contact-name");
const emailInputDOM = document.querySelector(".contact-email");
const msgInputDOM = document.querySelector(".contact-msg");

formDOM.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = nameInputDOM.value;
  const email = emailInputDOM.value;
  const msg = msgInputDOM.value;

  try {
    // localhost
    // "http://localhost:5000/api/v1/contact-form";
    // the heroku URL
    // "https://tea-website-backend.herokuapp.com/api/v1/contact-form"
    await axios.post(
      "https://tea-website-backend.herokuapp.com/api/v1/contact-form",
      {
        name,
        email,
        msg,
      }
    );
    nameInputDOM.value = "";
    emailInputDOM.value = "";
    msgInputDOM.value = "";
  } catch (error) {
    console.log(name, email, msg);
    console.log("error");
  }
});
