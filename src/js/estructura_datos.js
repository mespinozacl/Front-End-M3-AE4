// Seleccionar el elemento de salida para la sección Estructuras de Datos
const outputEstructuras = document.getElementById("estructuras-output");

// 1. Ejemplo de Arreglo
const hospital1 = {
    doctores : [
    {
      nombre: "Juan Carnicer O.",
      especialidad: "Cirugía Plástica",
      experiencia: 8,
      disponibilidad: true,
      contacto: { telefono: "123456789", email: "juan.carnicer@hospital.com" },
      horarios: ["Lunes 9-12", "Jueves 10-14"],
    },
    {
      nombre: "Elba Lazo",
      especialidad: "Medicina General",
      experiencia: 6,
      disponibilidad: true,
      contacto: { telefono: "123456789", email: "elba.lazo@hospital.com" },
      horarios: ["Martes 9-13", "Viernes 10-15"],
    },
    {
      nombre: "Aquiles Castro",
      especialidad: "Urología",
      experiencia: 5,
      disponibilidad: true,
      contacto: { telefono: "123456789", email: "aquiles.castro@hospital.com" },
      horarios: ["Martes 9-12", "Jueves 10-14"],
    },
    {
      nombre: "Clara Melo",
      especialidad: "Nutrición",
      experiencia: 9,
      disponibilidad: true,
      contacto: { telefono: "123456789", email: "clara.melo@hospital.com" },
      horarios: ["Lunes 9-12", "Viernes 10-14"],
    },
    {
      nombre: "Juan Pérez",
      especialidad: "Cardiología",
      experiencia: 10,
      disponibilidad: true,
      contacto: { telefono: "123456789", email: "juan.perez@hospital.com" },
      horarios: ["Lunes 9-12", "Miércoles 10-14"],
    },
    {
      nombre: "Ana López",
      especialidad: "Pediatría",
      experiencia: 5,
      disponibilidad: false,
      contacto: { telefono: "987654321", email: "ana.lopez@hospital.com" },
      horarios: ["Martes 8-13", "Jueves 14-18"],
    },
  ],
};

let arregloDoctores = [];

export function getArregloDoctores() {
    return arregloDoctores;
}

export function iniArregloDoctores() {
    arregloDoctores = [];
    hospital1.doctores.forEach((doctor) => {
        arregloDoctores.push(doctor);
        console.log("Agregado a arregloDoctores:", doctor);
        outputEstructuras.textContent = `Elemento agregado: ${doctor}\nArreglo actualizado:\n${arregloDoctores.join(
          ", "
        )}`;
    });
}

function mostrarArreglo() {
  console.log("Estado Actual Arreglo:", arregloDoctores);
  outputEstructuras.textContent = `Estado Actual Arreglo:\n${arregloDoctores.join(", ")}`;
}

// Operaciones con el Arreglo
function agregarElementoArreglo(elemento) {
  arregloDoctores.push(elemento);
  console.log("Elemento agregado:", elemento);
  outputEstructuras.textContent = `Elemento agregado: ${elemento}\nArreglo actualizado:\n${arregloDoctores.join(
    ", "
  )}`;
}

function agregarInternoElementoArreglo() {
    const doc1 =
    {
        nombre: "Ana López",
        especialidad: "Pediatría",
        experiencia: 5,
        disponibilidad: false,
        contacto: { telefono: "987654321", email: "ana.lopez@hospital.com" },
        horarios: ["Martes 8-13", "Jueves 14-18"],
    };
    arregloDoctores.push(doc1);
    console.log("Elemento agregado:", doc1);
    outputEstructuras.textContent = `Elemento agregado: ${doc1}\nArreglo actualizado:\n${arregloDoctores.join(
      ", "
    )}`;
}

function eliminarElementoArreglo() {
  const eliminado = arregloDoctores.pop();
  console.log("Elemento eliminado:", eliminado);
  outputEstructuras.textContent = `Elemento eliminado: ${eliminado}\nArreglo actualizado:\n${arregloDoctores.join(
    ", "
  )}`;
}

// 2. Ejemplo de Pila (Stack)
const pila = [];

function mostrarPilaAgenda() {
    console.log("Estado actual de la Pila Agenda de pacientes:", pila);
    outputEstructuras.textContent = `Estado Actual Pila Agenda:\n${pila.join(", ")}`;
  }

function iniPilaAgenda() {
  pila.push("Paciente 1");
  pila.push("Paciente 2");
  pila.push("Paciente 3");
  console.log("Agenda de pacientes luego de apilar elementos:", pila);
  outputEstructuras.textContent = `Pila después de apilar:\n${pila.join(", ")}`;
}

function desapilarPilaAgenda() {
  const desapilado = pila.pop();
  console.log("Elemento desapilado:", desapilado);
  outputEstructuras.textContent += `\nElemento desapilado: ${desapilado}\nPila actualizada:\n${pila.join(
    ", "
  )}`;
}

// 3. Ejemplo de Cola (Queue)
const cola = [];

function mostrarCola() {
    console.log("Estado actual de la Cola:", cola);
    outputEstructuras.textContent = `Estado actual de la Cola:\n${cola.join(
      ", "
    )}`
};

function iniCola() {
  cola.push("Paciente A");
  cola.push("Paciente B");
  cola.push("Paciente C");
  console.log("Cola después de encolar 3 pacientes:", cola);
  outputEstructuras.textContent = `Cola después de encolar 3 pacientes:\n${cola.join(
    ", "
  )}`
};

function atenderCola() {
  const desencolado = cola.shift();
  console.log("Elemento desencolado:", desencolado);
  outputEstructuras.textContent += `\nElemento desencolado: ${desencolado}\nCola actualizada:\n${cola.join(
    ", "
  )}`;
}

// Asignar funciones a window para que estén disponibles globalmente en el HTML
window.iniArregloDoctores = iniArregloDoctores;
window.mostrarArreglo = mostrarArreglo;
window.agregarElementoArreglo = agregarElementoArreglo;
window.agregarInternoElementoArreglo = agregarInternoElementoArreglo;
window.eliminarElementoArreglo = eliminarElementoArreglo;
window.mostrarPilaAgenda = mostrarPilaAgenda;
window.iniPilaAgenda = iniPilaAgenda;
window.desapilarPilaAgenda = desapilarPilaAgenda;
window.mostrarCola = mostrarCola;
window.iniCola = iniCola;
window.atenderCola = atenderCola;