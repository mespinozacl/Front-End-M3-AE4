// Seleccionamos el área de salida para la sección de eventos y programación asíncrona
const outputEventosAsync = document.getElementById("eventos-async-output");

const form = document.getElementById("form-contacto");
const mensaje = document.getElementById("mensaje-confirmacion");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.textContent = "Formulario enviado con éxito.";
});

const eventoPaciente = new Event("nuevoPaciente");

document.addEventListener("nuevoPaciente", () => {
  console.log("Un nuevo paciente ha llegado.");
  outputEventosAsync.textContent = "Un nuevo paciente ha llegado.";
});

document.dispatchEvent(eventoPaciente);

async function obtenerDoctores(url) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Error al obtener datos");
      const datos = await response.json();
      console.log(datos);
      return response;
    } catch (error) {
      console.error("Error:", error.message);
    }
  }


const url = "https://jsonplaceholder.typicode.com/users";
//const url = "USAR ESTO PARA OBTENER CASOS DE ERROR";

obtenerDoctores(url);


/**
 * 1. Captura y Manejo de Eventos
 * Ejemplo de cómo capturar un evento 'click' en un botón y manejar la respuesta.
 */
function capturarEvento() {
  console.log("Evento capturado: click en el botón");
  outputEventosAsync.textContent = "Evento capturado: click en el botón";
}

/**
 * 2. Uso de Callback
 * Un callback es una función pasada como argumento a otra función que se ejecuta luego de que una acción ocurre.
 */
function operacionAsincrona(callback) {
  setTimeout(() => {
    const resultado = obtenerDoctores(url);
    console.log(resultado);
    outputEventosAsync.textContent = resultado;
    callback();
  }, 2000); // Simula un tiempo de espera de 2 segundos
}

function ejecutarCallback() {
  operacionAsincrona(() => {
    console.log("Callback ejecutado después de la operación");
    outputEventosAsync.textContent +=
      "\nCallback ejecutado después de la operación";
  });
}

/**
 * 3. Uso de Promesas
 * Una promesa representa el resultado eventual de una operación asincrónica.
 */
function operacionConPromesa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const exito = obtenerDoctores(url);
      if (exito) {
        resolve("Operación exitosa con Promesa");
      } else {
        reject("Error en la operación con Promesa");
      }
    }, 2000);
  });
}

function ejecutarPromesa() {
  operacionConPromesa()
    .then((mensaje) => {
      console.log(mensaje);
      outputEventosAsync.textContent = mensaje;
    })
    .catch((error) => {
      console.error(error);
      outputEventosAsync.textContent = error;
    });
}

/**
 * 4. Async/Await
 * Sintaxis simplificada para trabajar con promesas.
 */
async function operacionAsync() {
  try {
    const resultado = await operacionConPromesa();
    console.log("Resultado async/await:", resultado);
    outputEventosAsync.textContent = `Resultado async/await: ${resultado}`;
  } catch (error) {
    console.error("Error:", error);
    outputEventosAsync.textContent = `Error: ${error}`;
  }
}

// Asignamos las funciones a 'window' para hacerlas accesibles en el HTML
window.capturarEvento = capturarEvento;
window.ejecutarCallback = ejecutarCallback;
window.ejecutarPromesa = ejecutarPromesa;
window.operacionAsync = operacionAsync;