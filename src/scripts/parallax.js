const parallax = document.querySelectorAll('.parallax')[0];

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

    const rect = parallax.getBoundingClientRect();
    parallax.innerHTML = "ширина = " + rect.width + "<br>";
    parallax.innerHTML += "высота = " + rect.height + "<br>";
    parallax.innerHTML += "сверху = " + rect.top + "<br>";
    parallax.innerHTML += "слева = "  + rect.left + "<br>";
    console.log(rect);
    
    if(wScroll>=2700){

    }
    
});

}