// ===== Portfolio scripts: lightbox =====

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
const builds = document.querySelectorAll(".build");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");

function openLightbox(build) {
  const img = build.querySelector("img");
  const caption = build.querySelector("figcaption");
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCaption.textContent = caption ? caption.textContent : "";
  lightbox.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.classList.remove("open");
  document.body.style.overflow = "";
}

builds.forEach((build) => {
  build.addEventListener("click", () => openLightbox(build));
});

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLightbox();
});