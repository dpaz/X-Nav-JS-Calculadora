var operando1;

function addNumero(numero){
	
	var operando = document.getElementById("pantalla");
	operando.innerHTML+=numero;
}
function suma(){
	operando1 = document.getElementById("pantalla").innerHTML;
	document.getElementById("pantalla").innerHTML= "";
}

function resultado(){
	var operando2 = document.getElementById("pantalla").innerHTML;
	resultado=(parseInt(operando2,2)+parseInt(operando1,2)).toString(2);
	document.getElementById("pantalla").innerHTML = resultado;
	resultado = "";

}
function borrar(){
	document.getElementById("pantalla").innerHTML = "";
	
}