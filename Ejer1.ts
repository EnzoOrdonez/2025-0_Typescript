const numeros : number[] = [5,8,3,10,2,7]

type TipofiltrarNumerosMayores = (lista:number[], filtro:number) => number[]

export const filtrarNumerosMayores : TipofiltrarNumerosMayores = (lista,filtro) =>{

    const lista_filtrada : number[] = []

    //Primera forma

    for(let i=0;i<lista.length;i++){

        if(lista[i]>filtro){

            lista_filtrada.push(lista[i])

        }

    }

    //Segunda forma

    /*for(let num of lista){

        if(num<filtro){

            lista_filtrada.push(num)

        }

    }*/

    //Tercera formagit

    /*const predicado =(elen:number) =>{

        if(elen>filtro){
            return true
        }
        else{
            return false
        }
        
    }

    const listaFiltrada = lista.filter(predicado)
    return listaFiltrada*/

    return lista_filtrada

}

export const calcularPromedio = ( lista : number[]) => {

    let Total : number = 0

    for(let num of lista){

        Total+=num

    }

    return Total/lista.length

}

//PASOS PARA GITEAR
//1) git init
//2) Crear un archivo ".gitignore"
//3) poner "*.js" para no reconozca ningun archivo js
//4) Revisar en el status
//5) git add .
//6) git commit