const { test } = require('picomatch');
let capitalize=require('../capitalize');
const { default: expect } = require('expect');

test("change jack to Jack",()=>{

    expect(capitalize("jack")).toMatch("Jack")
})

test("Changer her to Her",()=>{

expect(capitalize("her")).toMatch("Her")

})