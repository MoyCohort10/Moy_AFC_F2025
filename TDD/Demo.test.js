const {add,subtract} = require('./Demo')


//describe("",cb()) -- breaks the individal test down to see which one is actaully broke
describe("addirino tests", ()=>{

    //test(str,cb())
    test("add with 5+7 = 12",()=> {
        expect(add(1,3)).toBe(4)
    })

    test("adding 2 + 5 !== 7",() =>{
        expect(add(1,3)).not.toBe(5)
    })
})

//test about subtraction
//test multiplication

describe("something somethn",() =>{
    test("fewafewa",()=> {
        expect(subtract(2,3).toBe(1))
    })
})