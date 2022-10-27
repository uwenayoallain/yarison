import gsap from "gsap";

export default function Animate() {
  function followCursor() {
    // const cursor = document.getElementsByClassName("cursor")[0];
    window.addEventListener("mousemove", (e) => {
      const mouse = { x: e.pageX, y: e.pageY };
      const pos = {
        x: mouse.x,
        y: mouse.y,
      };
      gsap.set(".cursor", pos);
    });
  }

  const element = document.querySelector(".cursor-hover");
  element.addEventListener("mouseenter", () => {
    gsap.set(".cursor", { opacity: 1 });
    followCursor();
  });
  element.addEventListener("mouseleave", () => {
    gsap.to(".cursor", { opacity: 0, duration: 0.1 });
  });

  for (x = 0; x < 10; x++) {
    const div = document.createElement("div");
    document.getElementById("animation-wrapper").appendChild(div);
  }
}
