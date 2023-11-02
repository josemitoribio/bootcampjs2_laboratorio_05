# Laboratorio 05

## **Condicionales**

Vamos a implementar el juego de cartas de las 7 1/2 en modo solitario.

El juego de las siete y media es un juego de cartas español que se juega tradicionalmente con varios jugadores, pero también se puede adaptar para un solo jugador.

Para simplificar la implementación del juego sólo vamos a mostrar cartas del palo de copas:

#### Juego:
- Las cartas tienen los siguientes valores: 1,2,3,4,5,6,7,10,11,12
- La puntuación de las cartas del 1 al 7 tiene el mismo valor en la puntuación. La carta de valor 10, 11 y 12 tienen un valor de 0.5 en la puntuación.
- Obtengo un número aleatorio de un rango continuo de 0 a 12 saltándome el 8 y el 9.

#### Final de la partida:
- Ocurre cuando se gana la partida (la puntuación es 7.5) o se pierde (la puntuación es superior a 7.5).
- Se habilita un botón para comenzar una nueva partida donde el contador se pone a 0.

#### Me planto:
- Se muestra un mensaje acorde a la puntación obtenida hasta el momento en tres estados distintos: cuando la puntuación es menor que 4, cuando la puntuación es 5 y cuando la puntuación ha sido 6 o 7.
- Se habilita un botón para ver el resultado de lo que habría pasado si se sigue pidiendo cartas.
- Se habilita un botón para comenzar una nueva partida donde el contador se pone a 0.
