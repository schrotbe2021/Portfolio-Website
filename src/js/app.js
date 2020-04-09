import EmblaCarousel from 'embla-carousel'
import { setUpPrevAndNextBtns } from './prevAndNextButtons'
import { PhoneNumber } from './phoneContact'


const emblaNode = document.querySelector('.embla')
const options = { 
    loop: true,
    speed: 7
}
const prevButton = document.querySelector(".prevButton")
const nextButton = document.querySelector(".nextButton")
const embla = EmblaCarousel(emblaNode, options)

setUpPrevAndNextBtns(prevButton, nextButton, embla)


PhoneNumber()