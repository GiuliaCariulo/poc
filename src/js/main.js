gsap.registerPlugin(ScrollTrigger);

const image = document.querySelector(".animated-image");

const images = [
  "img/step_0000.webp=1",
  "img/step_0001.webp=2",
  "img/step_0002.webp=3",
  "img/step_0003.webp",
  "img/step_0004.webp",
  "img/step_0005.webp",
  "img/step_0006.webp",
  "img/step_0007.webp",
  "img/step_0008.webp",
  "img/step_0009.webp",
  "img/step_0010.webp",
  "img/step_0011.webp",
  "img/step_0012.webp",
];

gsap.to(".animated-image", {
  x: () => window.innerWidth - 250,

  scrollTrigger: {
    trigger: ".scroll-section",
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
