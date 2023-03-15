function saludar() {
    alert("Bienvenido a DanzArte " + nombre + "\nTe invitamos a que te informes cuanto tiempo tendrás que esperar para audicionar")
}
function despedirse() {
    alert("Entendido " + nombre + "\nEsperamos verte en otra oportunidad audicionando para nosotros, ¡EXITO!")
}

function esperaAudicion(tiempoEsperaArea, lugarTurno) {
    let tiempoEspera = tiempoEsperaArea * lugarTurno
    alert("Tu turno para presentarte será en " + tiempoEspera + " minutos")

}
let nombre = prompt("Por favor ingrese su nombre")
saludar()
let mensajeInicial = "Audiciones 'DanzArte'.\nPor favor indicanos a que área vienes a audicionar:\n1- Folklore\n2 - Jazz\n3 - Contemporaneo\n4 - Urbano\n\n0 - No tengo turno ni quiero audicionar"
let opcion
let tiempoEspera
let numeroTurno
do {
    let numeroTurno = Number(prompt("Ingresa el numero de turno que te tocó"))
    opcion = prompt(mensajeInicial)
    if (opcion == 1) {
        esperaAudicion(3, numeroTurno)
    } else if (opcion == 2) {
        esperaAudicion(2, numeroTurno)
    } else if (opcion == 3) {
        esperaAudicion(7, numeroTurno)
    } else if (opcion == 4) {
        esperaAudicion(4, numeroTurno)
    } else if (opcion == 0) {
        break
    } else {
        alert("¡Ocurrió un error! Por favor ingrese una opción correcta")
    }
} while (opcion !== 0) {
    despedirse()
}
