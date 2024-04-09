

const { test } = require('picomatch');
const caeser=require('../caeser');

test("changing of word jack to MDFN",()=>{

    expect(caeser.cipher("jack",3)).toBe("MDFN")

})

test ("changing the word speed to YVKKJ",()=>{

    expect(caeser.cipher("speed",6)).toBe("YVKKJ")
})

test("return equivalent letter. A => C",()=>{

    expect(caeser.equivalent("A",3)).toBe("c")
})

test("return equivalent letter B=>F",()=>{
    expect(caeser.equivalent("B",4)).toBe("F")
})

test("check if its array",()=>{

    expect(caeser.checkIfIsArray(["A",4,1,4])).toBeTruthy()
})

test ("check if its a string array [2,4,5,2]",()=>{
    let array="ABCD".split('')
    expect(caeser.checkIfIsArray(array)).toBeTruthy()
})

test("bring out the alphabet for the letters",()=>{

    expect(caeser.moveByShiftKey(3)).toBe("EFGHIJKLMNOPQRSTUVWXYZABCD")
})

test("bring out the alphabet for letters 2",()=>{
    expect(caeser.moveByShiftKey(8)).toBe("GHIJKLMNOPQRSTUVWXYZABCDEF")
})