

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

export function ingressoCinema (qtdInteira, qtdMeia, diadaSemana, nacionalidade){

    if (nacionalidade.toLowerCase() == "brasileira")
        return(qtdInteira + qtdMeia) * 5;

    else if (diadaSemana.toLowerCase() == 'quarta')
        return (qtdInteira + qtdMeia) * 14.25;
    
    else
        return (qtdInteira * 28.5) + (qtdMeia * 14.25)
}

export function freqCaracter (texto, caractere) {
    let qtd = 0;

    for (let letra of texto) {
        if (letra == caractere)
        qtd++
    }
    return qtd;
}

export function maiorNumero(numeros) {
    let maior = Number.MIN_VALUE;

    for (let item of numeros) {
        if (item > maior)
            maior = item;
    }
    return maior;
}




