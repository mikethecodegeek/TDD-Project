function myMap (array, cb) {
  // array.push(3);
  // return array
  let arr = [];
    for (let i = 0; i < array.length; i++) {
      arr.push(cb(array[i]))
    }
  return arr;
  };


  // const arr = [1, 2, 3];
  // const callback = el => el * 2;

  // console.log(myMap(arr, callback)); // prints [2,4,6]
  // console.log(arr); // prints [1,2,3]

  module.exports = myMap;
