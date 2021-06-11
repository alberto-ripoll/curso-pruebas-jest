const { createArray } = require('./../array');

describe ('Pruebas de create array', () => {
    test('Debería crear un array', () => {
        expect(createArray('Hola', '')).toContain('H');
        expect(createArray('Hola', '').length).toEqual(4);
        expect(createArray('10:08:12', ':')).toContain('10');  
        expect(createArray('10:08:12', ':').length).toEqual(3);  

    })
})
