let mensajeInicial = "Audiciones 'DanzArte'.\nPor favor indicanos a que área vienes a audicionar:\n1- Folklore\n2 - Jazz\n3 - Contemporaneo\n4 - Urbano\n\n0 - Me arrepentí de Audicionar"
let opcion
let tiempoEspera
let nombreIngresado
let numeroTurno

function saludar() {
    nombreIngresado = prompt("Por favor ingrese su nombre")
    if (nombreIngresado.trim() === ""){
        alert("Ingrese un nombre válido")
        saludar()
    } else{
        alert("Bienvenido a DanzArte " + nombreIngresado + "\nTe invitamos a que te informes cuanto tiempo tendrás que esperar para audicionar")
        
    }
}

function menuPrincipal(){
    do {
        opcion = prompt(mensajeInicial)
            if (opcion == 1) {
                esperaAudicion(3, numeroTurno)
                cierre()
            } else if (opcion == 2) {
                esperaAudicion(2, numeroTurno)
                cierre()
            } else if (opcion == 3) {
                esperaAudicion(7, numeroTurno)
                cierre()
            } else if (opcion == 4) {
                esperaAudicion(4, numeroTurno)
                cierre()
            } else if (opcion == 0) {
                noAudiciona()
                break
            } else {
                alert("Por favor ingrese una opción del menú")
            }
    } while (opcion < 0 || opcion > 4) 
}

function noAudiciona() {
    alert("Entendido " + nombreIngresado + "\nEsperamos verte en otra oportunidad audicionando para nosotros, ¡EXITO!")
}
function cierre() {
    alert("Gracias " + nombreIngresado + "\n Atento al llamado de la sala de Danza por tu nombre")
}

function esperaAudicion(tiempoEsperaArea, lugarTurno) {
    let tiempoEspera = tiempoEsperaArea * lugarTurno
    alert("Tu turno para presentarte será en " + tiempoEspera + " minutos")

} 

saludar()
do {
    numeroTurno = parseInt(prompt("Ingrese el numero de turno que le tocó"))
} while (isNaN(numeroTurno))
menuPrincipal() 