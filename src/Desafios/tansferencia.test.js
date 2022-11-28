
describe('Regra de transferencia internacional',() => {
    it('Quando chamada deve verificar se o valor e superior a 1000 ', () => {
        expect(1209).toBeGreaterThan(1000)
    });
    it('Quando chamada deve verificar se o valor é menor que  9999 ', () => {
        expect(5000).toBeLessThan(9999)
    });
    it('Quando chamada deve verificar se o valor é menor que  9999 ', () => {
        expect(5000).toBeLessThan(9999)
    });

})