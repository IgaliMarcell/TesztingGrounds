const img = document.getElementById('backImg');
const btn = document.getElementById('backBtn');
let angle = 0;

btn.addEventListener('mouseenter', () => {
    angle = 360;
    img.style.transform = `rotate(${angle}deg)`;
});

btn.addEventListener('mouseleave', () => {
    const st = window.getComputedStyle(img);
    const tr = st.getPropertyValue("transform");

    if (tr !== "none") {
        const values = tr.split('(')[1].split(')')[0].split(',');
        const a = values[0];
        const b = values[1];
        let currentAngle = Math.round(Math.atan2(b, a) * (180/Math.PI));
        if (currentAngle < 0) currentAngle += 360;
        angle = currentAngle;
    }

    img.style.transition = "transform 0.5s ease-out";
    img.style.transform = "rotate(0deg)";

    // reset transition after finishing
    img.addEventListener("transitionend", () => {
        img.style.transition = "transform 1s linear";
        angle = 0;
    },  { once: true });
  });