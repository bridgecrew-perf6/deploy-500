const {stub, resetHistory} = require("sinon")
const {join} = require("path")
const { makeMockModels, } = require('sequelize-test-helpers')
const proxyquire = require("proxyquire")

const User = { findOne: stub() }
const mockModels = makeMockModels({User}, join(__dirname + "../../../Controller"))
const userController = proxyquire('../../Controller/User.js', {
    '../models/user.js': mockModels
  })

describe('User', () => {
    describe('Register', () => {
        const registerRequest= {
            username: 'abc@abc.com',
        }
        let res = {
            end: function(){},
            status: function(s) {this.statusCode = s; return this;},
            json: function(d) { },
        };
        let result
        
        beforeEach(async () => {
            User.findOne.resolves({message:"asdasdsd"})
            result = await userController.register(registerRequest, res)
          })
    
          afterEach(resetHistory)
          it('1# get Find One', () => {
            expect(result).toBeUndefined();
        });
    })
});