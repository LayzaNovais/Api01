

export function somar (a, b){
    return a + b;
}

export function dobro (a){
    return a * 2;

}

export function media (n1,n2,n3){
    let a = n1+n2+n3;
    let b = a/3;
    return b;
}

export function temperatura (temp) {
    let a = temp >= 37.5;
    return a;
}

export function corPrimaria (cor) {
    let a = cor == "amarelo" || cor == "vermelho" || cor== "azul";
    return a;
}

export function ingressoCinema (quatint, quatmeias, dia, nacion){
    

    let a= quatint * 28.5;
    let b= quatmeias * (28.5/2);
    let situacao= a + b;
   

    if (nacion == "brasileira" )
       {
         let total = quatint * 5 + quatmeias * 5;
         situacao = total;
       }
            else if (dia == "quarta")
            {
                let valor=  a/2;
                situacao = valor + b;
                
            }

  
  return situacao;
}




