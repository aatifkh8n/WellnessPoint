//Get the button
let backToTop = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
backToTop.addEventListener("click", goBackToTop);

function goBackToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}