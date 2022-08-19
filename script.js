let enteredKeys = []
const wordOfTheDay = ['m','a','i','r','a']
let wordOfTheDayTest = [...wordOfTheDay]
const allowesKeys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "enter", "backspace"]
console.log(wordOfTheDay)

let screen = document.getElementById('tela')
let screenChildren = screen.children

//para adicionar event-listener nas teclas da tela
document.querySelectorAll(".key-item").forEach((el) => {
    el.addEventListener('click', function(el) {
        console.log(el.srcElement.textContent.toLowerCase())
    })
})




//chamar essa função toda vez que o enter for apertado, desabilitando os slots com conteudo
const unableScreenSlots = () =>{
    for (let child of screenChildren){
        if(child.value != ''){
            child.setAttribute('disabled', '')
        }
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
        
        if (key == 'enter' && enteredKeys.length == 5){
            insertKeys(enteredKeys)
            unableScreenSlots()
            enteredKeys = []
            wordOfTheDayTest = [...wordOfTheDay]
        }
        
        if (key == 'backspace'){ //
            for (let child of screenChildren){
                if(child.value != '' && child.nextElementSibling?.value == '' && !child.getAttributeNames().includes('disabled')){
                    child.value = ''
                }
            }

            enteredKeys.pop()
            console.log(enteredKeys)
        }
    }
})

let contScreenChild = 0

const insertKeys = (enteredKeys) => {
    if(enteredKeys.toString() == wordOfTheDayTest.toString()){
        for (let child of screenChildren){
            child.value = ''
            child.setAttribute('disabled', '')
            child.classList.remove('botao-quaseacerto')
            child.classList.remove('botao-erro')
            child.classList.add('botao-acerto')
        }
        setTimeout(() => {
            alert('Parabens!!!!')
            location.reload();
        }, 500);
        
    } else {
        let count = 0
        for (let each of enteredKeys){

            if (wordOfTheDayTest.includes(each)){
                if (each == wordOfTheDayTest[count]){
                    console.log(`${each} tá no lugar certo`)
                    screen.children[contScreenChild].classList.add('botao-acerto') // arrumar
                    wordOfTheDayTest[count] = '*'
                    
                }else {
                    console.log(`${each} tá no lugar errado`)
                    screen.children[contScreenChild].classList.add('botao-quaseacerto')
                    wordOfTheDayTest[count] = '*'
                    //se incluir mas não bater o index, pinta de amarelo
                }
                contScreenChild++
                count++
                
            }   else {
                    console.log(`${each} nem existe`)
                    screen.children[contScreenChild].classList.add('botao-erro')
                        count++
                        contScreenChild++
                    //pinta a celular de cinza e vai para a linha de baixo
            }
        }
    }
}