const {add}=require('./math')


describe("if the function exist with correct parameters",()=>{
    test("does add works",()=>{
        expect(typeof add).toBe("function")
    })

    test("only contain two parameters",()=>{
        expect(add.length).toBe(2)
    })
})