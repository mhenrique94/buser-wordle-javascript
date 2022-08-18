let enteredKeys = []
document.addEventListener('keydown', function(event){
    const key = (event.key).toUpperCase()
    
    if(allowesKeys.includes(key.toLowerCase())){
        if (key.toLowerCase() == 'enter'){
            insertKeys(enteredKeys)
        }
        if (key.toLowerCase() == 'backspace'){
            enteredKeys.pop()
        }
        if (enteredKeys.length < 5){
            enteredKeys.push(key)
            console.log(enteredKeys)
        }

    }
})

const wordOfTheDay = ['m','e','i','o','s']

const allowesKeys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "enter", "backspace"]


const insertKeys = (enteredKeys) => {
    if (enteredKeys.length < 5){
        console.log('palavra incompleta')
    }

}