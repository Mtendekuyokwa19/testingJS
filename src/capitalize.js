

function capitalize(word){
    let wordArray=word.split("");
    wordArray[0].toUppercase();
   word= wordArray.join("");

    return word
}

module.export=capitalize;