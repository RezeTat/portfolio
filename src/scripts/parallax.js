const parallax = document.querySelector('.parallax');
const layers = parallax.children;

if (window.innerWidth >=768){
    console.log(window.innerWidth);

function moveLayersDependsOnScroll(wScroll){

    Array.from(layers).forEach(layer=>{

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

window.addEventListener('scroll', e=>{
    const wScroll = window.pageYOffset;
    moveLayersDependsOnScroll(wScroll);

});
}