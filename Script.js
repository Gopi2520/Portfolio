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
      alert("I got your message" + "\n" + "Thank you for Visiting !!");
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

// Toggle See More / Show Less
const seeMoreBtn = document.getElementById("seeMoreBtn");

if (seeMoreBtn) {
  seeMoreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    const hiddenProjects = document.querySelectorAll(".hidden-project");

    if (this.textContent === "See More") {
      // Show hidden projects
      hiddenProjects.forEach((project) => {
        project.style.display = "block";
      });
      this.textContent = "Show Less";
    } else {
      // Hide projects again
      hiddenProjects.forEach((project) => {
        project.style.display = "none";
      });
      this.textContent = "See More";
    }
  });
}
