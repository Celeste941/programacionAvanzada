export default class Animal {
    constructor(nombre, edad, comentarios, imagen, sonido) {
      this.nombre = nombre;
      this.edad = edad;
      this.comentarios = comentarios;
      this.imagen = imagen;
      this.sonido = sonido;
    }
  
    get Nombre() {
      return this.nombre;
    }
  
    get Edad() {
      return this.edad;
    }
  
    get Comentarios() {
      return this.comentarios;
    }
  
    set Comentarios(nuevosComentarios) {
      this.comentarios = nuevosComentarios;
    }
  
    get Imagen() {
      return this.imagen;
    }
  
    get Sonido() {
      return this.sonido;
    }
  }
  