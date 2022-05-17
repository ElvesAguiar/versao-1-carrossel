const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const botaoDireto = document.getElementById('botaoDireito');
const botaoEsquerdo = document.getElementById('botaoEsquerdo');

let carrosel =true;
let widthCarrosel=20;
let widthCarroselLarge=50;

let idx=0;


botaoDireto.addEventListener('click', () =>{
    idx++;
    console.log(imgs.clientWidth);
    console.log(idx);
    if (imgs.clientWidth==2000){
        carrosel=false;
    }else{
        carrosel=true; 
    }

    if (carrosel==true){
   
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*widthCarrosel)}rem)`;
    }else{
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*widthCarroselLarge)}rem)`;
    }
})


botaoEsquerdo.addEventListener('click', () =>{
   
    idx--;
    
    if (imgs.clientWidth==2000){
        carrosel=false;
    }else{
        carrosel=true; 
    }
    
    
    
    if (carrosel==true){
        if(idx ==-1 ){
            idx=img.length-1;
        }
    
        imgs.style.transform = `translateX(${(-idx*widthCarrosel)}rem)`;
    }else{
        if(idx ==-1 ){
            idx=img.length-1;
        }
    
        imgs.style.transform = `translateX(${(-idx*widthCarroselLarge)}rem)`;
    }
})

function functionCarrosel(){
 
    idx++;
    if (imgs.clientWidth==2000){
        carrosel=false;
    }else{
        carrosel=true; 
    }

    if (carrosel==true){
   
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*widthCarrosel)}rem)`;
    }else{
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*widthCarroselLarge)}rem)`;
    }
}

setInterval(functionCarrosel,5000)
