document.addEventListener('scroll', function() {

    const elementosParallax = document.querySelectorAll('.parallax');

    elementosParallax.forEach(function(elemento) {

        let deslocamento = window.pageXOffset;

        elemento.computedStyleMap.backgroundPositionY = deslocamento * 0.7 + "px";

    })

});