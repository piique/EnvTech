var i = 1
var j = 1
var k = 1
let margem = document.getElementById('corpo')
function Design() {
    if (i == 1) {
        document.getElementById('img1').style.marginTop = "6%"
        document.getElementById('corpo').style.height = "700px"
        document.getElementById('corpo').style.marginBottom = "20%"
        document.getElementById('DesignInt').style.height = "300px"
        document.getElementById('DesignInt').style.transition = ".5s"
        document.getElementById('Design').style.transition = ".8s"
        document.getElementById('Design').style.display = "block"
        i++
    }
    else {
        document.getElementById('img1').style.marginTop = "1.5%"
        document.getElementById('DesignInt').style.height = "200px"
        document.getElementById('corpo').style.marginBottom = "10%"
        document.getElementById('DesignInt').style.transition = ".5s"
        document.getElementById('Design').style.transition = ".5s"
        document.getElementById('Design').style.display = "none"
        i = 1
    }
}

function Modern() {
    if (j == 1) {
        document.getElementById('img2').style.marginTop = "6%"
        document.getElementById('corpo').style.height = "700px"
        document.getElementById('corpo').style.marginBottom = "25%"
        document.getElementById('Modernização').style.height = "300px"
        document.getElementById('Modernização').style.transition = ".5s"
        document.getElementById('Modern').style.transition = ".8s"
        document.getElementById('Modern').style.display = "block"
        j++
    }
    else {
        document.getElementById('img2').style.marginTop = "1.5%"
        document.getElementById('Modernização').style.height = "200px"
        document.getElementById('corpo').style.marginBottom = "10%"
        document.getElementById('Modernização').style.transition = ".5s"
        document.getElementById('Modern').style.transition = ".5s"
        document.getElementById('Modern').style.display = "none"
        j = 1
    }
}

function Amb() {
    if (k == 1) { 
        document.getElementById('img3').style.marginTop = "6.5%"
        document.getElementById('corpo').style.height = "700px"
        document.getElementById('corpo').style.marginBottom = "30%"
        document.getElementById('Ambientação').style.height = "300px"
        document.getElementById('Ambientação').style.transition = ".5s"
        document.getElementById('Ambientation').style.transition = ".8s"
        document.getElementById('Ambientation').style.display = "block"
        document.getElementById('Ambientação').style.marginBottom = "50px"
        k++
    }
    else {
        document.getElementById('img3').style.marginTop = "1.5%"
        document.getElementById('Ambientação').style.height = "200px"
        document.getElementById('corpo').style.marginBottom = "10%"
        document.getElementById('Ambientação').style.transition = ".5s"
        document.getElementById('Ambientation').style.transition = ".5s"
        document.getElementById('Ambientation').style.display = "none"
        k = 1
    }
}