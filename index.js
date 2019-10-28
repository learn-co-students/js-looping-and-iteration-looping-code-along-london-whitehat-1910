// Code your solutions in this file
writeCards = (cardsArr, event) => { 
    let arr = new Array(cardsArr.length)
    for(let i = 0; i < cardsArr.length; i++) {
        arr[i] = `Thank you, ${cardsArr[i]}, for the wonderful ${event} gift!`
    }

    return arr
}

function countdown(num) {
    while(num >= 0 ) { 
        console.log(num)
        num--
    }
}