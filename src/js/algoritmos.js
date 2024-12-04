import { iniArregloDoctores, getArregloDoctores } from './estructura_datos.js';

// Seleccionar el elemento de salida para la sección Algoritmos
const outputAlgoritmos = document.getElementById("algoritmos-output");

// 1. Búsqueda
function buscarDoctor(nombre) {
    iniArregloDoctores();
    const buscarDoctor = getArregloDoctores().find((doc) => doc.nombre === nombre) 
    if(buscarDoctor != undefined)
    {
        console.log(`Doctor Encontrado: ${buscarDoctor.nombre} - ${buscarDoctor.especialidad}`);
        outputAlgoritmos.textContent = `Doctor Encontrado: ${buscarDoctor.nombre} - ${buscarDoctor.especialidad}`;
    }
    else
    {
        console.log(`Doctor NO Encontrado: ${nombre}`);
        outputAlgoritmos.textContent = `Doctor NO Encontrado: ${nombre}`;
    }
};

// 2.a Ordenar Descendente
function ordenarDoctorDesc(nombre) {
    iniArregloDoctores();
    const doctores = getArregloDoctores()
    doctores.sort((a, b) => b.experiencia - a.experiencia);
    console.log(doctores);
    outputAlgoritmos.textContent = `Arreglo Ordenado Desc:\n${doctores.join(", ")}`;
};

// 2.b Ordenar Ascendente
function ordenarDoctorAsc(nombre) {
    iniArregloDoctores();
    const doctores = getArregloDoctores()
    doctores.sort((a, b) => a.experiencia - b.experiencia);
    console.log(doctores);
    outputAlgoritmos.textContent = `Arreglo Ordenado Asc:\n${doctores.join(", ")}`;
};

// Asignar funciones a window para que estén disponibles globalmente en el HTML
window.buscarDoctor = buscarDoctor;
window.ordenarDoctorDesc = ordenarDoctorDesc;
window.ordenarDoctorAsc = ordenarDoctorAsc;