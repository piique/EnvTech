let i = 1
let imagem = document.getElementsByClassName('1')[1]
function next(){
    imagem.innerHTML=document.getElementsByClassName('1')[i+1]
    i++
}