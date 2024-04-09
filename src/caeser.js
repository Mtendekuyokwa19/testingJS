const { SourceStore } = require("istanbul-lib-source-maps");


let caeser=(()=>{

    let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let encryptedVersion=[];
    function cipher(word,shiftKey) {
        let cipherWord="";
         word=word.split("");
        word.forEach(character => {
    if(isAlpha(character)){
        cipherWord+=equivalentLetter(character,shiftKey)
    }
    else{
        cipherWord+=character;
    }
    
});
    return cipherWord;
    }
    
    function equivalentLetter(letter,shiftKey){
        moveByShiftKey(shiftKey);   
        for (let index = 0; index < alphabet.length; index++) {
            if (letter===alphabet[index]) {
                
                return encryptedVersion[index]
            }
            
        }
    }

    function moveByShiftKey(shiftKey){
   
       
        let cutElement=alphabet.slice(0,shiftKey);
  let remainingElements=alphabet.slice(shiftKey,alphabet.length)

      encryptedVersion=(remainingElements.concat(cutElement))

      return encryptedVersion.toString()
    }

    function checkIfIsArray(array){

        return Array.isArray(array)
    }
function isAlpha(character) {
    if((character.charCodeAt(0)>=65&&character.charCodeAt(0)<=90)||character.charCodeAt(0)>=97&&character.charCodeAt(0)<=122){
        return true
    }
    return false
}

return {cipher,equivalentLetter,checkIfIsArray,moveByShiftKey,isAlpha}
})()



module.exports=caeser;