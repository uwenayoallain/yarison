import gsap from "gsap";

export default function Animation(){

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
    }