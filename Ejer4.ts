/************************************
 * Ejercicio 4
 ************************************/

/** Definimos un tipo para los usuarios */
export type Usuario = {
    id: number,
    nombre: string,
    edad: number
  }
  
  /** Array de usuarios de ejemplo */
  export const usuarios: Usuario[] = [
    { id: 1, nombre: "Ana",   edad: 25 },
    { id: 2, nombre: "Luis",  edad: 30 },
    { id: 3, nombre: "María", edad: 22 },
  ];
  
  /** Tipo para la función mapearNombres */
  type TypeMapearNombres = (lista: Usuario[]) => string[];
  
  export const mapearNombres: TypeMapearNombres = (lista) => {
    // ----- Primera forma (for clásico) -----
    /*const nombres: string[] = [];
    for (let i = 0; i < lista.length; i++) {
      nombres.push(lista[i].nombre);
    }
    return nombres;*/
  
    // ----- Segunda forma (for...of) -----
    /*const nombres: string[] = [];
    for (let user of lista) {
      nombres.push(user.nombre);
    }
    return nombres;*/
  
    // ----- Tercera forma (map) -----
    const nombres = lista.map((user) => user.nombre);
    return nombres;
  }
  
  /** Tipo para la función calcularEdadPromedio */
  type TypeCalcularEdadPromedio = (lista: Usuario[]) => number;
  
  export const calcularEdadPromedio: TypeCalcularEdadPromedio = (lista) => {
    // Evitamos divisiones por cero
    if (lista.length === 0) return 0;
  
    // ----- Primera forma (for...of) -----
    /*let total = 0;
    for (let user of lista) {
      total += user.edad;
    }
    return total / lista.length;*/
  
    // ----- Segunda forma (reduce) -----
    const total = lista.reduce((acc, user) => acc + user.edad, 0);
    return total / lista.length;
  }
  
  /** Tipo para la función filtrarUsuariosMayores */
  type TypeFiltrarUsuariosMayores = (lista: Usuario[], edadMinima: number) => Usuario[];
  
  export const filtrarUsuariosMayores: TypeFiltrarUsuariosMayores = (lista, edadMinima) => {
    // ----- Primera forma (for clásico) -----
    /*const usuariosMayores: Usuario[] = [];
    for (let i = 0; i < lista.length; i++) {
      if (lista[i].edad > edadMinima) {
        usuariosMayores.push(lista[i]);
      }
    }
    return usuariosMayores;*/
  
    // ----- Segunda forma (for...of) -----
    /*const usuariosMayores: Usuario[] = [];
    for (let user of lista) {
      if (user.edad > edadMinima) {
        usuariosMayores.push(user);
      }
    }
    return usuariosMayores;*/
  
    // ----- Tercera forma (filter) -----
    const usuariosMayores = lista.filter((user) => user.edad > edadMinima);
    return usuariosMayores;
  }
  