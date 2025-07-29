// GSAP Animations
gsap.from("#navbar", {
  y: -100,
  duration: 1,
  ease: "power4.out"
});

document.querySelectorAll(".cta-btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, { scale: 1.1, duration: 0.3 });
  });
  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, { scale: 1.0, duration: 0.3 });
  });
});

gsap.utils.toArray(".fade-in").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});
