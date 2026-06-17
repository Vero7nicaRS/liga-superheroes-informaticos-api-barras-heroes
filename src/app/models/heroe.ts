export class Heroe {

  id: string = '';
  nombre: string = '';
  descripcion: string = '';
  imagen: string = '';
  alineacion: string = '';
  tipo: string = '';
  email: string = '';
  numeroMedallas: number = 0;

  inteligencia: number = 0;
  fuerza: number = 0;
  velocidad: number = 0;
  durabilidad: number = 0;
  poder: number = 0;
  combate: number = 0;

  constructor(
    id: string,
    nombre: string,
    descripcion: string,
    imagen: string,
    alineacion: string,
    tipo: string,
    email: string,
    numeroMedallas: number,
    inteligencia: number,
    fuerza: number,
    velocidad: number,
    durabilidad: number,
    poder: number,
    combate: number,
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.imagen = imagen;
    this.alineacion = alineacion;
    this.tipo = tipo;
    this.email = email;
    this.numeroMedallas = numeroMedallas;

    this.inteligencia = inteligencia;
    this.fuerza = fuerza;
    this.velocidad = velocidad;
    this.durabilidad = durabilidad;
    this.poder = poder;
    this.combate = combate;
  }
}
