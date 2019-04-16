const parallax = document.querySelectorAll('.parallax');

function moveLayersDependsOnScroll(wScroll,layers){

    Array.from(layers).forEach(layer=>{

        const divider = layer.dataset.speed;
        const strafe = wScroll * divider / 10;

        layer.style.transform = `translateY(-${strafe}%)`;
    });
}

const windowWidth = document.body.clientWidth;

if (windowWidth>767){

window.addEventListener('scroll', e=>{
    const wScroll = window.pageYOffset;

    Array.from(parallax).forEach(paral=>{
        moveLayersDependsOnScroll(wScroll,paral.children);
    });

    
});

}