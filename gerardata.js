// gerar data a partir de hoje até daqui 920 dias (quantidade de palavras possíveis)

let hoje = new Date()

for (var i = 0; i < 920; i++){
    let atualizado = `${hoje.getDate()}/${hoje.getMonth()}/${hoje.getFullYear()}`
    hoje.setDate(hoje.getDate()+1)
    console.log(atualizado)
}