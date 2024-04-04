
let capitalize=require('../capitalize');
const { default: expect } = require('expect');

test("change jack to Jack",()=>{

    expect(capitalize.capitalize("jack")).toMatch("Jack")
})

test("Changer her to Her",()=>{

expect(capitalize.capitalize("her")).toMatch("Her")

})

