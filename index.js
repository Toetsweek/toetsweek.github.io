const logo = document.querySelector('#logo');

document.addEventListener('mousemove', (e) => {
    // the logo can only move 10 % of the window width in the x direction
    const x = e.clientX / window.innerWidth * 10;
    // the logo can only move 10 % of the window height in the y direction
    const y = e.clientY / window.innerHeight * 10;
    // the logo can only rotate 15 degrees in the x direction
    const rotateX = e.clientY / window.innerHeight * 15;

    // apply the transform to the logo
    logo.style.transform = `translateX(${x}%) translateY(${y}%) rotateX(${rotateX}deg)`;
});