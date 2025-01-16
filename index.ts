import { filtrarNumerosMayores } from "./Ejer1"

import { calcularPromedio } from "./Ejer1"

import { distanciaEntrePuntos, MoverPunto} from "./Ejer2"

const main = () =>  {

    //Ejercicio 1

    //Filtrar numeros
    const numeros : number[] = [5,8,3,10,2,7]
    console.log(filtrarNumerosMayores(numeros,5))

    //Promedio
    console.log(calcularPromedio(numeros))

    //Ejercicio 2

    //Distancia entre puntos

    const Punto1 : [number,number] = [1,2];
    const Punto2 : [number,number] = [3,4];

    console.log(distanciaEntrePuntos(Punto1,Punto2))

    //Nuevo Punto
    console.log(MoverPunto(Punto1,[8,4]))
}

main()