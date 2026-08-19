// ===== Portfolio scripts: filters, lightbox =====

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Gallery filters =====
const filterButtons = document.querySelectorAll(".filter-btn");
const builds = document.querySelectorAll(".build");

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    builds.forEach((build) => {
      const show = filter === "all" || build.dataset.category === filter;
      build.style.display = show ? "" : "none";
    });
  });
});

// ===== Lightbox =====
const lightbox = document.getElementById("lightbox");
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