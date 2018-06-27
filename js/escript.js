class Vista {
/*1.0  static mostrarLista(idElem, lista){ */
  mostrarLista(idElem){
    let lista = this.db;
    let vista = ` <ul>${lista.map( actual =>
                          `<li>${actual.nombre}</li>`
                 ).join('')} </ul> `;
    document.querySelector(idElem).innerHTML = vista;
  }
  add(obj){
    if( this.db === undefined ){
      this.db = [];
    }
    this.db.push(obj);
    
  }
}
/*
let vi = new Vista();
vi.add({nombre:"TDD - Test Driven Development"});
vi.add({nombre:"BDD - Behavior Driven Development"});
vi.mostrarLista('#pnlArg');

let vi2 = new Vista();
vi2.add({nombre:"CI - Continuous Integration"});
vi2.add({nombre:"CD - Continuous Delivery"});
vi2.add({nombre:"CD - Continuous Deployment"});
vi2.mostrarLista('#pnlArg02');
*/

let vi3 = new Vista();
vi3.add({nombre:"Ejercicio 01 - Lograr tener 2 listas de productos con precio  "});
vi3.add({nombre:"Ejercicio 02 - Que las listas esten verticales, una al lado de la otra en paneles  "});
vi3.add({nombre:"Ejercicio 03 - Usar google fonts para cambiar el tipo de letra  "});
vi3.add({nombre:"Ejercicio 04 - Poner una etiqueta header, segun tutoriales.  "});
vi3.add({nombre:"Ejercicio 05 - Poner una etiqueta footer, segun tutoriales.  "});
vi3.add({nombre:"Ejercicio 06 - Layout, lograr que el pie y el encabezado tengan coherencia  "});
vi3.add({nombre:"Ejercicio 07 - Layout, continuar investigando distintos layouts. "});
vi3.add({nombre:"Ejercicio 08 - Layout, tener ejemplos de distintos maquetados para cuando necesitemos mostrar a clidentes. "});
vi3.add({nombre:"Ejercicio 09 - Layout, RWD. "});
vi3.mostrarLista('#pnlArg03');


/*1.0 Vista.mostrarLista('#pnlArg',
                  [{nombre:"TDD"},
                   {nombre:"BDD"},
                   {nombre:"CI"},
                   {nombre:"CD"}]
                  );
*/
