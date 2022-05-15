const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const botaoDireto = document.getElementById('botaoDireito');
const botaoEsquerdo = document.getElementById('botaoEsquerdo');


let idx=0;


botaoDireto.addEventListener('click', () =>{
    idx++;
    if(idx > img.length-1){
        idx=0;
    }
    imgs.style.transform =  `translateX(${(-idx*100)}px)`;
})

botaoEsquerdo.addEventListener('click', () =>{
    idx--;
    if(idx ==-1 ){
        idx=img.length-1;
    }
   
    imgs.style.transform = `translateX(${(-idx*100)}px)`;
})