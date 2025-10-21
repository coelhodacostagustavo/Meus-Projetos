document.addEventListener('scroll', function() {

    const elementoParallax = document.querySelectorAll('.parallax');

    elementoParallax.forEach(function(elemento) {

        let deslocamento = window.pageXOffset;

        elemento.computedStyleMap.backgroundPositionX = deslocamento * 0.7 + "px";

    })

});