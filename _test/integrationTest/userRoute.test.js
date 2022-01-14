const request = require("supertest")
const app = require('../../server');
const faker = require("@faker-js/faker")

describe('Users', () => {
    it('Able to get all users', (done) => {
        request(app).get("/get").then(res => {
            console.log(res.statusCode)
            expect(res.statusCode).toBe(200)
            done()
        })
    })
    it("able to create", (done) => {
        request(app).post("/user").send({
            username: faker.name.firstName()
        }).then(res => {
            console.log(res.statusCode)
            expect(res.statusCode).toBe(200)
            done()
        })
    })
})
