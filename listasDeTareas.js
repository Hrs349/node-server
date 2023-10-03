const readlineSync = require("readline-sync");

let listaDeTareas = [];
function crearTarea(){
  if(listaDeTareas == 0){
    agregarTarea()
  }else{
    console.table(listaDeTareas)
    agregarTarea()
  }
}
function agregarTarea() {
 const Tareas = readlineSync.question(
  "Escriba el numero de numero de tareas, si esta iniciando la lista coloque el numero (1): "
 );
 const Descripcion = readlineSync.question("Describa su tarea: ");
 if (Tareas === "" || Descripcion === "") {
  return console.log(" Debe ingresar un numero de tarea y una descripcion");
 } else {
  listaDeTareas.push({
   Tareas: parseInt(Tareas),
   Descripcion,
   Estado: "Incompleta",
  });
  console.log("Nueva tarea agregada con exito ☺");
  verlista();
 }
}

function eliminartarea(nTarea) {
 if (listaDeTareas == 0) {
  console.log("No se han agregado tareas para poder eliminar");
  barramenu();
 } else {
  const Tareasb = readlineSync.question("indique Numero de tarea a eliminar ");
  if (Tareasb - 1 >= 0 && Tareasb - 1 < listaDeTareas.length) {
   let numtarea = listaDeTareas.filter(
    (numero) => numero.Tareas !== (nTarea = parseInt(Tareasb))
   );
   listaDeTareas = numtarea;
   verlista();
   console.log(`tarea numero ${Tareasb} eliminada`);
  } else {
   console.error(`El numero de tarea ${Tareasb} no esta en la lista`);
  }
 }
}
function completarTarea() {
 if (listaDeTareas == 0) {
  console.log("Debe agregar una tarea para poder completarla");
  return barramenu();
 } else {
  const TareasC = readlineSync.question("indique Numero de tarea a completar ");
  listaDeTareas[TareasC - 1].Estado = "completada";
  console.table(listaDeTareas);
  console.log(`tarea numero ${TareasC} completada`);
 }
}
function verlista() {
 if (listaDeTareas == 0) {
  console.log("no se han agregador tareas");
 } else console.table(listaDeTareas);
 barramenu();
}
function salirApp() {
  return new Promise((resolve, reject) => {
   console.log("Saliendo de la aplicacion...");
   setTimeout(() => {
    resolve(console.log("Se ha cerrado la aplicacion exitosamente"));
   }, 3000);
  });
 }
function abrir() {
 return new Promise((resolve, reject) => {
  console.log("Cargando aplicacion...");
  setTimeout(() => {
   resolve(barramenu());
  }, 4000);
 });
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
   verlista();
   barramenu();
   break;
  case "2":
   crearTarea();
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
   salirApp();
   break;
  default:
   console.error("esa opcion no es valida");
   barramenu();
   break;
 }
}

abrir();
