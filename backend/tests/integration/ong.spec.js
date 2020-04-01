const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe ('ong', () =>{
    beforeEach(async()=>{
       await connection.migrate.latest() 
    })

    afterAll(async ()=>{
       await connection.destroy()
    })

    it('should be able to crate a new ong', async () =>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "Mom",
        	email: "teste@teste.com",
        	whatsapp: "39996985247",
        	city: "Bragança Paulista",
	        uf: "SP"
        })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)

    })
})