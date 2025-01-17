/** Definimos un tipo para los productos */
type Producto = {
    nombre: string,
    precio: number,
    stock: number
  }
  
  /** Tipo de la función aplicarDescuento */
  type TypeAplicarDescuento = (lista: Producto[], descuento: number) => Producto[];
  
  export const aplicarDescuento: TypeAplicarDescuento = (lista, descuento) => {
    // ----- Primera forma (usando for clásico) -----
    const listaConDescuento: Producto[] = [];
    for (let i = 0; i < lista.length; i++) {
      const precioConDesc = lista[i].precio - (lista[i].precio * (descuento / 100));
      listaConDescuento.push({
        nombre: lista[i].nombre,
        precio: precioConDesc,
        stock:  lista[i].stock
      });
    }
    return listaConDescuento;
  
    // ----- Segunda forma (usando for...of) -----
    /*const listaConDescuento: Producto[] = [];
    for (let prod of lista) {
      const precioConDesc = prod.precio - (prod.precio * (descuento / 100));
      listaConDescuento.push({
        nombre: prod.nombre,
        precio: precioConDesc,
        stock:  prod.stock
      });
    }
    return listaConDescuento;*/
  
    // ----- Tercera forma (usando map) -----
    /*const listaConDescuento = lista.map((prod) => {
      const precioConDesc = prod.precio - (prod.precio * (descuento / 100));
      return {
        nombre: prod.nombre,
        precio: precioConDesc,
        stock:  prod.stock
      };
    });
    return listaConDescuento;*/
  }

/** Tipo de la función filtrarPorStock */
type TypeFiltrarPorStock = (lista: Producto[], stockMinimo: number) => Producto[];

export const filtrarPorStock: TypeFiltrarPorStock = (lista, stockMinimo) => {
  // ----- Primera forma (for clásico) -----
  /*const productosFiltrados: Producto[] = [];
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].stock >= stockMinimo) {
      productosFiltrados.push(lista[i]);
    }
  }
  return productosFiltrados;*/

  // ----- Segunda forma (for...of) -----
  /*const productosFiltrados: Producto[] = [];
  for (let prod of lista) {
    if (prod.stock >= stockMinimo) {
      productosFiltrados.push(prod);
    }
  }
  return productosFiltrados;*/

  // ----- Tercera forma (filter) -----
  const productosFiltrados = lista.filter((prod) => prod.stock >= stockMinimo);
  return productosFiltrados;
}