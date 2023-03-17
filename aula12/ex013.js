var agora = new Date()
var diaS = agora.getDay()
/*
0
1
2
3
4
5
6
*/
console.log(diaS)
switch (diaS) {
    case 0:
        console.log('Segunda')
        break;
    case 0:
        console.log('Terça')
        break;
    case 0:
        console.log('Quarta')
        break;
    case 0:
        console.log('Quinta')
        break;
    case 0:
        console.log('Sexta')
        break;
    case 0:
        console.log('Sábado')
        break;
    case 0:
        console.log('Domingo')
        break;
    default:
        console.log('[ERRO] dia inválido')
        break;
}