const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");
const botaoDireto = document.getElementById('botaoDireito');
const botaoEsquerdo = document.getElementById('botaoEsquerdo');

let carrosel =true;


let idx=0;


botaoDireto.addEventListener('click', () =>{
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
        imgs.style.transform =  `translateX(${(-idx*25)}rem)`;
    }else{
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*50)}rem)`;
    }
})


botaoEsquerdo.addEventListener('click', () =>{
   
    idx--;
    console.log(idx);
    
    if (imgs.clientWidth==2000){
        carrosel=false;
    }else{
        carrosel=true; 
    }
    
    
    
    if (carrosel==true){
        if(idx ==-1 ){
            idx=img.length-1;
        }
    
        imgs.style.transform = `translateX(${(-idx*25)}rem)`;
    }else{
        if(idx ==-1 ){
            idx=img.length-1;
        }
    
        imgs.style.transform = `translateX(${(-idx*50)}rem)`;
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
        imgs.style.transform =  `translateX(${(-idx*25)}rem)`;
    }else{
        if(idx > img.length-1){
            idx=0;
        }
        imgs.style.transform =  `translateX(${(-idx*50)}rem)`;
    }
}

setInterval(functionCarrosel,5000)
