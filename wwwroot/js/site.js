// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("animatedHeader");
    let hue = 0;

    function animateHeaderColor() {
        hue = (hue + 1) % 360;
        header.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
        requestAnimationFrame(animateHeaderColor);
    }

    animateHeaderColor();
});
