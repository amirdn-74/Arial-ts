const carousel = document.querySelector(".carousel__list");
const items = Array.from(carousel.children);
const nextBtn = document.querySelector(".carousel__button.button--right");
const prevBtn = document.querySelector(".carousel__button.button--left");
const indicatorsList = document.querySelector(".carousel__indicators");
const indicators = Array.from(indicatorsList.children);
const homeProposal = document.querySelector(".home-proposal");

const slideActiveClass = "carousel__item--active";
const indicatorActiveClass = "carousel__indicator--active";

const getCurrentSlide = () => {
  return carousel.querySelector(`.${slideActiveClass}`);
};

// iteration
let iteration;

const startInterval = () => {
  iteration = setInterval(() => {
    const currentSlide = getCurrentSlide();
    const nextSlide = currentSlide.nextElementSibling;

    goToNextSlide(currentSlide, nextSlide);
  }, 5000);
};

function goToNextSlide(currentSlide, nextSlide) {
  clearInterval(iteration);

  const currentIndex = items.findIndex((i) => i === currentSlide);
  let nextIndex = items.findIndex((i) => i === nextSlide);
  const lastIndex = items.length - 1;

  if (!nextSlide) {
    if (currentIndex === 0) {
      nextIndex = lastIndex;
      nextSlide = items[nextIndex];
    }
    if (currentIndex === lastIndex) {
      nextIndex = 0;
      nextSlide = items[nextIndex];
    }
  }

  currentSlide.classList.remove(slideActiveClass);
  nextSlide.classList.add(slideActiveClass);

  const nextSlideImage = nextSlide.querySelector(".carousel__item__image").src;
  homeProposal.style.backgroundImage = `url(${nextSlideImage})`;

  indicators[currentIndex].classList.remove(indicatorActiveClass);
  indicators[nextIndex].classList.add(indicatorActiveClass);

  startInterval();
}

// go next
nextBtn.addEventListener("click", () => {
  const currentSlide = getCurrentSlide();
  const nextSlide = currentSlide.nextElementSibling;

  goToNextSlide(currentSlide, nextSlide);
});

// go prev
prevBtn.addEventListener("click", () => {
  const currentSlide = getCurrentSlide();
  const nextSlide = currentSlide.previousElementSibling;

  goToNextSlide(currentSlide, nextSlide);
});

// indicators functionality
indicatorsList.addEventListener("click", (e) => {
  const target = e.target.closest("li");

  if (!target) return;

  const nextIndex = indicators.findIndex((i) => i === target);
  const currentSlide = getCurrentSlide();
  const nextSlide = items[nextIndex];

  goToNextSlide(currentSlide, nextSlide);
});

startInterval();
