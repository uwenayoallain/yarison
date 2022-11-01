import LocomotiveScroll from 'locomotive-scroll';

export default function Animate() {
    new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true
    });
}
