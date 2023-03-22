function saludar() {
    nombreIngresado = prompt("Por favor ingrese su nombre")
    if (nombreIngresado.trim() === ""){
        alert("Ingrese un nombre válido")
        saludar()
    } else{
        alert("Bienvenido a DanzArte " + nombreIngresado + "\nTe invitamos a que te informes cuanto tiempo tendrás que esperar para audicionar")
        //menuPrincipal()
    }
}

function menuPrincipal(){
    do {
        //let numeroTurno = Number(prompt("Ingresa el numero de turno que te tocó"))
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
    alert("Gracias " + nombreIngresado + "\n Atento al llamado de la sala de Danza")
}

function esperaAudicion(tiempoEsperaArea, lugarTurno) {
    let tiempoEspera = tiempoEsperaArea * lugarTurno
    alert("Tu turno para presentarte será en " + tiempoEspera + " minutos")
    
} 
function turno(){
    let numeroTurnoIngresado = Number(prompt("Ingresa el numero de turno que te tocó (del 1 al 10)"))
    if (numeroTurnoIngresado === "" || isNaN(numeroTurnoIngresado) || numeroTurnoIngresado >= 1 && numeroTurnoIngresado <= 10){
        menuPrincipal()
    } else {
        alert("Este campo no admite texto ni puede quedar vacío y debe tener un valor numérico dentro del rango estipulado. Por favor ingrese nuevamente un turno válido")
        turno()
    }
    
}
let mensajeInicial = "Audiciones 'DanzArte'.\nPor favor indicanos a que área vienes a audicionar:\n1- Folklore\n2 - Jazz\n3 - Contemporaneo\n4 - Urbano\n\n0 - Me arrepentí de Audicionar"
let opcion
let tiempoEspera
let numeroTurnoIngresado
let nombreIngresado
let numeroTurno = numeroTurnoIngresado

saludar()
turno()