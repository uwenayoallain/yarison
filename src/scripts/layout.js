import gsap from "gsap";
import barba from "@barba/core";
import Lenis from "@studio-freight/lenis";

export default function Animate() {

    const lenis = new Lenis({
        duration: 1.6,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    })

    //get scroll value
    lenis.on('scroll', ({ scroll, limit, velocity, direction, progress }) => {
        console.log({ scroll, limit, velocity, direction, progress })
    })

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    // function pageTransition() {
    //     gsap.to("#loader", {
    //         display: "block",
    //         top: "-100vh",
    //         duration: 1,
    //     })
    // }
    // function loadTransition() {
    //     gsap.to("#loader", {
    //         display: "none",
    //         duration: 0.5,
    //         delay: 0.5
    //     })
    // }
    // function delay(n) {
    //     n = n || 2000;
    //     return new Promise(done => {
    //         setTimeout(() => {
    //             done()
    //         }, n)
    //     })
    // }

    barba.init({
        transitions: [{
            name: 'opacity-transition',
            leave(data) {
                return gsap.to(data.current.container, {
                    opacity: 0
                });
            },
            enter(data) {
                return gsap.from(data.next.container, {
                    opacity: 0
                });
            }
        }]
    });
}
