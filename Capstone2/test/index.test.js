const {isPalidrome} = require('../src/index')


describe("descirption", ()=> {

    test("Palidrome",()=>{
        expect(typeof isPalidrome).toBe("function")
    })

    test("Palidrome",()=>{
        expect(isPalidrome.length).toBe(1)
    })

    test("Palidrome",()=>{
        expect(isPalidrome(undefined)).toBe(false)
    })

    test("Palidrome",()=>{
        expect(isPalidrome(null)).toBe(false)
    })

    test("Palidrome",()=>{
        expect(isPalidrome([])).toBe(false)
    })

    test("Palidrome",()=> {
        expect(isPalidrome("bob")).toBe(true)
    })

    test("paldrome", () => {
        expect(isPalidrome("racecar")).toBe(true)
    })

    test("Palidrome", () =>{
        expect(isPalidrome("Racecar")).toBe(true)
    })

    test("Palidrome",()=>{
        expect(isPalidrome("Apple")).toBe(false)
    })

    test("Palidrome",()=>{
        expect(isPalidrome("apple")).toBe(false)
    })

    test("Palidrome",()=>{
        expect(isPalidrome("Madam I'm Adam.")).toBe(true)
    })

})