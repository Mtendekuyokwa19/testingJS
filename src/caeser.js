const { SourceStore } = require("istanbul-lib-source-maps");


let caeser=(()=>{

    let alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    let encryptedVersion=[];
    function cipher(word,shiftKey) {
    moveByShiftKey(shiftKey);
    
    }
    
    function equivalentLetter(word,shiftKey){
        

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


return {cipher,equivalentLetter,checkIfIsArray,moveByShiftKey}
})()



module.exports=caeser;