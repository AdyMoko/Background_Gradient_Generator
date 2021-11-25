const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");
const button = document.getElementById("button");

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

function randomize(){
	color1.value = getRandomHex();	
	setGradient();
	color2.value = getRandomHex();
	setGradient();
	button.style.background= 
	"linear-gradient(to bottom right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
}

let getRandomHex = function(){
    const array = [1,2,3,4,5,6,7,8,9,"A", "B", "C", "D", "E", "F"];
    let answer = []; 
    for (i=0; i<6; i++) {   
            let result = Math.floor(Math.random() *array.length);  
            let y = array[result];
            answer.push(y);    
    }
    let finalAnswer = "#" + (answer.toString().replace(/,/g, ""));
    return finalAnswer;
}


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", randomize);