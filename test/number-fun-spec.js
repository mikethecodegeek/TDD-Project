let {returnsThree,reciprocal} = require('../problems/number-fun');

const assert = require('assert');

describe('Returns Three Function', ()=>{
    it('should probably return 3', ()=>{
        assert.strictEqual(returnsThree(),3)
    })
})

describe('I am a recipricol function and spelled wrong', ()=>{
    context('valid arguments', ()=>{
        it('makes recipricols cool again',()=>{
            assert.strictEqual(reciprocal(5),1/5)
        })
    })
    context('Some invalid stuff',()=>{
        it('should throw a new error when out of range',()=>{
            ()=> assert.strictEqual(reciprocal(-50),TypeError)
        })
    })
})