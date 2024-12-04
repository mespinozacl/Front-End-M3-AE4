// Seleccionamos el área de salida en la vista para mostrar los resultados
const outputFuncional = document.getElementById("funcional-output");

/** 
 * Funcion costo total de servicios de un paciente
 * costoPaciente(3,50000); //150000
*/
function costoPaciente(n_consultas, precio_consulta) {
    const calcularCosto = (precioPorConsulta) => (numeroDeConsultas) => precioPorConsulta * numeroDeConsultas;
    const calcularCostoPaciente = calcularCosto(precio_consulta);
    const resultado = calcularCostoPaciente(n_consultas);
    console.log(resultado);
    outputFuncional.textContent = `Resultado: ${resultado}`;
}

/** 
 * Función tiempo promedio de atencion de pacientes
 * tiempoPromedio([15, 20, 30]); //21.67
*/
function tiempoPromedio(array_tiempos) {
    const calcularTiempoPromedio = (tiempos) => 
        tiempos.reduce((a, b) => a + b, 0) / tiempos.length;
    const resultado = calcularTiempoPromedio(array_tiempos);
    console.log(resultado);
    outputFuncional.textContent = `Resultado: ${resultado}`;
}

/** 
 * Funcion recursiva tptal de horas de atencion de un doctor en la semana
 * horasTotales([3, 4, 5, 2]); //14
*/
function horasTotales(array_horas) {
    const calcularHorasTotales = (horas, index = 0) => {
        if (index === horas.length) return 0;
        return horas[index] + calcularHorasTotales(horas, index + 1);
    };
    const resultado = calcularHorasTotales(array_horas);
    console.log(resultado);
    outputFuncional.textContent = `Resultado: ${resultado}`;
}

/**
 * Función aplicar descuento
 * costoConDescuento(150000, 0.1); //135000
 */
function costoConDescuento(costo_total, porcentaje_dcto) {
    const aplicarDescuento = (costo) => (descuento) => costo - costo * descuento;
    const calcularCostoConDescuento = (costo) => aplicarDescuento(costo)(porcentaje_dcto);
    const resultado = calcularCostoConDescuento(costo_total);
    console.log(resultado);
    outputFuncional.textContent = `Resultado: ${resultado}`;
} 

// Asignamos las funciones a 'window' para hacerlas accesibles en el HTML
window.costoPaciente = costoPaciente;
window.tiempoPromedio = tiempoPromedio;
window.horasTotales = horasTotales;
window.costoConDescuento = costoConDescuento;