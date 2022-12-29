alert('Parar ver el glorario porfavor abrir las herramientas de desarrollo')

   console.log(`
    //map
   //es un método incorporado en los arreglos, para iterar a través de
   //los elementos dentro de una colección de arreglos
  
   //Este método toma una función callback, que se llama por cada nuevo elemento sobre el que se itera.
  //no aparecera como valor undefinido 
   let prefijos = ["super", "spider", "ant", "iron"]
    let sufijo = "man";

    let nombresCompletos = prefijos.map(prefijo => prefijo + sufijo);

    console.log(nombresCompletos);

    //////////////////////////////////////////////////////////////////////
      // FOR
    // es un bucle que consiste en tres expresiones dentro de parentesis y separadas
    //for ([expresion-inicial]; [condicion]; [expresion-final])sentencia
    // esa seria el ejmplo con el cual podemos crear un for
    //En la exprecion inicial esta se utliza como una variable contador, al final el resultado es descartado
    // La condicion evaluada para saber si se ejecuta o no 
    //En la expresion final se usa para incrementar o cambiar el numero del contador 
    //la sentencia se ejecuta mientras la condicion evaluada sea verdadera
    //ejemplo:
let n;
    for (let i = 0; i < 10; i++) {//se inicializa la variable con let
        n += i;
        console.log(i);
      }
      `);
      //////////////////////////////////////////////////////////////////////////
console.log(`
         // FOR...IN
    //la instrucion se repite sobre todas las propiedades de un objeto que este codificado por cadena
    //for (variable in objeto) instrucción
    
    for (variable in objeto){
        instrucción }
        //la variable es la asignacion de un nombre a la propiedad diferntes a la variable
        // el objeto cuyas propiedas enumerables no son simbolos 
    
    
        // Imprimir las propiedades de un objeto en la consola
        var obj = {a: 1, b: 2, c: 3};
    
        for (const prop in obj) {
          console.log(obj.prop + "="+obj[prop]};
        }
        
        // Modificar las propiedades de un objeto
        var obj = {a: 1, b: 2, c: 3};
        for (const variable in obj) {
        obj[variable] = obj[variable] * 2;
        }
        console.log(obj); 
       //En general, es mejor no agregar, modificar o eliminar propiedades del objeto durante la iteración, 
       //aparte de la propiedad que se está visitando actualmente. No hay garantía de si se visitará una propiedad agregada

       /////////////////////////////////////////////////////////////////////////
          //FOR...OF
    // ejecuta un bloque de codigo para cada elemento de un objeto iterable
 
    for (variable of iterable) {
        statement
      }
    //variable corresponde al valor asignado
    //iterable objeto cuyas propiedades enumerables son repetidas
    //ejemplos

    //Iterando un Array

    let iterable= [10, 20, 30];

    for (let value of iterable) { // en vez de let utlizar const si no se va a modificar la variable 
      value += 1;
      console.log(value);
    }
    
    //Iterando un String

    let iterable1 = "boo";

    for (let value of iterable) {
    console.log(value);
    }

    //Iterando un TypedArray
    let iterable2 = new Uint8Array([0x00, 0xff]);

    for (let value of iterable) {
     console.log(value);
    }

    //Iterando un Set

    let iterable3 = new Set([1, 1, 2, 2, 3, 3]);

    for (let value of iterable) {
     console.log(value);
    }

    //Iterando un objeto

    (function() {
        for (let argument of arguments) {
          console.log(argument);
        }
      })(1, 2, 3);

    //Hay muchos mas ejemplos sobre defernetes tipos esos son los mas principales

    //la diferencia sobre for..in itera sobre cualquier propiedad de un onjeto
    //for..of es especifica para colecciones y no para los onjetos 

///////////////////////////////////////////////////////////////////////////////
   //WHILE
    // es un bucle que se ejcuta una sentencia mientras la condicion sea verdadera

    while (condicion)
    sentencia

    //condicion que se evalua antes de cada paso del bucle si esta se ejecuta verdadera pasa ala s siguiente
    //sentencia se ejecuta mientras la condicion se evalua como verdadera

    n = 0;
    x = 0;
    while (n < 3) {
      n ++;   //al ser verdadera se ejcuta esto
      x += n;

    ////////////////////////////////////////////////////////////////////////////
       //DO..WHILE
    // es un bucle donde se ejecuta una sentencia especifica hasta que la condicion que se comprueba sea falsa

    do
        sentencia
    while (condición);

    //una sentencia que se ejecuta al menos una ves y es reejcuatada cadavez que la condicion sea verdadera
    //condicion se evalua despues de cada paso por el bucle si la condicion es verdadera se reejecuta 

    //ejemplos 
    do {
        i += 1;
        document.write(i);
     } while (i < 5);
    
////////////////////////////////////////////////////////////////////////////////
   //forEach
   //El metodo forEach() llama a una  función callback específica una vez por cada elemento 
   //sobre el que itera dentro de un arreglo
   let numeros = [3, 6, 8, 10, 12]
   let impar = 3;
   
   //El método forEach no regresa un nuevo arreglo al igual que lo hacen otros iteradores tal como
   //map . En cambio, el método devuelve el valor  undefined por sí solo. Por lo tanto
   // no se puede encadenar como los otros métodos

   numeros.forEach(function(numero) {
       if (numero === impar) {
           numeros.shift() 
       }
   })

   console.log(numeros);
 }
   `);


