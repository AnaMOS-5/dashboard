const productos = [
    new Producto('Lenceria', 6, 300, 2),
    new Producto('Ropa', 9, 126, 8),
    new Producto('Calzado', 8, 200, 3),
    new Producto('Cosmeticos', 4, 687, 2),
    new Producto('Accesorios', 7, 280, 9)
]

function getProductos(){
    return productos
}

function getProductoByIndex(i){
    return productos[i]
}

function deleteProducto(i){
    return productos.splice(i, 1);
}

function updateProducto(i, nombre, precio, existencias, status){
    productos[i].nombre = nombre
    productos[i].precio = precio
    productos[i].existencias = existencias
    productos[i].status = status
}

function createProducto(nombre, precio, existencias, status){
    const newProducto = new Producto(nombre, precio, existencias, status)
    productos.push(newProducto)
}