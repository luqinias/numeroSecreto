alert('Bem vindos ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random() *10+1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Insira um número entre 1 e 40');
    
    if (chute == numeroSecreto) {
    break;
    } else {

        tentativas ++;

        if (chute < numeroSecreto){
            alert('O número secreto é maior, tente novamente!');
        } else {
            alert('O número secreto é menor, tente novamente!');
        }  
    }
    }
let palavraTentativa = tentativas == 1 ? 'tentativa' : 'tentativas' ;
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas } ${palavraTentativa}`);
