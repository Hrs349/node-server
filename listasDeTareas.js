const readlineSync = require("readline-sync");

let listaDeTareas = [];

function agregarTarea() {
 console.table(listaDeTareas);
 const Tareas = readlineSync.question(
  "Escriba el numero de numero de tareas, si esta iniciando la lista coloque el numero (1): "
 );

 const Descripcion = readlineSync.question("Describa su tarea: ");

 listaDeTareas.push({
  Tareas: parseInt(Tareas),
  Descripcion,
  Estado: "Incompleta",
 });

 console.log("Nueva tarea agregada con exito ☺");
 console.table(listaDeTareas);
}

function eliminartarea(nTarea) {
 console.table(listaDeTareas);
 const Tareasb = readlineSync.question("indique Numero de tarea a eliminar ");
 if (Tareasb - 1 >= 0 && Tareasb - 1 < listaDeTareas.length) {
  let numtarea = listaDeTareas.filter(
   (numero) => numero.Tareas !== (nTarea = parseInt(Tareasb))
  );

  listaDeTareas = numtarea;
  console.table(listaDeTareas);
  console.log(`tarea numero ${Tareasb} eliminada`);
 } else {
  console.error(`El numero de tarea ${Tareasb} no esta en la lista`);
 }
}
function completarTarea() {
 console.table(listaDeTareas);

 const TareasC = readlineSync.question("indique Numero de tarea a completar ");

 listaDeTareas[TareasC - 1].Estado = "completada";
 console.table(listaDeTareas);
 console.log(`tarea numero ${TareasC} completada`);
}

function barramenu() {
 console.log("Menú");
 console.log("1-) Ver lista de tareas");
 console.log("2-) Agregar Tarea");
 console.log("3-) Estatus Completar");
 console.log("4-) Eliminar Tarea");
 console.log("5-) Salir de la app");

 const opciones = readlineSync.question(`elija una opcion del menu:`);
 switch (opciones) {
  case "1":
   console.table(listaDeTareas);
   barramenu();
   break;
  case "2":
   agregarTarea();
   barramenu();
   break;
  case "3":
   completarTarea();
   barramenu();
   break;
  case "4":
   eliminartarea();
   barramenu();
   break;
  case "5":
   break;
  default:
   console.error("esa opcion no es valida");
   barramenu();
   break;
 }
}

barramenu();
