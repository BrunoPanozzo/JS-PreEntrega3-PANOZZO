//DEFINICIÓN DE CLASES
class Entrada {

    constructor(nombrePelicula, fecha, hora, cantidad) {
        this.nombrePelicula = nombrePelicula;
        this.fecha = fecha;
        this.hora = hora;
        this.cantidad = cantidad;
        this.precio = precioEntrada * this.cantidad;
    }

    ActualizarPrecio(cantidad) {
        this.precio = precioEntrada * cantidad;
     }
    
}