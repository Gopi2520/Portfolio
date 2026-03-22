var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");
function opentab(tabName) {
  for (tabLink of tabLinks) {
    tabLink.classList.remove("active-link");
  }
  for (tabContent of tabContents) {
    tabContent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
}
var sidemenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
const scriptURL =
  "https://script.google.com/macros/s/AKfycbyk3m8AZY18JnGLWfforeaOeNK_ARdrMZOrmR1m_kermxzoU6eRJFzhZ8f_YbkIp-Idww/exec";
const form = document.forms["contact_form"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loading.style.display = "block";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => response.json())
    .then((response) => {
      loading.style.display = "none";
      msg.innerHTML = "Message sent successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 7000);
      form.reset();
    })
    .catch((error) => {
      console.error("Error!", error.message);
      msg.innerHTML = "Something went wrong....please try again!";
      console.error("Error!", error.message);
    });
});
