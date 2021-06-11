const { suma, createPerson } = require('./../common');

describe('Pruebas de sum', () => {

    test('Debería sumar', () => {
        /// Patrón AAA 
        // Arrange + ACT
        const rta = suma(5, 3);
        // Assert
        expect(rta).toBe(8);
        expect(suma(4, 3)).toBe(7);
        expect(suma(1, 0)).toBe(1);
    })

    test('Debería ser mayor que', () => {
        expect(suma(4, 3)).toBeGreaterThanOrEqual(7);
        expect(suma(1, 1)).toBeGreaterThan(1);
    })
})

describe('Pruebas de createPerson', () => {
    test('Deberia crear un obj persona a partir de parámetros',() => {
        const obj = createPerson('Alberto',19);
        expect(obj).toStrictEqual({name:'Alberto',age:19})
    })
})