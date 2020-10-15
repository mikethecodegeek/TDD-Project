let reverseString = require('../problems/reverse-string')

const chai = require('chai'), spies = require('chai-spies');
const { assert } = require('console');
chai.use(spies);
const should = chai.should(), expect = chai.expect;


let assertNode = require('assert');

describe('Reverse String function - Chai Chai', ()=>{
    it('should reverse a string and return it', ()=>{
        expect(reverseString('fun')).to.equal('nuf');
    });
    it('should return type of string', ()=>{
        expect(reverseString('fun')).to.be.a('string')
    });
})

describe('Reverse String function Assert!!!!!!', ()=>{
    it('should reverse a string and return it', ()=>{
        assertNode.strictEqual(reverseString('fun'), 'nuf');
    });
    // it('should return type of string', ()=>{
    //     expect(reverseString('fun')).to.be.a('string')
    // });
})