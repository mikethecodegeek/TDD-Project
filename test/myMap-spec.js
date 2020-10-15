const myMap = require('../problems/myMap.js');
const chai = require('chai'), spies = require('chai-spies');
const { assert } = require('console');
chai.use(spies);
const should = chai.should(), expect = chai.expect;

describe('myMap Function', () => {
  let arr = [1,2,3]
  let arr2 = arr
  let test = myMap( arr, (num) => {
    return num * 2;
  })

  it('does not mutate array argument', () => {
    expect(test).to.not.equal(arr2)
  })

  it('does not use built in map method', () => {
    let mapfunction = chai.spy(Array.prototype, 'map')
    expect(mapfunction).to.not.have.been.called();
  })

  it('is invoked once for each element', () => {

  })

})
