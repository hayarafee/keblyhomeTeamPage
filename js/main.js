let myText = " Have A Look At Our Team & Inspire From Them",
i=0;

window.onload = ()=>{

let typeWriter = setInterval(  ()=> {
    

    document.getElementById("text").textContent += myText[i];
    i=i+1;
    if (i > myText.length -1 ){
        clearInterval(typeWriter);
    }
},100);

}

