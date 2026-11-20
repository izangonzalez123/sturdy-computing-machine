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
} function contarvocales(){
    let frase= prompt("escribe una frase");
    let a="aeiouáéíóú";
    let contador_vocales=0;
    for(let i=0; i<frase.length; i++){
        for(let j=0; j<a.length; j++){
            if(frase[i]===a[j]){
            contador_vocales=contador_vocales+1;
            }
           
        }
    
    }
    console.log("vocales encontradas "+ contador_vocales);

}
function Fibonacci(){
    let s=[0,1];
    for(let n=2; n<20; n++){
        s[n]=s[n-1]+s[n-2];
        s.push(s[n]);
    }
    console.log("secuncia finonacci es: "+ s);
}