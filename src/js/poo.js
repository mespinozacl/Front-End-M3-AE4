// Seleccionamos el área de salida para la sección de POO
const outputPOO = document.getElementById("poo-output");

/**
 * 1. Clase Doctor
 */
class Doctor {
  constructor(nombre, especialidad, anos_exp) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    if(anos_exp < 0)
        this.anos_exp = 0;
    else
        this.anos_exp = anos_exp;
    this.arrayPacientes = [];
  }

  /**Encapsulamiento getter */
  get experiencia() {
    return this._experiencia;
  }

  /**Encapsulamiento setter */
  set experiencia(valor) {
    if (valor < 0) throw new Error("La experiencia no puede ser negativa.");
    this._experiencia = valor;
  }

  info() {
    return `Nombre: ${this.nombre}, especialidad: ${this.especialidad}, experiencia: ${this.anos_exp} años.`;
  }

  getPacientes() {
    return this.arrayPacientes;
  }
  getCantidadPacientes() {
    return this.arrayPacientes.length
  }
}

/**
 * 2. Subclase Cirujano que extiende clase Doctor
 */
class Cirujano extends Doctor {
  constructor(nombre, especialidad, anos_exp) {
    super(nombre, especialidad, anos_exp); // Llama al constructor de la clase padre
    this.arrayOperaciones = [];
  }

  // Sobrescribir el método info para incluir información adicional
  info() {
    //return `${super.saludar()} mencion especialidad ${this.mencion}.`;
    return `Nombre: ${this.nombre}, especialidad: Cirugía ${this.especialidad}, experiencia: ${this.anos_exp} años.`;  
  }

  getOperaciones() {
    return this.arrayOperaciones;
  }
  getCantidadOperaciones() {
    return this.arrayOperaciones.length;
  }
}

/**
 * 3. Ejemplo para crear Objeto con la Clase Doctor
 */
function crearObjetoConClase() {
  const conan = new Doctor("Conan", "Carnicero", 20);
  const mensaje = conan.info();
  console.log("Doctor:", mensaje);
  const paciente = {nombre: "Ana", fecha: "01-09-2024", hora: "12:00", descripción: "consulta"};
  conan.getPacientes().push(paciente);
  console.log("Doctor:", conan.getPacientes());
  const pac = conan.getCantidadPacientes();
  outputPOO.textContent = `Doctor:\n${mensaje}\n pacientes atendidos: ${pac}`;

}

/**
 * 4. Ejemplo para probar Herencia y polimorfismo
 */
function demostrarHerencia() {
  const maria = new Cirujano("María", "Digestiva", 15);
  const mensaje = maria.info();
  console.log("Herencia:", mensaje);
  const operacion = {nombre: "Juan", fecha: "13-10-2024", descripción: "Extraccion de higado"};
  maria.getOperaciones().push(operacion);
  const oper = maria.getCantidadOperaciones();
  console.log("Herencia:", maria.getOperaciones());
  console.log("Operaciones realizadas:", oper);

  const paciente1 = {nombre: "Luis", fecha: "11-10-2024", hora: "11:00", descripción: "consulta1"};
  const paciente2 = {nombre: "Hugo", fecha: "17-10-2024", hora: "11:20", descripción: "consulta2"};
  maria.getPacientes().push(paciente1);
  maria.getPacientes().push(paciente2);
  const pac = maria.getCantidadPacientes();
  console.log("Herencia:", maria.getPacientes());
  outputPOO.textContent = `Herencia:\n${mensaje}\nPacientes atendidos: ${pac}\nOperaciones realizada: ${oper}`;
}

window.crearObjetoConClase = crearObjetoConClase;
window.demostrarHerencia = demostrarHerencia;