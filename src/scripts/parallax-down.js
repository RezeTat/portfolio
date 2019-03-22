

const parallaxDown = document.querySelector('.parallax-down');
const layersDown = parallaxDown.children;

if (window.innerWidth >=768){
    console.log(window.innerWidth);

function moveLayersDownDependsOnScroll(wScrollDown){

    Array.from(layersDown).forEach(layerDown=>{

        const dividerDown = layerDown.dataset.speed;
        const strafeDown = wScrollDown * dividerDown / 10;

        layerDown.style.transform = `translateY(-${strafeDown}%)`;
    });
}

window.addEventListener('scroll', e=>{
    const wScrollDown = window.pageYOffset;
    moveLayersDownDependsOnScroll(wScrollDown);

});
}