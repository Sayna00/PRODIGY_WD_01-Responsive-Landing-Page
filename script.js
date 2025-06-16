const navbar = document.getElementById("navbar");

const sections = [
  { id: "home", navbarClass: "navbar-home", sectionClass: "section-home" },
  { id: "about", navbarClass: "navbar-about", sectionClass: "section-about" },
  { id: "projects", navbarClass: "navbar-projects", sectionClass: "section-projects" },
  { id: "contact", navbarClass: "navbar-contact", sectionClass: "section-contact" }
];

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    const sectionTop = el.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  // Navbar color
  navbar.classList.remove(...sections.map(s => s.navbarClass));
  const active = sections.find(s => s.id === currentSection);
  if (active) {
    navbar.classList.add(active.navbarClass);
  }

  // Active menu link
  sections.forEach((section) => {
    const link = document.getElementById(`link-${section.id}`);
    if (section.id === currentSection) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Section background colors
  sections.forEach((section) => {
    const el = document.getElementById(section.id);
    el.classList.remove(...sections.map(s => s.sectionClass));
    if (section.id === currentSection) {
      el.classList.add(section.sectionClass);
    }
  });
});
