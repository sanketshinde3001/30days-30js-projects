let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("back");
let nextBtn = document.getElementById("next");

scrollContainer.addEventListener("wheel", (event) => {
    event.preventDefault();
    scrollContainer.scrollLeft += event.deltaY;
    scrollContainer.computedStyleMap.scrollBehavior='auto';

});

nextBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
    scrollContainer.style.scrollBehavior='smooth';
    scrollContainer.scrollLeft -= 900;
});