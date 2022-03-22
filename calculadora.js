function calculadora() {
    const operacao = Number(prompt('Escolha uma opção\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));
    
    if (!operacao || operacao >= 7) {
        alert('ERRO - Operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        if (!n1 || !n2) {
            alert('ERRO - Parâmetros inválidos!')
            calculadora();
        } else {
            function soma () {
                resultado = n1 + n2;
                alert(`O resultado da soma de ${n1} mais ${n2} é: ${resultado}.`);
                novaOperacao();
            }
    
            function subtracao () {
                resultado = n1 - n2;
                alert(`O resultado da subtração de ${n1} menos ${n2} é: ${resultado}.`);
                novaOperacao();
            }
            
            function multiplicacao () {
                resultado = n1 * n2;
                alert(`${n1} vezes ${n2} é: ${resultado}.`);
                novaOperacao();
            }
    
            function divisaoReal () {
                resultado = n1 / n2;
                alert(`${n1} dividido por ${n2} é: ${resultado}.`);
                novaOperacao();
            }
    
            function divisaoInteira () {
                resultado = n1 % n2;
                alert(`O resultado da divisão inteira de ${n1} por ${n2} é: ${resultado}.`);
                novaOperacao();
            }
    
            function potenciacao () {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é: ${resultado}.`);
                novaOperacao();
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - sim\n 2 - não');
    
                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até mais!')
                } else {
                    alert('ERRO - Digite uma opção válida');
                    novaOperacao();
                }
            }
            
            switch (operacao) {
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4:
                    divisaoReal();
                    break;
                case 5:
                    divisaoInteira();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}
    calculadora();