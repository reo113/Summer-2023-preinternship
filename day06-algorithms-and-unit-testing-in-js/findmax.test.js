const findMax = require('./findmax');
describe('findMAx should take an array of numbers and return the largest number',()=>{
    test('findMax([]) => null', ()=>{
    expect(findMax([])).toBeNull();
    })
    
    test('findMax([1])=>',() =>{
        expect(findMax([1])).toBe(1);
    })

    test('findMax([1,5,4,3,2])=>',() =>{
        expect(findMax([1,5,4,3,2])).toBe(5);
    })
})