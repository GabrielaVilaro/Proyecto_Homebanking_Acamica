
var nombreUsuario = "GabrielaVilaro";
var saldoCuenta = 2900;
var limiteExtraccion = 1500;
var codigoCuenta = "España69";

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();


//Funciones que tenes que completar

var precioDeServicioGas = 350;
var precioDeServicioLuz = 210;
var precioDeServicioInternet = 570;
var precioDeServicioCable = 425;

function sumarDinero(dinero){
            saldoCuenta += dinero; 
        
}

function restarDinero(dinero){
            saldoCuenta -= dinero;
}


function cambiarLimiteDeExtraccion() {
cambiarLimiteDeExtraccion = prompt("Ingrese el nuevo límite de extracción: ");
cambiarLimiteDeExtraccion = parseFloat(cambiarLimiteDeExtraccion);
if (cambiarLimiteDeExtraccion <= 0) {
	alert ("El monto ingresado no es válido.")
}
else{
	limiteExtraccion = parseFloat(cambiarLimiteDeExtraccion);
	actualizarLimiteEnPantalla();
}
}

function extraerDinero(){
dineroExtraido = prompt("Ingrese la cantidad de dinero: ");
dineroExtraido = parseFloat(dineroExtraido);
if (dineroExtraido <= 0) {
	alert("No ha ingresado un monto válido.")
}
else {
	restarDinero(dineroExtraido);
	actualizarSaldoEnPantalla();
}
}

function depositarDinero() {
dineroDepositado = prompt("Ingrese la cantidad de dinero que desea depositar: ");
dineroDepositado = parseFloat(dineroDepositado);

if (dineroDepositado <= 0) {
	alert("No ha ingresado un monto válido. ")
}
else {
	sumarDinero(dineroDepositado);
	actualizarSaldoEnPantalla();

	}

}

function pagoDeServicio(servicio, precioServicio){
	if (saldoCuenta < pagarServicio) {
		alert("\nEl dinero en tu cuenta no es suficiente para realizar esta transacción.");
	}

	else{
		alert ("\nPagaste el servicio: " + servicio +
			"\nTu saldo actual es: " + (saldoCuenta - precioServicio)
			);
		restarDinero(precioServicio);
		actualizarLimiteEnPantalla();

	}
}

function pagarServicio() {

	var servicioAPagar = prompt(
        "Ingrese el número que corresponda con el servicio que quieres pagar:" + "\n" + "\n" +
        "1 - Gas" + "\n" +
        "2 - Luz" + "\n" +
        "3 - Internet" + "\n" +
        "4 - Cable" + "\n"
    );
    if (servicioAPagar == null || servicioAPagar == "") {
        alert("No ingreso ninguna opción.");
    } else {
        servicioAPagar = parseInt(servicioAPagar);
        switch (servicioAPagar) {
            case 1:
                pagoDeServicio("Gas", precioDeServicioAgua);
                break;
            case 2:
                pagoDeServicio("Luz", precioDeServicioLuz);
                break;
            case 3:
                pagoDeServicio("Internet", precioDeServicioInternet);
                break;
            case 4:
                pagoDeServicio("Cable", precioDeServicioTelefono);
                break;
            default:
                alert("El servicio seleccionado no está disponible..");
                break;
        }
    }

}

function transferirDinero() {
	var monto = prompt("Ingrese el monto que desea transferir: ");
	monto = parseInt(monto);
	var numCuenta = prompt("Ingrese el número de cuenta al que desea transferir el dinero: ");
	var numCuenta = parseInt(numCuenta);
	if (numCuenta == null || numCuenta == "") {
		alert ("No ha ingresado un número válido.");
	}
	else{
		alert("Se han transferdio $" + monto + "a la cuenta N° " + numCuenta);
		restarDinero(monto);
		actualizarSaldoEnPantalla();
		}
	}

window.onload(iniciarSesion());

function alertaCodigoIncorrecto(mensaje) {
    alert(mensaje);
    nombreUsuario = "";
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    actualizarNombreEnPantalla("");
}

function iniciarSesion() {
	var coontraseña = prompt("Ingresa tu contraseña: ");
    if (contraseña == null || contraseña == "") {
        alertaCodigoIncorrecto("Usted no ingreso una contraseña válida.");
    } else {
        if (contraseña == codigoCuenta) {
            alert(
                "Bienvenido/a " +
                nombreUsuario +
                " ya puedes comenzar a realizar operaciones."
            );
        } else {
            alertaCodigoIncorrecto(
                "Código incorrecto." + "\n\n" +
                "Tu dinero ha sido retenido por cuestiones de seguridad." + "\n\n"
            );
        }
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
