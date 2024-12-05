# Front-End-M3-AE4
Laboratorio Virtual 2

1. Programación Funcional en JavaScript (2 puntos)
Implementa una función que use currying para calcular el costo total de los servicios de un paciente en función del número de consultas realizadas y el precio de cada consulta.
Usa la función flecha para simplificar la sintaxis en una función que calcule el tiempo promedio de espera de los pacientes.
Implementa la recursión para calcular de forma recursiva el total de horas de consulta de un doctor a lo largo de la semana.
Integra composición de funciones para aplicar descuentos a los costos de consultas en base a la cantidad de consultas realizadas.

En la vista equipo.html se crearon cuatro botones que llaman a las funciones creadas en funcional.js

Funcion costo total de servicios de un paciente
costoPaciente(3,50000); //150000

Función tiempo promedio de atencion de pacientes
tiempoPromedio([15, 20, 30]); //21.67

Funcion recursiva tptal de horas de atencion de un doctor en la semana
horasTotales([3, 4, 5, 2]); //14

Función aplicar descuento
costoConDescuento(150000, 0.1); //135000

2. Programación Orientada a Eventos y Programación Asíncrona (2.5 puntos)
Captura eventos del usuario en la página de Contacto:
Implementa un listener para capturar el envío del formulario y muestra un mensaje de confirmación.
Dispara un evento personalizado que simule la llegada de un nuevo paciente, mostrando una notificación en la página.
Implementa una función async/await para simular una llamada a una API REST que obtenga los datos de los doctores. Usa Promise para manejar los casos de éxito o fallo.
Implementa el manejo de errores utilizando try/catch en las funciones asíncronas, y define un callback que se invoque al fallar una petición simulada.

En la vista contacto.html se despliegan las funcionalidades solicitadas que fueron implementadas en el archivo async.js

Boton Enviar activa el listener y se despliega mensaje.

Se simula el evento de la llegada del paciente, se muestra en pagina y consola.

Ademas se crearon botones en la vista asociados a las funcionalidades async/await, Promise y try/catch 

Para probar cuando falla basta con cambiar el parametro url por un texto de un api rest que no funcione (es decir cualquier string sin sentido):

//API REST FUNCIONAL
const url = "https://jsonplaceholder.typicode.com/users";

//API REST QUE NO EXISTE
//const url = "USAR UN STRING COMO ESTO PARA OBTENER CASOS DE ERROR";

3. Programación Orientada a Objetos en JavaScript (2.5 puntos)
Implementa una clase Doctor con las propiedades nombre, especialidad, y años de experiencia.
Añade un método para mostrar la información de cada doctor y otro para calcular el total de pacientes atendidos por el doctor.
Crea una subclase de Doctor, por ejemplo Cirujano, que extienda las funcionalidades de la clase base.
Implementa el encapsulamiento en la clase, protegiendo la propiedad de años de experiencia mediante un getter y un setter.
Usa el polimorfismo para sobrescribir un método en la subclase Cirujano que calcule el número de operaciones realizadas en lugar de consultas.

En el archivo poo.js se implementaron las clases, las funciones y las caracteristicas solicitadas. 

En la vista equipo.html se crearon 2 botones que despliegan un muestra de lo anterior.
