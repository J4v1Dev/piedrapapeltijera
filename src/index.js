var jugadaJugador1 = prompt ("Jugador1 escribe piedra, papel o tijera");

var jugadaJugador2 = prompt ("Jugador2 escribe piedra, papel o tijera");


if ((jugadaJugador1 != "piedra" && jugadaJugador1 != "papel" && jugadaJugador1 != "tijera") || 
    (jugadaJugador2 != "piedra" && jugadaJugador2 != "papel" && jugadaJugador2 != "tijera")){
    alert ("Uno o ambos jugadores se han equivocado");
}else if (jugadaJugador1 == jugadaJugador2){
    alert ("Empate");
}else if (jugadaJugador1 == "piedra" && jugadaJugador2 == "tijera"){
    alert ("Gana jugador1");
}else if (jugadaJugador1 == "papel" && jugadaJugador2 == "piedra"){
    alert ("Gana jugador1");
}else if (jugadaJugador1 == "tijera" && jugadaJugador2 == "papel"){
    alert ("Gana jugador1");
}else{
    alert ("Gana jugador2");
}