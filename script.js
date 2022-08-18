let enteredKeys = []
const wordOfTheDay = ['m','e','i','o','s']
const allowesKeys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "enter", "backspace"]
console.log(wordOfTheDay)

let screen = document.getElementById('tela')
let screenChildren = screen.children

//chamar essa função toda vez que o enter for apertado, desabilitando os slots com conteudo
const unableScreenSlots = () =>{
    for (let child of screenChildren){
        if(child.value != ''){
            child.setAttribute('disabled', '')
        }
    }
    if(enteredKeys.toString() == wordOfTheDay.toString()){
        for (let child of screenChildren){
            child.setAttribute('disabled', '')
        }
        setTimeout(() => {
            alert('Parabens!!!!')
        }, 1000);
        
    }

    enteredKeys = []
}

document.addEventListener('keydown', function(event){
    const key = (event.key).toLowerCase()

    if(allowesKeys.includes(key)){
        if (enteredKeys.length < 5 && key != 'backspace' && key != 'enter'){
            for (let child of screenChildren){
                        if(child.value == '' && !child.getAttributeNames().includes('disabled')){
                            child.value = key
                            break
                        }
            }
            enteredKeys.push(key)
            console.log(enteredKeys)
        }
        
        if (key == 'enter'){
            insertKeys(enteredKeys)
            unableScreenSlots()
            enteredKeys = []
        }
        
        if (key == 'backspace'){
            for (let child of screenChildren){
                if(child.value != '' && child.nextElementSibling?.value == '' && !child.getAttributeNames().includes('disabled')){
                    child.value = ''
                    break
                }
            }

            enteredKeys.pop()
            console.log(enteredKeys)
        }
    }
})

let contScreenChild = 0

const insertKeys = (enteredKeys) => {
    if (enteredKeys.length < 5){
        console.log('palavra incompleta')
    } else {
        for (let each of enteredKeys){
            

            if (wordOfTheDay.includes(each)){
                if (enteredKeys.indexOf(each) == wordOfTheDay.indexOf(each)){
                    console.log(`${each} tá no lugar certo`)
                    screen.children[contScreenChild].classList.add('botao-acerto') // arrumar
                    contScreenChild++
                } else {
                    console.log(`${each} tá no lugar errado`)
                    screen.children[contScreenChild].classList.add('botao-quaseacerto')
                    contScreenChild++
                    //se incluir mas não bater o index, pinta de amarelo
                }

            } else {
                console.log(`${each} nem existe`)
                screen.children[contScreenChild].classList.add('botao-erro')
                contScreenChild++
                //pinta a celular de cinza e vai para a linha de baixo
            }
        }
        
    }
}