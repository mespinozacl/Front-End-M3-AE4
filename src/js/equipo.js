  const doctores = [
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
  ];

  const {
    nombre,
    especialidad,
    contacto: { email },
    horarios: horarios,
  } = doctores[0];
  console.log(
    `Doctor: ${nombre}, Especialidad: ${especialidad}, Email: ${email}, Horarios: ${horarios}`
  );

  const divInfo = document.getElementById("doctores-info");
  divInfo.innerHTML = `<h2>${nombre}</h2><p>Especialidad: ${especialidad}</p><p>Email: ${email}</p><p>Horarios: ${horarios[0]} ${horarios[1]}</p>`;
  
  /*
  const ldoctores = document.getElementById("doctores");
  doctores.forEach((doctor) => {
    if (doctor.experiencia > 5) {
      console.log(`${doctor.nombre} tiene suficiente experiencia.`);
      const item = document.createElement("li");
      item.textContent = doctor.nombre + " - " + doctor.especialidad + " - " + doctor.experiencia + " años de experiencia";
      ldoctores.appendChild(item);
    }
  });
  */