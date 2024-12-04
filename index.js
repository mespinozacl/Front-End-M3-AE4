//
//consultasRealizadas
//precioConsulta
const calcularCosto = (precioConsultas) => (consultasRealizadas) => precioConsultas * consultasRealizadas;
const costoPorConsulta = calcularCosto(15000);
console.log(costoPorConsulta(5));


//api usuarios https://jsonplaceholder.typicode.com/users