let movX;
let movY;
let pX;
let pY;

document.addEventListener('mousemove',function(a){
movX = a.screenX;
movY = a.screenY;
pX = a.pageX;
pY = a.pageY;
document.getElementById('raton').innerHTML= "Navegador" +"[ " +movX + "," + movY +"]";
document.getElementById('raton2').innerHTML= "Pagina" +"[ " +pX + "," + pY +"]";
})

let x;
let c;
document.addEventListener('keypress', function(b){
x = b.key 
c = b.charCode
document.getElementById('teclado').innerHTML= "Caracter" +"[ " +x + "]";
document.getElementById('teclado2').innerHTML= "Codigo" +"[ " +c + "]";
})