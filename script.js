//class constructora
class Producto{
    constructor(id, productoI, categoria, precio){
       this.id = id,
       this.producto = productoI,
       this.categoria = categoria,
       this.precio = precio
 
    }
    
 }
 
 //Instanciación de objetos: 
 const producto1 = new Producto(1,"Mate Poliedrico", "Bazar", 800)
 
 const producto2 = new Producto(2,"Vaso Pinta", "Bazar", 500)
 
 const producto3 = new Producto(3,"LLavero Disney", "Accesorios", 600)
 
 const producto4 = new Producto(4,"Mate Perita","Bazar", 1800)
 
 const producto5 = new Producto(5,"Mate Pompa", "Bazar", 1500)
 
 const producto6 = new Producto(6, "Mate Personalizado", "Bazar", 1600)
 
 //array de los productos/objetos
 const catalogo = []
 catalogo.push(producto1, producto2, producto3, producto4, producto5, producto6)
 
 //Funciones:
 //funcion para agregar mas productos a la lista del catalogo
 function agregarProducto(){
     let productoIngresado = prompt("Ingrese el producto") // ej: mate, llavero, vaso
     let categoriaIngresada = prompt("Ingrese la categoria") // ej:  bazar, accesorios
     let precioIngresado = parseInt(prompt("Ingrese del precio"))
     const productoNuevo = new Producto(catalogo.length+1,productoIngresado, categoriaIngresada, precioIngresado)
     catalogo.push(productoNuevo)
     }
 
 //funcion para visualizar catalogo
 function verCatalogo(array){
    console.log(`Nuestro catalogo es: `)
    for(let producto of array){
    console.log(producto.id, producto.producto, producto.categoria, producto.precio)
    }
 }
///////////////////////

//funcion para filtrar productos por la categoria ingresada
function buscarPorCategoria(array){
    let categoriaBuscada = prompt("Ingrese la categoria que está buscando")
    let busqueda = array.filter(
        (product) => product.categoria.toLowerCase() == categoriaBuscada.toLowerCase()
    )
    if(array.length == 0){
       console.log(`Para el autor ${categoriaBuscada} no hay coincidencias en nuestro catalogo`)
    }else{
       verCatalogo(busqueda)
    }
 }


//funcion para filtrar los productos de acuerdo al monto ingresado
 function filtrarPorPrecio(array){
    let precioIngresado = parseInt(prompt("Ingrese el precio máximo que puede pagar, le mostraremos los produtos dentro de ese monto"))
    let busq = array.filter(
       (producto) => {return producto.precio <= precioIngresado }
    )
    verCatalogo(busq)
 }
 let salirMenu = false;
 do{
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
       1 - Agregar producto
       2 - Ver catálogo
       3 - Buscar por Categoria
       4 - Que puedo comprar con X monto?
       0 - Salir del menu`))
       switch(opcionIngresada){
          case 1:
            agregarProducto()

          break;
          case 2:
            verCatalogo(catalogo)
          break;
          case 3:
            buscarPorCategoria(catalogo)
          break;
          case 4:
            filtrarPorPrecio(catalogo)
          break;    
          case 0:
             console.log(`Gracias por visitar nuestra tienda. Saludos!`)
             salirMenu = true
          break;   
          default:
             console.log("Opción no válida, ingrese alguna presente en el menu")
          break;
       }
    }while(!salirMenu);


alert ("fin programa");


