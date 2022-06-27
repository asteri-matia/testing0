// ES5 Method / This one outputs an array containing each individual letter
// function delSpace2(str) {
//   let re = new RegExp(/[a-z0-9]/gi);
//   let del = str.match(re);
//   console.log(del)
// }

// ES5 Method
function delSpace(str) {
  console.log(str.replaceAll(' ', ''))
}

// ES6 Method
let remSpace = (str) => str.replaceAll(' ', '')