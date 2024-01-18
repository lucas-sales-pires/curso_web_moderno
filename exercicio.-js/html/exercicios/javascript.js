
function mover(elemento, inicio, fim, passo, callback) {
    const novoInicio = inicio - passo
    if (novoInicio >= fim) {
        elemento.style.left = novoInicio + "px"
        setTimeout(() => mover(elemento, novoInicio, fim, passo, callback), 7)
    }
    else{
        callback()
    }
}
// let fotos = document.querySelector("[wm-slider] p ")
// fotos.style.display = "block"
// mover(fotos, 1500, -520, 5, () => {

// })
function slider() {
    const elementos = document.querySelectorAll("[wm-slider] p")
    const slides = Array.from(elementos)
    exibirSlide(slides, slides[0])
}
function exibirSlide(slides, slide) {
    slide.style.display = "block"

    const inicio = innerWidth
    const fim = -slide.clientWidth

    slide.style.left = `${inicio}px`

    mover(slide, inicio, fim, 5, () => {
        slide.style.display = "none"
        exibirSlide(slides, getProximo(slides, slide))
    })
}
function getProximo(lista, atual) {
    const i = lista.indexOf(atual) + 1
    return i < lista.length ? lista[i] : lista[0]
}

slider()
