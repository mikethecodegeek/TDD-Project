const returnsThree = () => 3;
const reciprocal = num => {
    if (num <1 || num > 1000000) {
        throw TypeError('Im the wrong type I guess')
    }
    return 1/num;
}

module.exports = {
    returnsThree,
    reciprocal
}