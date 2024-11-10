let imagemBackground = ["img/backvestido.jpg"]
let imagemPrincipal = ["img/vestido.jpg"]


let trocaBackGround=document.querySelectorAll('.fazerTrocaImg')

trocaBackGround.forEach(imagem =>{
    imagem.addEventListener('mouseover', ()=>{
        imagem.src= imagemBackground;
    });

    imagem.addEventListener('mouseout', ()=>{
        imagem.src= imagemPrincipal;
    })
});
