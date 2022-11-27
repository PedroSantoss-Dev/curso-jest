const NumerosAleatorios = require('./index')


describe('testar  numeros aleatorios', () => {
    it('Quando chamada deve verificar se o valor maior que valor minimo', () => {
        expect(NumerosAleatorios(1,100)).toBeGreaterThan(0)
    });
    it('Quando chamada deve verificar se o valor é maior que ou igual o valor minimo', () => {
        expect(NumerosAleatorios(1,100)).toBeGreaterThanOrEqual(1)
    });
    it('Quando chamada deve verificar se o valor e igual ou maior que valor minimo', () => {
        expect(NumerosAleatorios(1,100)).toBeLessThan(101)
    });
    it('Quando chamada deve verificar se o valor e igual ou maior que valor minimo', () => {
        expect(NumerosAleatorios(1,100)).toBeLessThanOrEqual(100)
    });
})