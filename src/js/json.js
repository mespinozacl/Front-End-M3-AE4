// Seleccionar el elemento de salida para la sección JSON
const outputJSON = document.getElementById("json-output");


// 1. Sintaxis básica y notación JSON
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

const hospital2 = {
  especialidades: ["Cirugía Plástica", "Medicina General", "Urología", "Nutrición", "Cardiología", "Pediatría", "Neurología"],
};

let currentJSON=hospital1;

//0. asignar currentJSON;
function asignarJSON1() {
    currentJSON=hospital1;
};

function asignarJSON2() {
    currentJSON=hospital2; 
};

// 1. Mostrar el JSON en la consola y en la vista
function mostrarJSON() {
  console.log("Ejemplo de JSON:", currentJSON);
  outputJSON.textContent = JSON.stringify(currentJSON, null, 2);
};

// 2. Clonación de JSON
function clonarJSON() {
  const clone = JSON.parse(JSON.stringify(currentJSON));
  console.log("Clonación de JSON:", clone);
  outputJSON.textContent = "Clonación de JSON:\n" + JSON.stringify(clone, null, 2);
  currentJSON = clone;
};

// 3. Merge de dos JSON
function mergeJSON() {
  const merged = { ...hospital1, ...hospital2 };
  console.log("Merge de JSON:", merged);
  outputJSON.textContent = "Merge de JSON:\n" + JSON.stringify(merged, null, 2);
  currentJSON = merged;
};

// 4. Stringify
function stringifyJSON() {
  const jsonString = JSON.stringify(currentJSON, null, 2);
  console.log("Stringify JSON:", jsonString);
  outputJSON.textContent = "Stringify JSON:\n" + jsonString;
};

//5. Parse JSON
function parseJSON() {
  const jsonString = JSON.stringify(currentJSON);
  const parsedJSON = JSON.parse(jsonString);
  console.log("Parse JSON:", parsedJSON);
  outputJSON.textContent = "Parse JSON:\n" + JSON.stringify(parsedJSON, null, 2);
  currentJSON = parsedJSON;
};

// 5. Recorrido de JSON
function recorrerJSON() {
  let resultado = "Recorrido de JSON:\n";
  for (const key in currentJSON) {
    if (obj.hasOwnProperty(key)) {
      resultado += `${key}: ${JSON.stringify(currentJSON[key], null, 2)}\n`;
      console.log(`${key}:`, currentJSON[key]);
    }
  }
  outputJSON.textContent = resultado;
};

// 6. Destructuración y acceso a datos
function destructurarJSON() {
  const {
    nombre,
    especialidad,
    datosContacto: { email },
    horarios: horarios,
  } = currentJSON;
  const resultado = `Destructuración - Doctor: ${nombre}, Especialidad: ${especialidad}, Email: ${email}, Horarios: ${horarios}`;
  console.log(resultado);
  outputJSON.textContent = resultado;
};

// Asignar funciones a window para que estén disponibles globalmente en el HTML
window.asignarJSON1 = asignarJSON1;
window.asignarJSON2 = asignarJSON2;
window.mostrarJSON = mostrarJSON;
window.clonarJSON = clonarJSON;
window.mergeJSON = mergeJSON;
window.stringifyJSON = stringifyJSON;
window.parseJSON = parseJSON;
window.recorrerJSON = recorrerJSON;
window.destructurarJSON = destructurarJSON;