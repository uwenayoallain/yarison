import gsap, { random } from "gsap";

export default function Animate() {
  const elements = document.querySelectorAll(".cursor-hover");
  elements.forEach((element) => {

    element.addEventListener("mouseenter", () => {
      gsap.set(".cursor", { opacity: 1, delay: 0.3 });
      element.addEventListener("mousemove", (e) => {
        const mouse = { x: e.pageX, y: e.pageY };
        const pos = {
          x: mouse.x,
          y: mouse.y,
        };
        gsap.set(".cursor", pos);
      });
    });
    element.addEventListener("mouseleave", () => {
      gsap.to(".cursor", { opacity: 0, duration: 0.1 });
    });
  })

  gsap.to(".bar", {
    height: "random(30, 100)",
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.easeIn",
    repeat: Infinity,
    yoyo: true,
  });
  gsap.to(".verticle", {
    y: "random(50,100)" + "px",
    duration: 0.8,
    stagger: 0.2,
    ease: "power2.easeIn",
    repeat: Infinity,
    yoyo: true,
  });
}
