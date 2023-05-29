// Leer tareas desde el almacenamiento local
function leerTareas() {
  const tareasString = localStorage.getItem('tareas');
  if (tareasString) {
    const tareas = JSON.parse(tareasString);
    tareas.forEach((tarea, index) => {
      if (!tarea.ID) {
        tarea.ID = index + 1;
      }
    });
    return tareas;
  }
  return [];
}

// Guardar tareas en el almacenamiento local
function guardarTareas(tareas) {
  localStorage.setItem('tareas', JSON.stringify(tareas));
}

// Mostrar las tareas en la lista
function mostrarTareas() {
  const listaTareas = document.getElementById('lista-tareas');
  listaTareas.innerHTML = '';

  const tareas = leerTareas();
  tareas.forEach((tarea, index) => {
    const tareaElement = document.createElement('div');
    tareaElement.className = 'tarea';
    tareaElement.textContent = `${index + 1}. ${tarea.titulo} - Estado: ${tarea.estado} - ID: ${tarea.ID} - Fecha: ${tarea.Fecha}`;
    listaTareas.appendChild(tareaElement);
  });
}

// Agregar una nueva tarea
function agregarTarea(event) {
  event.preventDefault();

  const titulo = document.getElementById('titulo').value;
  const estado = document.getElementById('estado').value;

  const nuevaTarea = {
    titulo,
    estado,
    ID: leerTareas().length + 1,
    Fecha: obtenerFechaActual()
  };

  const tareas = leerTareas();
  tareas.push(nuevaTarea);
  guardarTareas(tareas);

  document.getElementById('titulo').value = '';
  document.getElementById('estado').value = 'terminado';

  mostrarTareas();
}

// Filtrar tareas por estado
function filtrarTareas(event) {
  event.preventDefault();

  const estadoFiltrar = document.getElementById('estado-filtrar').value;
  const tareasFiltradas = leerTareas().filter(tarea => tarea.estado === estadoFiltrar);

  const listaTareas = document.getElementById('lista-tareas');
  listaTareas.innerHTML = '';

  tareasFiltradas.forEach((tarea, index) => {
    const tareaElement = document.createElement('div');
    tareaElement.className = 'tarea';
    tareaElement.textContent = `${index + 1}. ${tarea.titulo} - Estado: ${tarea.estado} - ID: ${tarea.ID} - Fecha: ${tarea.Fecha}`;
    listaTareas.appendChild(tareaElement);
  });
}

// Editar una tarea por su ID
function editarTarea(event) {
  event.preventDefault();

  const idEditar = parseInt(document.getElementById('id-editar').value);
  const nuevoEstado = document.getElementById('estado-editar').value;

  const tareas = leerTareas();
  const tareaEncontrada = tareas.find(tarea => tarea.ID === idEditar);

  if (tareaEncontrada) {
    tareaEncontrada.estado = nuevoEstado;
    guardarTareas(tareas);
    mostrarTareas();
    alert(`Estado de la tarea con ID ${idEditar} editado correctamente a ${nuevoEstado}.`);
  } else {
    alert(`No se encontró ninguna tarea con el ID ${idEditar}.`);
  }

  document.getElementById('id-editar').value = '';
  document.getElementById('estado-editar').value = 'terminado';
}

function eliminarTarea(event) {
  event.preventDefault();

  const idEliminar = parseInt(document.getElementById('id-eliminar').value);

  const tareas = leerTareas();
  const tareasFiltradas = tareas.filter(tarea => tarea.ID !== idEliminar);

  if (tareasFiltradas.length < tareas.length) {
    // Actualizar las ID de las tareas restantes
    tareasFiltradas.forEach((tarea, index) => {
      tarea.ID = index + 1;
    });

    guardarTareas(tareasFiltradas);
    mostrarTareas();
    alert(`La tarea con ID ${idEliminar} ha sido eliminada correctamente.`);
  } else {
    alert(`No se encontró ninguna tarea con el ID ${idEliminar}.`);
  }

  document.getElementById('id-eliminar').value = '';
}

// Obtener la fecha actual en formato "día/mes/año"
function obtenerFechaActual() {
  const fechaActual = new Date();
  const dia = fechaActual.getDate();
  const mes = fechaActual.getMonth() + 1;
  const anio = fechaActual.getFullYear();

  return `${dia}/${mes}/${anio}`;
}

// Cargar las tareas al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  mostrarTareas();
});

// Escuchar eventos de los formularios
document.getElementById('formulario-tarea').addEventListener('submit', agregarTarea);
document.getElementById('formulario-filtrar').addEventListener('submit', filtrarTareas);
document.getElementById('formulario-editar').addEventListener('submit', editarTarea);
document.getElementById('formulario-eliminar').addEventListener('submit', eliminarTarea);
