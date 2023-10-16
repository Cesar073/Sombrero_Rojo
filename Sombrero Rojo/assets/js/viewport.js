
function update_viewport_size(){
    // Obtén el ancho del viewport y asigna el valor a la variable CSS
    const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    document.documentElement.style.setProperty('--w-viewport-px', `${viewportWidth}px`);
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    document.documentElement.style.setProperty('--h-viewport-px', `${viewportHeight}px`);
}

window.addEventListener('load', update_viewport_size);
window.addEventListener('resize', update_viewport_size);