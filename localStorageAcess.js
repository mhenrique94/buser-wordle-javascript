const getLocalStorage = () => {
    let current =  localStorage.getItem('currentWord')
    return current
}

let setLocalStorage = (command, word) => {
    if (command === 'writeWord'){
        localStorage.setItem('currentWord', word)
    }

    if (command === 'setTyped'){
        localStorage.setItem('currentTyped', word)
    }

}