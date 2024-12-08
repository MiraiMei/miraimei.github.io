document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.card-carousel-container');
    const leftArrow = document.querySelector('.arrow--left');
    const rightArrow = document.querySelector('.arrow--right');

    const cardWidth = carousel.querySelector('.card').offsetWidth;

    rightArrow.addEventListener('click', function() {
        // Scroll the carousel to the right smoothly
        carousel.scrollTo({
            left: carousel.scrollLeft + cardWidth,
            behavior: 'smooth'
        });
    });

    leftArrow.addEventListener('click', function() {
        // Scroll the carousel to the left smoothly
        carousel.scrollTo({
            left: carousel.scrollLeft - cardWidth,
            behavior: 'smooth'
        });
    });
});



//navbar toggler
const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);




//smooth scrolling for the links in the same page


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



