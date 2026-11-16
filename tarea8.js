function numerospares(){
    let suma=0;
    for (let i=0; i<=100; i+=2){
        console.log("i "+ i +" ");
     suma=suma+i
        console.log("suma "+ suma );
    }
}
function tablamultiplicar(){
    let n= prompt("introduce un número:");
    for(let j=1; j<=10; j++){
        t= n*j;
        console.log(`${n} x ${j} = ${t}`);
    }
}