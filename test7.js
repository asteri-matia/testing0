// ES5 Method
function filterNeg(arr) {
  function noNegs(value) {
    return value > 0;
  }

  let filterA = arr.filter(noNegs)
  console.log(filterA)
}

// ES6 Method
let posFilter = (arr) => arr.filter(value => value >= 0)


let negFilter = (arr) => arr.filter(value => value <= 0)