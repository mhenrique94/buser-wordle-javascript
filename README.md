# buser-wordle-javascript
##### Exercício utilizando como base o Wordle estático anterior, adicionando dinamismo e interação por meio de javascript.

Prévia:
https://mhenrique94.github.io/buser-wordle-javascript/

#### Observação:
    * A versão publicada corresponde à versão presente na branch MAIN;
    * Branch main: retorna um dia a cada vez que o jogo é carregado;
    * Branch versao_cliente: restringe o jogo à uma palavra por dia, contendo 920 dias de jogo contando a partir do dia 24/08/2022.


#### Recursos contemplados:
    * Inserção via teclado físico;
    * Verificação caractere a caractere;
    * Submete e apaga caracteres na ordem de inserção.
    * Inserção via teclado virtual (dentro da página);
    * Verificação de carateres respeitando a ocorrência de cada caractere na palavra do dia;
    * Palavra do dia ser gerada 1 vez a cada 24 horas;
    * Modo noturno;

#### Recursos faltantes:
    * Possibilidade de salvar dados locais e salvar as tentativas e não permitir que o usuário jogue mais de uma vez, ou se fechar tudo, continue onde parou;
    * Otimização do código (refatoração).

#### Requisitos do Roger:
    * fazer uma lista de palavras válidas inicial (umas 100, não precisa ser as 3 mil) e exibir a mensagem 'X não é uma palavra válida' quando a linha não tiver uma palavra da lista; / Não implementado
    * criar uma lista fixa com base nos dias, algo como: {20220819: 'ARROZ', 20220820: 'FESTA', 20220821: 'AMORA' ... com as 100 palavras iniciais; /CONCLUIDO
    * ao iniciar, pegar da data atual (new Date()) o valor YYYMMDD e achar a palavra do dia da estrutura acima. / CONCLUIDO

#### PONTO EXTRA SE TIVER
    * Mostrar um modal quando terminar de jogar;
    * Mostrar animação igual o jogo original na validação.
