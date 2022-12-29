addEventListener("DOMContentLoaded", (e)=>{

    // let form = document.querySelector("#myFrom");
    // let btn = document.querySelector("#btnListar");
    // let btnLimpiar = document.querySelector("#btnBorrar");
    // let lista = [];
    // form.addEventListener("submit", (e)=>{
    //     e.preventDefault();
    //     let datos = Object.fromEntries(new FormData(e.target));
    //     lista.push(Number(datos.num));
    //     form.reset();
    // })
    // btn.addEventListener("click", (e)=>{
    //     // console.log(...lista);
    //     lista.forEach((value, id) => {
    //         console.log(`El dato #${id} es ${value}`);
    //     });
    // })
    // btnLimpiar.addEventListener("click", (e)=>{
    //     lista = [];
    let lista = [];
    let suma = 0;
    let mult = 1;
    while(confirm("Desea ingresar datos")){
        lista.push(prompt());
    }
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] % 2 == 0){
            suma += Number(lista[i]);
        }else{
            mult *= Number(lista[i]);
        }
    }
    console.log(`La suma de los pares es: ${suma}`);
    console.log(`El producto de los impares es: ${mult}`);
    console.log(lista);


})