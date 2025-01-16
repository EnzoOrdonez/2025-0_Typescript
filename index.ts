import { filtrarNumerosMayores } from "./Ejer1"

import { calcularPromedio } from "./Ejer1"

const main = () =>  {
    
    //Filtrar numeros
    const numeros : number[] = [5,8,3,10,2,7]
    console.log(filtrarNumerosMayores(numeros,5))

    //Promedio
    console.log(calcularPromedio(numeros))

}

main()