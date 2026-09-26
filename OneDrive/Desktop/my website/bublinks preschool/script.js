// Highlight the current page in the navigation
const currentPage =
  window.location.pathname.split("/").pop() || "index.html";

document.querySelectorAll(".nav a").forEach((link) => {
  if (link.getAttribute("href") === currentPage) {
    link.classList.add("active");
  }
});


// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuToggle.setAttribute(
      "aria-expanded",
      isOpen ? "true" : "false"
    );
  });
}


// Enquire Now button
function enquireNow() {
  window.location.href = "admission.html";
}


// Contact button
function contactUs() {
  window.location.href = "contact.html";
}