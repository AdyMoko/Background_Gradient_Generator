var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("button");

setGradient();

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
	css.textContent = body.style.background + ";";
}

function gigi(){
	color1.value = "#" + getRandomHex();	
	setGradient();
	color2.value = "#" + getRandomHex();
	setGradient();
}

let getRandomHex = function(){
    const array = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    let answer = []; 
    for (i=0; i<6; i++) {   
            let result = Math.floor(Math.random() *array.length);  
            let y = array[result];
            answer.push(y);    
    }
    let finalAnswer = answer.toString().replace(/,/g, "");
    return finalAnswer;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", gigi);