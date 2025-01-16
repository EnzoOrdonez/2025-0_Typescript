type Punto = [number,number]

export const distanciaEntrePuntos = (p1 : Punto, p2 : Punto) =>{

    //Primera forma

    const distancia = (((p1[0]-p2[0])^2) + ((p1[1]-p2[1])^2))^(0.5)

    //Segunda forma

    /*const distancia = Math.sqrt(

        (Math.pow((p1[1]-p2[1]),2)) +
        (Math.pow((p1[0]-p2[0]),2))

    )*/

    return distancia

}

export const MoverPunto = (p: Punto, delta : [number,number]) => {

    const nuevoPunto : Punto = [p[0], p[1]]
    nuevoPunto[0] += delta[0]
    nuevoPunto[1] += delta[1]

    return nuevoPunto

}