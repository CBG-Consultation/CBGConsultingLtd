// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize animations after window load for better Safari compatibility
window.addEventListener("load", () => {
  // Refresh ScrollTrigger to ensure correct positions
  ScrollTrigger.refresh();
});

// Typewriter effect with blinking cursor
const typewriterElement = document.querySelector("#typewriter");

// Array of words/phrases to cycle through
const phrases = [
  "Scale Faster",
  "Grow Sustainably",
  "Profit More",
];

// Create a timeline for the typewriter effect
function typewriterEffect() {
  const tl = gsap.timeline({
    repeat: -1, // Infinite loop
    repeatDelay: 1 // Pause before starting next phrase
  });

  phrases.forEach((phrase, index) => {
    // Type the phrase
    tl.to(typewriterElement, {
      duration: phrase.length * 0.1, // 0.1 seconds per character
      text: phrase,
      ease: "none",
    })
      // Pause after typing
      .to({}, { duration: 1.5 })
      // Erase the phrase
      .to(typewriterElement, {
        duration: phrase.length * 0.05, // Faster erasing (0.05 seconds per character)
        text: "",
        ease: "none",
      })
      // Pause before next phrase
      .to({}, { duration: 0.5 });
  });

  return tl;
}

// Start the typewriter effect
if (typewriterElement) {
  typewriterEffect();
}

// Hero animation
gsap.from("#hero", {
  opacity: 0,
  y: 20,
  duration: 1.2,
  ease: "power2.out",
  force3D: true
});

// Card animations with ScrollTrigger
const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  // Desktop: Cards slide in from left to right
  gsap.to(".card-animation", {
    scrollTrigger: {
      trigger: ".about-cards",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 1,
    y: 0,
    x: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    force3D: true
  });
});

mm.add("(max-width: 768px)", () => {
  // Mobile: Cards stack and fade/slide up individually
  gsap.utils.toArray(".card-animation").forEach(card => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 90%",
        toggleActions: "play none none none"
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      force3D: true
    });
  });
});

// About Us Logo Animation
gsap.to(".about-logo", {
  scrollTrigger: {
    trigger: ".about-logo",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  x: 0,
  y: 0,
  duration: 1,
  ease: "power2.out",
  force3D: true
});

// Intro Text Animation
gsap.to("#intro-text", {
  scrollTrigger: {
    trigger: "#intro-text",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
  force3D: true
});

// Why Choose Us animation
const whyChooseTl = gsap.timeline({
  scrollTrigger: {
    trigger: "#why-choose-us",
    start: "top 80%",
    toggleActions: "play none none none"
  }
});

whyChooseTl.to(".why-choose-title", {
  opacity: 1,
  y: 0,
  duration: 0.8,
  ease: "power2.out",
  force3D: true
})
  .to(".why-choose-item", {
    opacity: 1,
    x: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: "power2.out",
    force3D: true
  }, "-=0.4");

// Services Section animation - Batched for performance
gsap.to(".services-title", {
  scrollTrigger: {
    trigger: ".services-title",
    start: "top 85%",
    once: true
  },
  opacity: 1,
  y: 0,
  duration: 0.6,
  ease: "power2.out",
});

ScrollTrigger.batch(".service-card", {
  start: "top 90%",
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    force3D: true,
    once: true
  }),
  once: true
});

// Blog Section animation
gsap.to(".blog-title, .blog-subtitle", {
  scrollTrigger: {
    trigger: "#blog",
    start: "top 85%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  stagger: 0.1,
  duration: 0.8,
  ease: "power2.out",
});

ScrollTrigger.batch(".blog-card", {
  start: "top 90%",
  onEnter: batch => gsap.to(batch, {
    opacity: 1,
    y: 0,
    stagger: 0.15,
    duration: 0.8,
    ease: "power2.out",
    force3D: true,
    once: true
  }),
  once: true
});

// Footer Section animation
gsap.to("footer", {
  scrollTrigger: {
    trigger: "footer",
    start: "top 95%",
    toggleActions: "play none none none"
  },
  opacity: 1,
  y: 0,
  duration: 1.2,
  ease: "power2.out",
  force3D: true
});

// Recalculate ScrollTrigger positions on resize
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});

