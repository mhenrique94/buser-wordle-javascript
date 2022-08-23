const wordOfTheDay = getWord(wordsList)

let wordOfTheDayTest = wordOfTheDay.map(obj => obj)
const allowesKeys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "enter", "backspace", "⇦"]

let screen = document.getElementById('screen')
let screenChildren = screen.children

//chamar essa funcao toda vez que o enter for apertado, desabilitando os slots com conteudo
const unableScreenSlots = () =>{
    for (let child of screenChildren){
        if(child.value != ''){
        }
    }

    enteredKeys = []
}

const receiveKey = (event) =>{
    if (event.key){
        key = event.key.toLowerCase()
    } else {
        key = event.currentTarget.outerText.toLowerCase()
    }

    // insere a entrada apenas nos quadrados vazios, respeitando o limite de 5 caracteres
    if(allowesKeys.includes(key)){
        if (enteredKeys.length < 5 && key != 'backspace' && key != 'enter' && key != '⇦'){
            for (let child of screenChildren){
                        if(child.value === '' && !child.getAttributeNames().includes('disabled')){
                            child.value = key.toUpperCase()
                            break
                        }
            }
            enteredKeys.push(key)
        }
        // chama a função de análise e tratamento após enter, caso o usuário tenha entrado com os 5 caracteres
        if (key === 'enter' && enteredKeys.length === 5){
            insertKeys(enteredKeys)
            unableScreenSlots()
            enteredKeys = []
            wordOfTheDayTest = wordOfTheDay.map(obj => obj)
        }
        
        if (key === 'backspace' || key === '⇦'){ //
            for (let child of screenChildren){
                if(child.value != '' && child.nextElementSibling?.value === '' && !child.getAttributeNames().includes('disabled')){
                    child.value = ''
                }
            }
            enteredKeys.pop()
        }
    }
}

let contScreenChild = 0

const insertKeys = (enteredKeys) => {
    
    if(enteredKeys.toString() === wordOfTheDayTest.toString()){
        for (let child of screenChildren){
            child.value = ''
            child.setAttribute('disabled', '')
            child.classList.remove('button-almost')
            child.classList.remove('button-error')
            child.classList.add('button-correct')
        }

        let final = document.getElementById('final')
        let finalMsg = document.createTextNode('Acertou, parabéns!!!')
        final.appendChild(finalMsg)
        setTimeout(() => {
            for (let child of screenChildren){
                child.value = '!'
            }

            final.classList.add('ativo')
            
        }, 500);
        
    } else {
        let count = 0
        let actualKey = ''

        let countEachTyped = 0
        //inicia pela marcaçã dos caracteres na posição correta
        for(let eachTyped of enteredKeys){
            actualKey = document.getElementsByClassName(`key${eachTyped.toUpperCase()}`)
            if (eachTyped === wordOfTheDayTest[countEachTyped]){
                screen.children[contScreenChild].classList.add('button-correct')
                screen.children[contScreenChild].setAttribute('disabled', '')
                wordOfTheDayTest[countEachTyped] = '*'
                actualKey[0].classList.add('key-correct')
            }
            contScreenChild++
            countEachTyped++
        }
        contScreenChild = contScreenChild-5
        for (let each of enteredKeys){
            actualKey = document.getElementsByClassName(`key${each.toUpperCase()}`)
            if (each === wordOfTheDayTest[count]){
                screen.children[contScreenChild].classList.add('button-correct')
                screen.children[contScreenChild].setAttribute('disabled', '')
                wordOfTheDayTest[count] = '*'
                actualKey[0].classList.add('key-correct')
            } else {
                if (wordOfTheDayTest.includes(each)){
                    screen.children[contScreenChild].classList.add('button-almost')
                    screen.children[contScreenChild].setAttribute('disabled', '')
                    wordOfTheDayTest[wordOfTheDayTest.lastIndexOf(each)] = '*'
                    actualKey[0].classList.add('key-almost')
                    //se incluir mas nao bater o index, pinta de amarelo
                }
                else {
                    screen.children[contScreenChild].classList.add('button-error')
                    screen.children[contScreenChild].setAttribute('disabled', '')
                    actualKey[0].classList.add('key-error')
                    //pinta a celular de cinza e vai para a linha de baixo
                }
            }
        
            contScreenChild++
            count++
        }
        wordOfTheDayTest = wordOfTheDay.map(obj => obj)
    }

    if (screenChildren[29].value != '' && screenChildren[29].value != undefined){
        setTimeout(() => {
            for (let child of screenChildren){
                child.setAttribute('disabled', '')
                child.classList.remove('button-almost')
                child.classList.remove('button-error')
                child.classList.remove('button-correct')

                child.classList.add('inactive')
                child.value = '!'
            }
            
            let final = document.getElementById('final')
            let finalMsg = document.createTextNode('Errou feio, hein?! Tente novamente!')
            final.classList.add('inactive')
            final.appendChild(finalMsg)
            
        }, 500);
    } 
}

document.addEventListener('keydown', (event) => {receiveKey(event)})
document.querySelectorAll(".key-item").forEach((el) => {
    el.addEventListener('click', (event) => {receiveKey(event)})
})