import LocomotiveScroll from 'locomotive-scroll';
import gsap from "gsap";
import barba from "@barba/core";

export default function Animate() {
    new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
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
