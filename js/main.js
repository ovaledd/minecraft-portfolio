// ===== Portfolio scripts =====

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ===== Navbar: scrolled state + active link =====
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = [...navLinks]
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-40% 0px -55% 0px" }
);

sections.forEach((section) => navObserver.observe(section));

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 10);
});

// ===== Back to top =====
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 600);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxCount = document.getElementById("lightboxCount");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");
const builds = [...document.querySelectorAll(".build")];

let currentIndex = 0;

function showLightbox(index) {
  currentIndex = (index + builds.length) % builds.length;
  const build = builds[currentIndex];
  const img = build.querySelector("img");
  const caption = build.querySelector("figcaption");
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption ? caption.textContent : "";
  lightboxCount.textContent = `${currentIndex + 1} / ${builds.length}`;
}

function openLightbox(index) {
  showLightbox(index);
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

builds.forEach((build, index) => {
  build.addEventListener("click", () => openLightbox(index));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrev.addEventListener("click", () => showLightbox(currentIndex - 1));
lightboxNext.addEventListener("click", () => showLightbox(currentIndex + 1));

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") showLightbox(currentIndex - 1);
  if (e.key === "ArrowRight") showLightbox(currentIndex + 1);
});