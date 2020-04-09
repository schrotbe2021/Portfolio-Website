export const setUpPrevAndNextBtns = (prevButton, nextButton, embla) => {
    prevButton.addEventListener('click', embla.scrollPrev, false)
    nextButton.addEventListener('click', embla.scrollNext, false)
}