gsap.registerPlugin(ScrollTrigger);

// ___________________________________________
// Scroll animation
// Nous rencontrons des problèmes pour changer les images random en nos images.
// Nous avons testé plusieurs tutos mais avons besoin de voir avec Mme.Wolfisberg pour améliorer ce détail.
// ___________________________________________

const image = document.querySelector(".steps-animated-image");
const images = [
  "img/step_0001.webp/400/400?=1",
  "https://picsum.photos/400/400?random=1",
  "https://picsum.photos/400/400?random=2",
  "https://picsum.photos/400/400?random=3",
  "https://picsum.photos/400/400?random=4",
  "https://picsum.photos/400/400?random=5",
  "https://picsum.photos/400/400?random=6",
  "https://picsum.photos/400/400?random=7",
  "https://picsum.photos/400/400?random=8",
];

gsap.to(".steps-animated-image", {
  x: () => window.innerWidth - 250,

  scrollTrigger: {
    trigger: ".steps-scroll-section",
    start: "top center",
    end: "bottom center",
    scrub: 1,
    onUpdate: (self) => {
      const progress = self.progress;
      const imageIndex = Math.floor(progress * (images.length - 1));
      image.style.backgroundImage = `url('${images[imageIndex]}')`;
    },
  },
});

// ___________________________________________
// Scroll horizontal
// ___________________________________________

const horizontalScroll = document.querySelector(".scroll-horizontal");
const scrollWidth = horizontalScroll.scrollWidth - window.innerWidth;

gsap.to(horizontalScroll, {
  x: -scrollWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".scroll-container",
    start: "top top",
    end: () => `+=${scrollWidth}`,
    scrub: 1,
    pin: true,
    anticipatePin: 1,
  },
});

// ___________________________________________
// Parallax
// ___________________________________________

gsap.to(".parallax-square-one", {
  y: -250,
  x: -300,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".parallax-square-two", {
  y: -400,
  x: 200,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(".parallax-square-three", {
  y: 400,
  ease: "none",
  scrollTrigger: {
    trigger: ".parallax",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
  },
});
