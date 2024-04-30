let nota = 12;

switch(Math.ceil(nota)){
   
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!!!');
           break;
           case 6: 
           case 5:
        console.log('Recuperacão!');
        break;
     case 4: 
     case 3:
        console.log('Reprovado!');
        break;
        case 1: 
        case 0:
            console.log('Muito Reprovado!');
            default:
                console.log('Nota invalida!')
}
console.log('Fim!!!')