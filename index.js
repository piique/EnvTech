let margem = -1040
let i = 0;
function next(){
    if(i<2){
    i++;
    let margemf = margem*i+'px'
    document.getElementById('slide').style.transition = ".6s"
    document.getElementById('slide').style.marginLeft = margemf
    }
    else{
    document.getElementById('slide').style.transition = ".6s"
    document.getElementById('slide').style.marginLeft = "0px"
    i = 0
    }
}