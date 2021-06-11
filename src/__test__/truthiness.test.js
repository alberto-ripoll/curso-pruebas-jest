const { isEven, divide } = require('./../truthiness');

describe('Prueba de isEven', () =>{

    test('Debería ser true con numeros pares', () => {
        expect(isEven(10)).toBeTruthy();
        expect(isEven(6)).toBeTruthy();
        expect(isEven(204)).toBeTruthy();
        expect(isEven(106)).toBeTruthy();
    })
    test('Debería ser false con numeros impares', () => {
        expect(isEven(3)).toBeFalsy();
        expect(isEven(1)).toBeFalsy();
        expect(isEven(103)).toBeFalsy();
        expect(isEven(1721)).toBeFalsy();
    })
})

describe('Prueba de divide', () =>{

    test('Debería calcular la división', () => {
        expect(divide(10,2)).toEqual(5);
        expect(divide(6,2)).toEqual(3);
        expect(divide(1,1)).toEqual(1);
        expect(divide(20,2)).toEqual(10);
    })

    // test('Debería dividir con 0', () => {
    //     expect(divide(10,0)).toBeNull();
    //     expect(divide(6,0)).toBeNull();
    //     expect(divide(1,0)).toBeNull();
    //     expect(divide(20,0)).toBeNull();
    // })

    test('Debería lanzar una exc con 0', () => {
        expect( () => divide(10,0)).toThrow();
        expect( () => divide(6,0)).toThrow();
        expect( () => divide(1,0)).toThrow();
        expect( () => divide(20,0)).toThrow();
    })

})