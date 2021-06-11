const { reverseStr } = require('./../string');

describe('Prueba de string', () =>{

    test('Debería devovler la cadena al revés', () => {
        expect(reverseStr('hola')).toBe('aloh');
        expect(reverseStr('Hola mundo')).toMatch(/odnum/);
    })

})
