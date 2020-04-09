import EmblaCarousel from 'embla-carousel'

const emblaNode = document.querySelector('.embla')
const options = { loop: true,
    startIndex: 0    
}
const embla = EmblaCarousel(emblaNode, options)