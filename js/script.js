const PauseBandeira = 3000;


function  slide1 () {


document.getElementById("bandeira").src = "img/brazil.png";

setInterval("slide2()", PauseBandeira);

}

function slide2 () {

document.getElementById("bandeira").src = "img/croatia.jpg";

setInterval("slide3()", PauseBandeira);


}

function slide3() {


document.getElementById("bandeira").src="img/portugal.png";

setInterval("slide1()", PauseBandeira);


}