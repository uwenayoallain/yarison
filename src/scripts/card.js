import gsap from "gsap";

export default function Animation() {
    const elements = document.querySelectorAll(".card");
    const cursor = document.querySelector(".cursor-image");
    elements.forEach((element,key) => {
        const cardTitles = document.querySelectorAll(".card-title");
        console.table(cardTitles, key)
        // const title = cardTitles[elements.indexOf(element)];
        element.addEventListener("mouseenter", () => {
            gsap.to(cursor, { opacity: 1, delay: 0.1, duration: 0.1 });
            // gsap.to(title, { opacity: 1, delay: 0.1, duration: 0.1 });
            element.addEventListener("mousemove", (e) => {
                const mouse = { x: e.pageX, y: e.pageY };
                const pos = {
                    x: mouse.x - cursor.offsetWidth / 2,
                    y: mouse.y - cursor.offsetHeight / 2,
                };

                cursor.style.transform = `translate(${pos.x}px,${pos.y}px)`;
            });
        });
        element.addEventListener("mouseleave", () => {
            gsap.to(cursor, { opacity: 0, delay: 0.1, duration: 0.1 });
            // gsap.to(title, { opacity: 0, delay: 0.1, duration: 0.1 });
        });
    })
}