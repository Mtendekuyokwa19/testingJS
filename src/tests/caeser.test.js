
const caeser=require('../caeser.js');

test("changing of word jack to MDFN",()=>{

    expect(caeser.cipher("jack",3)).toBe("MDFN")

})

test ("changing the word speed to YVKKJ",()=>{

    expect(caeser.cipher("speed",6)).toBe("YVKKJ")
})



test("check if its array",()=>{

    expect(caeser.checkIfIsArray(["A",4,1,4])).toBeTruthy()
})

test ("check if its a string array [2,4,5,2]",()=>{
    let array="ABCD".split('')
    expect(caeser.checkIfIsArray(array)).toBeTruthy()
})

test("bring out the alphabet for the letters",()=>{

    expect(caeser.moveByShiftKey(4)).toMatch("E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D")
})

test("bring out the alphabet for letters 2",()=>{
    expect(caeser.moveByShiftKey(6)).toMatch("G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,A,B,C,D,E,F")
})