const { v4: uuidv4 } = require('uuid');
const tareasJSON = './tareas.json';
const fs = require('fs');

function leerTareas() {
  try {
    const data = fs.readFileSync(tareasJSON, 'utf8');
    const tareas = JSON.parse(data);
    return tareas;
  } catch (error) {
    console.error('Error al leer el archivo de tareas:', error);
    return [];
  }
}

function escribirJSON(tareas) {
  const data = JSON.stringify(tareas, null, 2);
  fs.writeFileSync(tareasJSON, data, 'utf8');
  console.log('Tareas guardadas en el archivo tareas.json correctamente.');
}

function guardarTarea(tarea) {
  const tareasActuales = leerTareas();

  let tituloDuplicado = false;

  const tituloExistente = tareasActuales.filter(
    (t) => t.titulo.toLowerCase() === tarea.titulo.toLowerCase()
  );

  if (tituloExistente.length > 0) {
    console.error('Error: Ya existe una tarea con el mismo título.');
    tituloDuplicado = true;
  }

  if (!tituloDuplicado) {
    const ultimaTarea = tareasActuales[tareasActuales.length - 1];
    const nuevaID = ultimaTarea ? parseInt(ultimaTarea.ID) + 1 : 1;

    tarea.ID = nuevaID.toString();

    if (!tarea.Fecha) {
      const fechaActual = new Date();
      let dia = fechaActual.getDate();
      let mes = fechaActual.getMonth() + 1;
      let anio = fechaActual.getFullYear();

      tarea.Fecha = `${dia}/${mes}/${anio}`;
    }

    tareasActuales.push(tarea);
    escribirJSON(tareasActuales);

    console.log('Nueva tarea creada y guardada exitosamente.');
  }
}

function filtrarPorEstado(estado) {
  const tareas = leerTareas();
  const tareasFiltradas = tareas.filter(
    (tarea) => tarea.estado.toLowerCase() === estado.toLowerCase()
  );
  return tareasFiltradas;
}

function editarTarea(id, nuevoEstado) {
  const tareas = leerTareas();
  let tareaEncontrada = false;

  const tareasActualizadas = tareas.map((tarea) => {
    if (tarea.ID === id) {
      tarea.estado = nuevoEstado;
      tareaEncontrada = true;
    }
    return tarea;
  });

  if (tareaEncontrada) {
    escribirJSON(tareasActualizadas);
    console.log(`Estado de la tarea con ID ${id} editado correctamente a ${nuevoEstado}.`.rainbow);
  } else {
    console.log(`No se encontró ninguna tarea con el ID ${id}.`.red);
  }

  return tareaEncontrada;
}

function eliminarTarea(id) {
  const tareas = leerTareas();
  const tareaIndex = tareas.findIndex((tarea) => tarea.ID === id);

  if (tareaIndex !== -1) {
    tareas.splice(tareaIndex, 1);

    // Ajustar los números de ID de las tareas restantes
    for (let i = tareaIndex; i < tareas.length; i++) {
      tareas[i].ID = i + 1;
    }

    escribirJSON(tareas);
    console.log(`La tarea con ID ${id} ha sido eliminada correctamente.`.green);
  } else {
    console.log(`No se encontró ninguna tarea con el ID ${id}.`.red);
  }
}

module.exports = {
  leerTareas,
  escribirJSON,
  guardarTarea,
  filtrarPorEstado,
  editarTarea,
  eliminarTarea,
};