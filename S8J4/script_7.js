let answer = "";

while (answer != "exit") {

	answer = prompt('Parle moi');

	if (/[?]$/.test(answer)) {console.log("Ouais Ouais...");}

	else if (/[a-zA-Z]/.test(answer) && answer.toUpperCase() === answer) {console.log("Pwa, calme-toi...");}

    else if (answer.includes("Fortnite")) {console.log("on s' fait une partie soum-soum ?");}

	else if (answer === "") {console.log("t'es en PLS ?");}

    else console.log("balek.");

}