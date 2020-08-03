function cumprimentar(){
    alert("Olá");
}
function trocaFundo(){
    document.getElementById("pagina").style.backgroundColor = "green";
}
function estouVendo(event){
    var x = event.clientX;
    var y = event.clientY;
    var coords = "coordenada X: " + x + ", coordenada Y: " + y;
    console.log(coords);
    // alert(coords);
}
function clickFoto (){
    document.getElementById("starwars").addEventListener("click",function(){
        console.log("estou clicando na imagem");
    })
}
function btnFail (){
     
    alert("Não é possível enviar");    
}
function time10seg (callback){
    setTimeout(function(){   
        alert("Tempo Esgotado!");
        callback();    
    },10000);
}
function intervalo(){
    setInterval(() => {
        alert("hora do intervalo");
    }, 5000);
}

time10seg(intervalo);



