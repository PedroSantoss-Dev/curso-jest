 const Media = require('./ex01')
describe('este bloco realiza teste de media  escolar', () => {
    it('Quando chamada Deve verificar se foi aprovado com boa nota ',() => {
        expect(Media(5,8,8,10)).toMatch(/Você foi aprovado com media/)
    })
    it('Quando chamada Deve verificar se foi aprovado com uma nota mediana ',() => {
        expect(Media(4,8,4,5)).toMatch(/por pouco voçê não passa/)
    })
    it('Quando chamada Deve verificar se foi reprovado',() => {
        expect(Media(5,1,6,1)).toMatch(/reprovado/)
    })
    it('Quando chamada Deve verificar se é nulo',() => {
        expect(Media()).toBeNull();
    })
})