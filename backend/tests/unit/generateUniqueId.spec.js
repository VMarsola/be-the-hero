const generateUniqueId = require('../../src/utils/generateUniqueId')

//passando categorias para o teste
describe('Generate unique ID', () => {
    it('Should generate a unique ID', ()=>{
        const id = generateUniqueId()

        expect(id).toHaveLength(8)
    })
})