function nombre1(){
    const nombre = "Izan Gonzalez";
    let edad= 17;
    let estudiante= true;
    console.log(nombre);
    console.log(edad);
    console.log(estudiante);
}
function operadores(){
    let a= 2;
    let b= 4;
    c=(a + b);
    d=(b - a);
    e=(a * b);
    f=(b / a);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);
}
function concatenar(){
    a="pajarito";
    b=" piador";
    c=(a+b);
    console.log(c);
}
function mayordeedad(){
    edad= prompt("dame tu edad");
    let a = Number(edad);
    if(a>=18){
        console.log("eres mayor de edad")
    }
    else{
        console.log("eres menor de edad")
    }
}
function dimelahora(){
   const fecha= new Date();
   console.log(fecha.toLocaleString("es-ES"));
   console.log(fecha.toLocaleTimeString("es-ES"));
}