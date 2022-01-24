const {stub} = require("sinon")
const jwt = require("jsonwebtoken")
const {middleWareJWT} = require("../../Middleware/Middleware")


describe('User', () => {
    const request = {
        headers: {
            authorization: "asdassaddas"
        }
    }
    const res = {
        
    }
    const next = () => {}
    describe('Middleware asdasdasdasd', () => {
        it('Must be called one', function(){
        const callJwt = stub(jwt, "decode")
        callJwt.resolves(true)
        middleWareJWT(request, res, next)
        expect(callJwt.calledOnce).toBeTruthy()
        }) 
    })
});